import { Task } from './models/task.model';

export interface AppState {
  tasks: Task[];
}

export interface TaskState {
  items: Task[]
}
