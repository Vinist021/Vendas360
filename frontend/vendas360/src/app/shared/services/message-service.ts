import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messageSource = new BehaviorSubject<string>('');
  private typeSource = new BehaviorSubject<'success' | 'error' | ''>('');

  message$ = this.messageSource.asObservable();
  messageType$ = this.typeSource.asObservable();

  showMessage(message: string, type: 'success' | 'error') {
    this.messageSource.next(message);
    this.typeSource.next(type);

    setTimeout(() => {
      this.clearMessage();
    }, 7000);
  }

  clearMessage() {
    this.messageSource.next('');
    this.typeSource.next('');
  }

}
