import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TaskListComponent} from "./task-list/task-list.component";
import {AddTaskComponent} from "./add-task/add-task.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'taskList',
    pathMatch: 'full'
  },
  {
    path: 'taskList',
    component: TaskListComponent,
  },
  {
    path: 'add',
    component: AddTaskComponent,
  },
  {
    path: 'add/:taskId',
    component: AddTaskComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
