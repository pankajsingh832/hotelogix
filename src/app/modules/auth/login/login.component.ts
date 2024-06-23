import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../shared/services/api.service";
import {AuthServiceService} from "../../../shared/services/auth-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginParams = {
    username: null,
    password: null,
    language: 'en'
  }
  public loading = false;

  constructor(private api: ApiService,
              private auth: AuthServiceService,
              private  router: Router) {
  }

  loginUser() {
    this.loading = true;
    this.api.postMethod('loginOutletManager', this.loginParams).subscribe(res => {
      if (res.status) {
        // console.log(res);
        let user = res.data[0].details[0];
         const {userId,token} = user;
         this.auth.userClaim = {...this.auth.userClaim, isAuthenticated: true, userId, token};

         localStorage.setItem('userClaim', JSON.stringify(this.auth.userClaim));
         location.reload();
      } else {
        alert(res.msg);
      }
      this.loading = false;

    }, (error) => {
      console.log('com')
      alert(error);
    })
  }

  ngOnInit(): void {
    if(this.auth.isAuthorised()){
      this.router.navigate(['/manager'])
    }
  }
}
