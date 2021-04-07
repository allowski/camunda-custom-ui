import {AfterViewInit, Component} from '@angular/core';
import {KeycloakService} from 'keycloak-angular';
import {TaskService} from './api/services/task.service';
import {HttpClient} from '@angular/common/http';
import {EngineService} from './api/services/engine.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'angular-open-api-generator';

  constructor(private keycloak: KeycloakService, private tasks: TaskService, private engine: EngineService, private cli: HttpClient) {
    keycloak.loadUserProfile().then(r => {
      this.title = r.firstName;
    });
  }

  ngAfterViewInit() {
  }

  logout() {
    this.keycloak.logout(window.location.href);
  }

}
