import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';
import { MessageThread, MessageThreadArray } from '../data/data.entity';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  messageData$!: Observable<MessageThreadArray>;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.messageData$ = this.dataService.getData();
  }

}
