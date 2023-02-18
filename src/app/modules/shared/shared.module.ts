import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { HeaderContainerComponent } from 'src/app/modules/shared/containers/header/header.container.component';
import { HeaderEffects } from 'src/app/modules/shared/containers/header/state/header.effects';
import { HeaderReducer } from 'src/app/modules/shared/containers/header/state/header.reducer';

@NgModule({
  declarations: [HeaderContainerComponent],
  imports: [CommonModule, MaterialModule, StoreModule.forFeature(HeaderReducer.featureName, HeaderReducer.reduce), EffectsModule.forFeature([HeaderEffects])],
  providers: [],
  exports: [HeaderContainerComponent],
})
export class SharedModule {}
