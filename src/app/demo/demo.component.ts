import { Component } from '@angular/core';
import { LoggerService } from '../service/logger.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  count = 0;
  constructor(private logger: LoggerService) {
  }

  public onLog(): void {
    this.logger.writeCount(this.count++);
  }
}
