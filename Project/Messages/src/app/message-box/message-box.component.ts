import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.sass']
})
export class MessageBoxComponent implements OnInit {

  @Input("data") data;
  @Input("messageBar") messageBar;

  constructor() { }

  ngOnInit(): void {
  }

}
