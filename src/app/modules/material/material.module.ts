import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatMenuModule } from '@angular/material/menu'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatIconModule } from '@angular/material/icon'
import { MenuButtonComponent } from 'src/app/modules/material/components/menu-button/menu-button.component'
import { MenuButtonItemDirective } from 'src/app/modules/material/components/menu-button/menu-button-item.directive'

@NgModule({
  declarations: [MenuButtonComponent, MenuButtonItemDirective],
  imports: [MatButtonModule, MatMenuModule, MatButtonToggleModule, MatIconModule],
  providers: [],
  exports: [MatButtonModule, MatMenuModule, MatButtonToggleModule, MatIconModule, MenuButtonComponent, MenuButtonItemDirective],
})
export class MaterialModule {}
