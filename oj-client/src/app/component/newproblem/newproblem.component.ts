import { Component, OnInit } from '@angular/core';
import { Problem } from 'app/objects/problem'
import { ProblemdetailsService } from 'app/services/problemdetails.service'

const DEFAULT_PROBLEM: Problem = Object.freeze({
  id: 1,
  name: 'default problem',
  desc: 'default description',
  difficulty: 'easy'
});

@Component({
  selector: 'app-newproblem',
  templateUrl: './newproblem.component.html',
  styleUrls: ['./newproblem.component.css']
})
export class NewproblemComponent implements OnInit {
  newProblem: Problem = Object.assign({}, DEFAULT_PROBLEM);
  difficulties: string[] = ['easy', 'medium', 'hard', 'super'];

  constructor(private problemdetailsService: ProblemdetailsService) { }

  ngOnInit() {
  }

  addProblem() {
    this.problemdetailsService.addProblem(this.newProblem)
      .catch(error => console.log(error.body));
    this.newProblem = Object.assign({}, DEFAULT_PROBLEM);

  }
}
