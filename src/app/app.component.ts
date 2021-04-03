import {AfterViewInit, Component} from '@angular/core';
import {KeycloakService} from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'angular-open-api-generator';

  constructor(private keycloak: KeycloakService) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.keycloak.login();
    }, 2000);
  }

}
