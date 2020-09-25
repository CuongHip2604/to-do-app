import { Task } from './../models/task.model';
import { AppState } from './../task.state';
import * as taskAction from '../actions/task.action';
import { Task } from '../models/task.model';

// interface TaskState: Task = {}

const initialState: AppState = {
  // item: []
};

// tslint:disable-next-line: typedef
export function taskReducer(state: AppState[] = [initialState], action: taskAction.TaskActions) {
  switch (action.type) {
    // case taskAction.GET_TASKS:
    //   return state;
    // case taskAction.GET_TASKS_SUCCESS:
    //   return [...st];
    case taskAction.ADD_TASK:
      return [...state, action.task];
    // case taskAction.UPDATE_TASK:
    //   return [...state, action.payload];
    // case taskAction.REMOVE_TASK:
    //   return [...state, action.payload];
    default:
      return state;
  }
}
