import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractControl, ValidatorFn } from "@angular/forms";

@Injectable({
    providedIn: 'root',
  })
export class DataService {
    constructor(private http: HttpClient){}
    getData(){
        return  this.http.get('http://localhost:3000/threads')
    }
}