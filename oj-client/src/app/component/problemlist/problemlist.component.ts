import { Component, OnInit } from '@angular/core';
import { Problem } from 'app/objects/problem'
import { ProblemdetailsService } from 'app/services/problemdetails.service'

@Component({
  selector: 'app-problemlist',
  templateUrl: './problemlist.component.html',
  styleUrls: ['./problemlist.component.css']
})
export class ProblemlistComponent implements OnInit {
  problems: Problem[] = [];

  constructor(private problemdetailsService: ProblemdetailsService) {
    // this.problems = this.problemlistService.getProblems();
  }
  getProblems(): void {
    //this.problems = this.problemdetailsService.getStaticProblems();
    this.problemdetailsService.getProblems()
      .subscribe(problems => this.problems = problems);
  }

  ngOnInit() {
    this.getProblems();
  }

}
