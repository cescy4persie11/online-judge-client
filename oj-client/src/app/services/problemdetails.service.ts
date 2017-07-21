import { Injectable } from '@angular/core'
import { Problem }		from 'app/objects/problem'
import { Http, Response, Headers } from '@angular/http'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import { PROBLEMS }   from 'app/mock-problems'

@Injectable()

export class ProblemdetailsService {
	problems: Problem[] = PROBLEMS;

	private _problemSource = new BehaviorSubject<Problem[]>([]);

	constructor(private http: Http) {

	}

	getStaticProblems(): Problem[] {
		return this.problems;
	}

	addStaticProblem(newProblem: Problem) {
		newProblem.id = this.problems.length + 1;
		this.problems.push(newProblem);

	}

	getProblems(): Observable<Problem[]> {
		this.http.get('api/v1/problems')
			.toPromise()
			.then((res: Response) => {
				this._problemSource.next(res.json());
			})
			.catch(this.handleError);
		return this._problemSource.asObservable();
	}

	getProblemById(id: number) {
		return this.http.get(`api/v1/problems/${id}`)
		.toPromise()
		.then((res: Response) => res.json())
		.catch(this.handleError);
	}

	addProblem(problem: Problem) {
		const headers = new Headers({'content-type': 'application/json'});
		return this.http.post('/api/v1/problems', problem, {headers})
			.toPromise()
			.then((res: Response) => {
				this.getProblems();
				return res.json();
			})
			.catch(this.handleError)
	}

	private handleError(error: any): Promise<any> {
		console.error("An error occured", error);
		return Promise.reject(error);
	}
}
