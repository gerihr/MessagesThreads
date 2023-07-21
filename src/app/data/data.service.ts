import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Message, MessageThread, MessageThreadArray } from "./data.entity";
import { Observable, catchError, map, of, shareReplay } from "rxjs";

@Injectable({
    providedIn: 'root',
  })
export class DataService {

    private readonly BASE_URL = 'http://localhost:3000';

    constructor(private http: HttpClient){}
    getData(): Observable<MessageThreadArray> {
        return this.http.get(`${this.BASE_URL}/threads`).pipe(
            map((res:any) => {
              const modifiedData = [...res];
              modifiedData.forEach(m => {
                m.forEach(element => {
                  if (!element.score) {
                    const replyToElement = m.find(el => el.id == element.reply_to);
                    if (replyToElement) {
                      replyToElement.score = 1;
                    }
                  }
                });
              });
        
              return modifiedData;
            })
          );
        } 
}