import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-page-info',
  templateUrl: './page-info.component.html',
})
export class PageInfoComponent {
  @Output() public blockCurrentPageRequested = new EventEmitter<void>()
}
