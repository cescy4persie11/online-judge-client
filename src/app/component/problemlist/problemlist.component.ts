import { Component, OnInit } from '@angular/core';
import { Problem } from 'app/objects/problem'
import { ProblemlistService } from 'app/services/problemlist.service'

@Component({
  selector: 'app-problemlist',
  templateUrl: './problemlist.component.html',
  styleUrls: ['./problemlist.component.css']
})
export class ProblemlistComponent implements OnInit {
  problems: Problem[];

  constructor(private problemlistService: ProblemlistService) {
    // this.problems = this.problemlistService.getProblems();
  }
  getHeroes(): void {
    this.problems = this.problemlistService.getProblems();
  }

  ngOnInit() {
    this.getHeroes();
  }

}
