import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { Tasks } from '../helper/fake-data';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private afs: AngularFirestore) { }

  getTasks$() {
    return of<Task[]>(Tasks);
  }

  addTask(data) {
    const addNew = Tasks.push(data)
    return of(addNew);
  }
}
