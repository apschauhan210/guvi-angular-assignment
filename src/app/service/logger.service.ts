import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }
  public writeCount(count: number) {
    console.warn(count);
  }
}
