import {ChangeDetectorRef, Component} from '@angular/core';
import {ApiService} from "../../../shared/services/api.service";
import {AuthServiceService} from "../../../shared/services/auth-service.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private authServiceService: AuthServiceService) {
  }
  logout() {
    if (this.authServiceService.logout()) {
      location.reload();
    }
  }
}
