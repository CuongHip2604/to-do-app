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
      return { ...state, items: action.task };
    case taskAction.UPDATE_TASK:
      const arr = state.items.forEach(el => {
        if (el.id === action.task.id) {
          el.taskName = action.task.taskName
        }
      })
      console.log('arr', state)
    // return { ...state, ...action.task };
    case taskAction.REMOVE_TASK:
    // return { ...state, items: action. };
    // case taskAction.CHANGE_CHECKED:
    //   return {
    //     ...state, items: state.items.map((el, index) => {
    //       if (action.idx === index) {
    //         console.log(111, action.isActive)
    //         el.isActive = action.isActive
    //       }
    //     })
    //   }
    default:
      return state;
  }
}
