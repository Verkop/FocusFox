import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import DashboardPageActions from 'src/app/modules/dashboard/containers/dashboard-page/state/dashboard-page.actions'

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.container.component.html',
})
export class DashboardPageContainerComponent {
  constructor(private readonly store: Store) {}

  public onBlockCurrentPageRequested(): void {
    this.store.dispatch(DashboardPageActions.blockCurrentPageRequested())
  }
}
