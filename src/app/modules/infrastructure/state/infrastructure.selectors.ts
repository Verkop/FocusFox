import { createFeatureSelector } from '@ngrx/store'
import { InfrastructureReducer } from 'src/app/modules/infrastructure/state/infrastructure.reducer'
import { InfrastructureState } from 'src/app/modules/infrastructure/state/infrastructure.state'

export default class InfrastructureSelectors {
  private static readonly featureSelector = createFeatureSelector<InfrastructureState>(InfrastructureReducer.featureName)
}
