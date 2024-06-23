import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator, MatPaginatorIntl} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ApiService} from "../../../shared/services/api.service";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  displayedColumns: string[] = ['taskId', 'title', 'description', 'status', 'dueDate', 'more'];

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);
  @ViewChild(MatSort) matsort!: MatSort;
  public actulaDataList = [];
  public status: any = null;

  constructor(private cd: ChangeDetectorRef,
              private api: ApiService) {
  }


  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.matsort;
    this.cd.detectChanges();
  }

  applyFilter(event: any) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getFilterdData() {
    this.dataSource.data = this.actulaDataList.filter((task:any) => {
      if (this.status != null) {
       return this.status == task.status
      }
       return true;
    })
  }

  getTaskList() {
    this.api.postMethod('getTaskList').subscribe(res => {
      if (res.status) {
        // this.dataSource.data = res.data[0].details;
        this.actulaDataList = res.data[0].details;
        this.getFilterdData();
      } else {
        // alert(res.msg)
      }
    }, error => {
      alert(error)
    })
  }

  deleteTask(task: any) {
    alert(`Are You sure want to delete ${task.title} task?`);
    // alert(taskId);
    this.api.postMethod('deleteTask', {taskId: task.taskId}).subscribe(res => {
      if (res.status) {
        this.getTaskList();
      } else {
        alert(res.msg)
      }
    }, error => {
      alert(error)
    })
  }

  ngOnInit(): void {
    this.getTaskList();
  }

}
