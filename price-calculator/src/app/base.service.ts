import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http: HttpClient) { }

  get(path: any, isAuthorizedRequest: boolean): Observable<any> {
    if(isAuthorizedRequest) {
      return this.http.get(path, {
        headers: {
          "Authorization": this.tokenGenerator()
        }
      })
    } else {
      return this.http.get(path);
    }
  }

  post(path: any, isAuthorizedRequest:boolean, data: any): Observable<any> {
    try {
      if(isAuthorizedRequest) {
        return this.http.post(path, data, {
          headers: {
            "Authorization": this.tokenGenerator()
          }
        }) 
      } else {
        return this.http.post(path, data);
      }
    } catch (err)  {
      console.log(err);
    }
  }

  put(path: any, isAuthorizedRequest: boolean, data: any) :Observable<any> {
    if(isAuthorizedRequest) {
      return this.http.put(path, data, {
        headers: {
          "Authorization": this.tokenGenerator()
        }
      }) 
    } else {
      return this.http.put(path, data);
    }
  }

  delete(path:any, isAuthorizedRequest: boolean, data: any): Observable<any> {
    if(isAuthorizedRequest) {
      return this.http.request("delete",path, {
        headers: {
          "Authorization": this.tokenGenerator()
        },
        body: data
      })
    } else {
      return this.http.request("delete",path,{
        body: data
      });
    }
  }

  private tokenGenerator() {
    return "Bearer " + sessionStorage.getItem("token")
  }
}