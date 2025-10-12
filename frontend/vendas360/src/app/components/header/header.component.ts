import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  message: string = '';
  messageType: 'success' | 'error' | '' = '';

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.message$.subscribe(msg => this.message = msg);
    this.messageService.messageType$.subscribe(type => this.messageType = type);
  }

}
