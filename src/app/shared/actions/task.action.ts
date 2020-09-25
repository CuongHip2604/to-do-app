import { ActionType, createAction, props } from '@ngrx/store';
import { Task } from '../models/task.model';

export const GET_TASKS = '[GET TASKS] Action';
export const GET_TASKS_SUCCESS = '[GET TASKS SUCCESS] Action';
export const ADD_TASK = 'ADD_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

export const getTasks = createAction(GET_TASKS);
export const getTasksSuccess = createAction(GET_TASKS_SUCCESS, props<{ task: Task[] }>());
export const addTask = createAction(ADD_TASK, props<{ task: Task }>());
export const updateTask = createAction(UPDATE_TASK, props<{ task: Task }>());
export const removeTask = createAction(REMOVE_TASK, props<{ id: string }>());

// tslint:disable-next-line: max-line-length
export type TaskActions = | ActionType<typeof addTask>
| ActionType<typeof updateTask> | ActionType<typeof removeTask> | ActionType<typeof getTasks> | ActionType<typeof getTasksSuccess>;
