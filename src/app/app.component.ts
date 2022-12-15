import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StoreApp';
  items: MenuItem[] = [];

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
      label: 'Logout',
      routerLink: 'login',
      command: (event: Event) => { this.logoutOnClick() }
    }
    ];
  }

  private logoutOnClick() {
    console.log('logout click');
    if ( localStorage.getItem('loggedIn') ){
      localStorage.setItem('loggedIn', 'false');
    }
  }

}
