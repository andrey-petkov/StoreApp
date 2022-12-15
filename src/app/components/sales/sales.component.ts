import {Component, Input, OnInit} from '@angular/core';
import {StoreData} from "../../classes/store-data";
import {ColumnData} from "../../classes/column-data";
import {SalesData} from "../../classes/sales-data";

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})

export class SalesComponent implements OnInit{
  columnsData: ColumnData[] = [];
  salesData: SalesData[] = [];

  ngOnInit(){
    this.columnsData = JSON.parse(localStorage.getItem('columns-data')!);
    this.salesData = JSON.parse(localStorage.getItem('sales-data')!);
  }


}
