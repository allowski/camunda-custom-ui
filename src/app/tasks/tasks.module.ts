import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TaskListComponent } from './pages/task-list/task-list.component';
import {MaterialModule} from '../../material/material.module';


@NgModule({
  declarations: [
    TaskListComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    MaterialModule
  ]
})
export class TasksModule { }
