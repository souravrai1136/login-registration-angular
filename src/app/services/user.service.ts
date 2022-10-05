import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface data {
  userId: any,
  id: any;
  title: any;
  completed: any;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'http://localhost:3000/user';

  DataUrl = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient) { }

  login() {
    return this.http.get(this.apiUrl)
  }

  addUser(data: any) {
    return this.http.post(this.apiUrl, data)
  }
  getData() {
    return this.http.get<data>(this.DataUrl)
  }
}
