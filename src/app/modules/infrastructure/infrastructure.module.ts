import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import Browser from 'src/app/modules/infrastructure/browser/browser';
import BlockedPageRepository from 'src/app/modules/infrastructure/repositories/blocked-page.repository';
import { InfrastructureEffects } from 'src/app/modules/infrastructure/state/infrastructure.effects';
import { InfrastructureReducer } from 'src/app/modules/infrastructure/state/infrastructure.reducer';
import Storage from 'src/app/modules/infrastructure/storage/storage';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forFeature(InfrastructureReducer.featureName, InfrastructureReducer.reduce), EffectsModule.forFeature([InfrastructureEffects])],
  providers: [BlockedPageRepository, Browser, Storage],
  exports: [],
})
export class InfrastructureModule {}
