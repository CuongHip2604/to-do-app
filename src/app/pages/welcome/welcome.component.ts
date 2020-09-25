import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Task } from 'src/app/shared/models/task.model';
import { TaskService } from 'src/app/shared/task.service';
import { AppState } from 'src/app/shared/task.state';
import * as taskActions from '../../shared/actions/task.action';
import { UUID } from 'angular2-uuid';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  isChecked: false;
  inputTask = '';
  tasks$: Observable<Task[]>;
  constructor(
    private store: Store<AppState>,
    private taskService: TaskService
  ) {
    this.tasks$ = store.select('tasks');
  }

  ngOnInit() {
    this.taskService.getTasks$().subscribe(rs => {
      this.store.dispatch(taskActions.getTasksSuccess({task: rs}))
    })
  }
  checked() {
    console.log(this.isChecked);
  }

  addTask() {
    const data: Task = {
      id: UUID.UUID(),
      isActive: false,
      taskName: this.inputTask
    };
    this.store.dispatch(taskActions.addTask({ task: data }));
  }
}
