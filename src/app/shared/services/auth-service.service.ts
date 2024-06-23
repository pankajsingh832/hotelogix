import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  public userClaim: any;

  constructor() {
    const claim = localStorage.getItem('userClaim');

    if (claim) {
      this.userClaim = JSON.parse(claim);
    } else {
      this.userClaim = {
        userId: null,
        isAuthenticated: false,
        token: null,
      };
    }
  }

  logout = () => {
    this.userClaim = JSON.parse(
      JSON.stringify({
        userId: null,
        isAuthenticated: false,

        token: null,

      })
    );
    localStorage.clear();
    return true;
  };

  isAuthorised() {
    let {isAuthenticated} = this.userClaim;
    return isAuthenticated;
  }
}
