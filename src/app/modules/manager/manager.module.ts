import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { TaskListComponent } from './task-list/task-list.component';
import {SharedModule} from "../../shared/modules/shared/shared.module";
import { AddTaskComponent } from './add-task/add-task.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [
    TaskListComponent,
    AddTaskComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    SharedModule,
    MatIconModule,
    MatSelectModule,
  ]
})
export class ManagerModule { }
