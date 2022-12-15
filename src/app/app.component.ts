import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {HttpClient} from "@angular/common/http";
import {StoreData} from "./classes/store-data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StoreApp';

  items: MenuItem[] = [];
  storeData: StoreData = new StoreData;

  constructor(private httpClient: HttpClient){}

  ngOnInit(){
    this.items = [{
      label: 'Store',
      items: [
        {
          label: 'New',
          routerLink: 'new'
        },
        {
          label: 'List',
          routerLink: 'sales'
        }
      ]
    },
    {
      label: 'Login',
      routerLink: 'login',
      command: (event: Event) => { this.logoutOnClick(event) }
    }
    ];

    this.httpClient.get<StoreData>("assets/potato_sales.json").subscribe({
      next: (response) => {
        this.storeData = response;
      },
      complete: () => {
        console.log('completed');
        localStorage.setItem('columns-data', JSON.stringify(this.storeData.column));
        localStorage.setItem('sales-data', JSON.stringify(this.storeData.data));
      },
      error: (err) => {
        alert("Error in loading application data!" + err.error());
      }
    });
  }

  private logoutOnClick(event: Event) {
    console.log('logout click');
    if ( localStorage.getItem('loggedIn') ){
      localStorage.setItem('loggedIn', 'false');
    }

  }

}
