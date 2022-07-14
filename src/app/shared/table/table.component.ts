import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  table=false
@Input() data=[]as any
@Input() header=[] as any
@Input() classNames=''

@Output() emitEdit = new EventEmitter<any>();
@Output() emitEdit2 = new EventEmitter<any>();
@Output() emitDelete = new EventEmitter<any>();


dataSource=new MatTableDataSource(this.data)
  constructor() { }

  ngOnInit(): void {
    if(this.data.length > -1){
      return

    }
    this.table=true
    console.log(this.table)
  }



}
