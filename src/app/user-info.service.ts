import { Injectable } from '@angular/core';

@Injectable()
export class UserInfoService {

  users = [{}];

  addUser(userName, password) {;
    this.users.push({userName,password})
  }

  constructor() { }

}
