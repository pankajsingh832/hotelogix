import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ManagerRoutingModule} from './manager-routing.module';
import {TaskListComponent} from './task-list/task-list.component';
import {SharedModule} from "../../shared/modules/shared/shared.module";
import {AddTaskComponent} from './add-task/add-task.component';
import {HeaderComponent} from './header/header.component';
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
    declarations: [
        TaskListComponent,
        AddTaskComponent,
        HeaderComponent,

    ],
    imports: [
        CommonModule,
        ManagerRoutingModule,
        SharedModule,

    ]
})
export class ManagerModule {
}
