import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import ContentScripts from 'src/app/modules/content-scripts/content-scripts'
import { InfrastructureModule } from 'src/app/modules/infrastructure/infrastructure.module'

@NgModule({
  declarations: [],
  imports: [CommonModule, InfrastructureModule],
  providers: [ContentScripts],
  exports: [],
})
export class ContentScriptModule {}
