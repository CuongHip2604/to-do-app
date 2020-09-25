import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TaskState } from '../task.state';

const tasks = createFeatureSelector<TaskState>('tasks')
export const itemsSelector = createSelector(tasks, state => state.items)
