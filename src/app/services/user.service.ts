import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // baseUrl:String="http://localhost:8080";
  constructor(private http: HttpClient) { }
  
  
  //add user
public addUser(data:any){
  return this.http.post<any>(`${baseUrl}/user/`,data);
}

}
