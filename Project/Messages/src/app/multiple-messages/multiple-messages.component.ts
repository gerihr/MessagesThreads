import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-messages',
  templateUrl: './multiple-messages.component.html',
  styleUrls: ['./multiple-messages.component.sass']
})
export class MultipleMessagesComponent implements OnInit {

  @Input("data") data;
  isExpanded=true;
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
