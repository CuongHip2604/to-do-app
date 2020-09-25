import { TaskEffects } from './effects/task.effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { taskReducer } from './reducers/task.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TaskService } from './task.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('tasks', taskReducer),
    EffectsModule.forFeature([TaskEffects])
  ],
  providers: [TaskService]
})
export class SharedModule { }
