import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTable } from '@angular/material/table';

export interface UsersData {
  name: string;
  id: number;
  age: number;
}

const ELEMENT_DATA: UsersData[] = [
  {id: 1560608769632, name: 'Artificial Intelligence', age: 0},
  {id: 1560608796014, name: 'Machine Learning', age: 0},
  {id: 1560608787815, name: 'Robotic Process Automation', age: 0},
  {id: 1560608805101, name: 'Blockchain', age: 0}
];

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource = ELEMENT_DATA;

  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  constructor() { }

  ngOnInit() {
  }

}