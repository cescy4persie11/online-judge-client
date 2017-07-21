/**
 * Created by feiyzhao on 7/10/17.
 */
import { Injectable } from '@angular/core'

import { Problem } from 'app/objects/problem'

import { PROBLEMS } from 'app/mock-problems'

@Injectable()
export class ProblemlistService {
  getProblems(): Problem[] {
    return PROBLEMS;
  }

  getProblem(id: number): Problem {
    return PROBLEMS.find( (problem) => problem.id === id);
  }
}
