import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;
  error: String;

  constructor(private router: Router,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.username = '';
    this.password = '';
  }

  onKeydown(event) {
    if (event.key === "Enter") {
      this.logIn()
    }
  }

  logIn() {
    this.authService.logIn(this.username, this.password).subscribe(c => {
        sessionStorage.setItem('id', c.id);
        sessionStorage.setItem('token', c.token);

        this.router.navigate(['timeline'])
      }, e => this.error = e.error.message
    )
  }

  public closeAlert() {
    this.error = null;
  }

}
