import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  path: string = '';
  config: string = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.path = this.activatedRoute.snapshot.firstChild?.url[0]?.path || '';
      this.config = this.activatedRoute.snapshot.firstChild?.url[1]?.path || '';
      console.log(this.path, this.config);
    });
  }

}
