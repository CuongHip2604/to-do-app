import { AppState, TaskState } from './../task.state';
import * as taskAction from '../actions/task.action';
import { Task } from '../models/task.model';


const initialState: TaskState = {
  items: []
};

// tslint:disable-next-line: typedef
export function taskReducer(state: TaskState = initialState, action: taskAction.TaskActions) {
  switch (action.type) {
    case taskAction.GET_TASKS:
      return state;
    case taskAction.GET_TASKS_SUCCESS:
      return { ...state, items: action.task };
    case taskAction.ADD_TASK:
      return {
        ...state,
        items: [...state.items, action.task]
      };
    case taskAction.UPDATE_TASK:
      let items = [...state.items]
      let newTask = action.task
      let taskId = items.findIndex(task => task.id === newTask.id);
      if (taskId >= 0) {
        items[taskId] = newTask
      }
      return { ...state, items }
    case taskAction.REMOVE_TASK:
      let removeTaskId = action.id
      let arr = state.items.filter(task => task.id !== removeTaskId)
      return { ...state, items: arr }
    case taskAction.CHANGE_CHECKED:
      let arrClone = [...state.items]
      let task = action.task
      let id = arrClone.findIndex(el => el.id === task.id);
      if (taskId >= 0) {
        arrClone[id] = task
      }
      return { ...state, items: arrClone }
    default:
      return state;
  }
}
