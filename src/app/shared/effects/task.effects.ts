import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { TaskService } from '../task.service';
import * as taskActions from '../actions/task.action';

@Injectable()
export class TaskEffects {
  @Effect()
  loadTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(taskActions.getTasks),
      mergeMap(() => this.taskService.getTasks$()),
      map(tasks => {
        console.log(222, tasks)
        return taskActions.getTasksSuccess({ task: tasks });
      }),
    )
  );

  constructor(
    private actions$: Actions,
    private taskService: TaskService
  ) {}
}
