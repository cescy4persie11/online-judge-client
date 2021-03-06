import { Component, OnInit} from '@angular/core';
import { CollaborationService } from '../../services/collaboration.service'
import { ProblemdetailsService } from '../../services/problemdetails.service'
import { ActivatedRoute, Params }		 from '@angular/router'


declare var ace: any;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  editor: any;
  languages: string[] = ['Java', 'Python'];
  language: string = 'Java';
  sessionId: string;

  output: string = '';

  defaultContect = {
    'Java': `public class Example { \
    \n\tpublic static void main (String[] args) { \
    \n\t\t// Type your java code here\n \
    \n\t} \
    \n}`,
    
    'Python': `class Solution(): \
    \n\tdef example(self): \
    \n\t\t # write your Python code here \
    \n\t\tprint('hello world from feiyzhao')
    \n \
    \ndef main(): \
    \n\tsol = Solution() \
    \n\tsol.example() \
    \n
    \nif __name__ == '__main__': \
    \n\tmain()
    `
  }

  constructor(private collaborationService: CollaborationService,
              private route: ActivatedRoute,
              private problemdetailsService: ProblemdetailsService) {
    
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.sessionId = params['id'];
    })
    this.initEditor();
    
  }

  initEditor(): void {
    this.editor = ace.edit('editor');
    this.editor.setTheme('ace/theme/eclipse');
    this.resetEditor();

    document.getElementsByTagName('textarea')[0].focus();
    this.collaborationService.init(this.editor, this.sessionId);

    this.editor.lastAppliedChanges = null;
    // TODO
    // register change callback
    this.editor.on('change', e => {
      console.log('editor changed' + JSON.stringify(e));
      if (this.editor.lastAppliedChanges != e) {
        console.log("new changes");
        this.collaborationService.change(JSON.stringify(e));
      }
    });

    // cursor movement
    this.editor.getSession().getSelection().on('changeCursor', () => {
      const cursor = this.editor.getSession().getSelection().getCursor();
      console.log("cursor move", JSON.stringify(cursor));
      this.collaborationService.cursorMove(JSON.stringify(cursor));
    });

    // call restore buffer to restore changes
    this.collaborationService.restoreBuffer();
  }

  setLanguage(language: string): void {
    this.language = language;
    this.resetEditor();
  }

  resetEditor(): void {
    console.log("Resetting editor");
    this.editor.getSession().setMode(`ace/mode/${this.language.toLowerCase()}`);
    this.editor.setValue(this.defaultContect[this.language]);
    this.output = '';
  }

  submit() {
    this.output = '';
    // TODO
    const userCodes = this.editor.getValue();

    console.log(userCodes);
    const codes = {
      userCodes: userCodes,
      lang: this.language.toLocaleLowerCase()
    };
    console.log('debug' + codes);
    this.problemdetailsService.buildAndRun(codes)
      // .then(res => this.output = res.text);
     .then(res => {
       
       console.log('client editor received' + res.toString());
       this.output = res.toString()
     });
  }



}
