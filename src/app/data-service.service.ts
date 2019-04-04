import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Entity } from './entity';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private messageSource = new BehaviorSubject<Entity>({ region: 'ASIA', certification_light: 'B'});
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: Entity) {
    this.messageSource.next(message);
  }
}
