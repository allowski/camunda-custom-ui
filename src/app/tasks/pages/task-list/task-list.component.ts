import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../../api/services/task.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  constructor(private task: TaskService, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/camunda/engine-rest/task').subscribe(r => console.log);
  }

}
