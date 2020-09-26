import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Task } from 'src/app/shared/models/task.model';
import { TaskService } from 'src/app/shared/task.service';
import { AppState } from 'src/app/shared/task.state';
import * as taskActions from '../../shared/actions/task.action';
import { UUID } from 'angular2-uuid';
import { Observable } from 'rxjs';
import { itemsSelector } from '../../shared/selectors/task.selector';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  isOpen = true;
  index = 0;
  inputTask = '';
  tasks$: Task[];
  constructor(
    private store: Store<AppState>,
    private taskService: TaskService
  ) { }

  ngOnInit() {
    //load task
    this.store.dispatch(taskActions.getTasks())

    // Store Selctor
    this.store.pipe(select(itemsSelector)).subscribe(rs => {
      this.tasks$ = rs
    })
  }
  checked(index) {
    this.index = index
    const item = this.tasks$[this.index]
    const data: Task = {
      id: item.id,
      isActive: true,
      taskName: item.taskName
    };
    this.store.dispatch(taskActions.changeChecked({ task: data }))
  }

  addTask() {
    const data: Task = {
      id: UUID.UUID(),
      isActive: false,
      taskName: this.inputTask
    };
    this.store.dispatch(taskActions.addTask({ task: data }));
  }
  updateTask() {
    const data: Task = {
      id: this.tasks$[this.index].id,
      isActive: false,
      taskName: this.inputTask
    }
    this.store.dispatch(taskActions.updateTask({ task: data }));
  }
  deleteTask(idx) {
    this.index = idx
    const id = this.tasks$[this.index].id
    this.store.dispatch(taskActions.removeTask({ id }));
  }
  editTask(idx?) {
    this.index = idx
    this.isOpen = false
    this.inputTask = this.tasks$[idx].taskName
  }
}
