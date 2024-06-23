import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ApiService} from "../../../shared/services/api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  public addTaskParams = {
    title: null,
    taskId: null,
    status: null,
    description: null,
    startDate: null,
  }
  public loading = false;

  constructor(private cd: ChangeDetectorRef,
              private api: ApiService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  addTask() {
    this.loading = true;
    this.api.postMethod('createTask', this.addTaskParams).subscribe(res => {
      if (res.status) {
        this.router.navigate(['/manager/taskList'])
      } else {
        alert(res.msg)
      }
      this.loading = false;
    }, error => {
      alert(error);
      this.loading = false;
    })
  }


  getTaskDetails(taskId:number) {
    this.api.postMethod('getTaskList', {taskId}).subscribe(res => {
      if (res.status) {
        const task = res.data[0].details[0];
        const {taskId, title, dueDate, description, status} = task;
        this.addTaskParams.title = title;
        this.addTaskParams.description = description;
        this.addTaskParams.taskId = taskId;
        this.addTaskParams.status = status;
        this.addTaskParams.startDate = dueDate;
      } else {
        alert(res.msg)
      }
    }, error => {
      alert(error)
    })
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      if (params['taskId']) {
        this.getTaskDetails(params['taskId']);
      }
    })
  }
}
