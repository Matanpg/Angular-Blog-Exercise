import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../user-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userInfoService: UserInfoService, private router: Router) { }

  userName = '';
  password = '';

  onSubmit(aform) {
    this.userInfoService.addUser(this.userName,this.password);
    this.router.navigate(['/Main']);
    // console.log(this.userInfoService.users);
 }

  ngOnInit() {
  }

}
