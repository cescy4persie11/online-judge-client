import { Injectable } from '@angular/core'
import { Problem }		from 'app/objects/problem'
import { PROBLEMS }   from 'app/mock-problems'

@Injectable()

export class ProblemdetailsService {
	getProblems(): Problem[] {
		return PROBLEMS;
	}

	getProblemById(id: number): Problem {
		return PROBLEMS.find((p) => p.id === id);
	}
}
