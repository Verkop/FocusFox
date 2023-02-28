import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import AppActions from 'src/app/state/app.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'focus-fox'

  constructor(private readonly store: Store) {}

  public ngOnInit(): void {
    this.store.dispatch(AppActions.initializing())
  }
}
