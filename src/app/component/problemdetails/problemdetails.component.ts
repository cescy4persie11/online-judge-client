import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params }		 from '@angular/router'
import { Problem } from 'app/objects/problem'
import { ProblemdetailsService } from 'app/services/problemdetails.service'

@Component({
  selector: 'app-problemdetails',
  templateUrl: './problemdetails.component.html',
  styleUrls: ['./problemdetails.component.css']
})
export class ProblemdetailsComponent implements OnInit {
	problem: Problem;

  constructor(
		private problemdetailService: ProblemdetailsService,
		private route: ActivatedRoute,
	) { }

  ngOnInit() {
  	this.route.params.subscribe(
			(params: Params) => {
				this.problem = this.problemdetailService.getProblemById(+params['id']);
			}
		)
	}
}
