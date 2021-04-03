import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TaskListComponent } from './pages/task-list/task-list.component';
import {ApiModule} from '../api/api.module';
import {MaterialModule} from '../../material/material.module';


@NgModule({
  declarations: [
    TaskListComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    ApiModule,
    MaterialModule
  ]
})
export class TasksModule { }
