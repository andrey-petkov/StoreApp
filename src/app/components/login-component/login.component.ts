import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  submitted = false;
  private returnUrl: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    // redirect to home if already logged in
    console.log('Login status : ' + localStorage.getItem('loggedIn'))

    if (localStorage.getItem('loggedIn') === 'true') {
      this.router.navigate(['/']);
    }

    this.loginForm = new FormGroup({
      'login': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    console.log('Will redirect to : ' + this.returnUrl);
    this.submitted = true;
    localStorage.setItem('loggedIn', 'true');
    this.router.navigate([this.returnUrl]);
    /*alert(JSON.stringify(this.loginForm.value));*/
  }
}
