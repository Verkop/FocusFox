import { Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core'
import { MenuButtonItemDirective } from 'src/app/modules/material/components/menu-button/menu-button-item.directive'

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss'],
})
export class MenuButtonComponent {
  @ContentChildren(MenuButtonItemDirective) items!: QueryList<MenuButtonItemDirective>

  @Input() public mainActionName!: string

  @Output() public mainActionClicked = new EventEmitter()
}
