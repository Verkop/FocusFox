import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { DashboardPageReducer } from 'src/app/modules/dashboard/containers/dashboard-page/state/dashboard-page.reducer'
import { DashboardPageEffects } from 'src/app/modules/dashboard/containers/dashboard-page/state/dashboard-page.effects'
import { NgModule } from '@angular/core';
import { PageInfoComponent } from 'src/app/modules/dashboard/components/page-info/page-info.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { DashboardPageContainerComponent } from 'src/app/modules/dashboard/containers/dashboard-page/dashboard-page.container.component';

@NgModule({
  declarations: [DashboardPageContainerComponent, PageInfoComponent],
  imports: [CommonModule, MaterialModule, StoreModule.forFeature(DashboardPageReducer.featureName, DashboardPageReducer.reduce), EffectsModule.forFeature([DashboardPageEffects])],
  providers: [],
  exports: [DashboardPageContainerComponent],
})
export class DashboardModule {}
