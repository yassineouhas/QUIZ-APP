import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-option-list',
  templateUrl: './option-list.component.html'
})
export class OptionListComponent {
  @Input() options: any[]=[];

  deleteOption(index: number) {
    this.options.splice(index, 1);
  }

  trackByFn(index: any, item: any) {
    return index;
  }
}
