import { Component, OnInit } from '@angular/core'
import { globals } from '@bc/global-variables'
import { FormBuilder } from '@angular/forms'
import { LocalStorageService, ApiService } from '@services/index'
import { SocialAuthService, GoogleLoginProvider } from 'angularx-social-login';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router'
import { Store } from '@ngrx/store';
import { userLogined, userLougout } from '@bc/state/actions/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  checkoutForm = this.FormBuilder.group({
    email: '',
    pass: '',
  })
  checkoutFormSignUp = this.FormBuilder.group({
    email: '',
    mobile: '',
  })

  errorLogin = false
  loginInformationEmptyError = false
  registeredUserInformtion;
  subscription: Subscription = new Subscription;
  userData;
  userDataFromGoogle;

  constructor(
    private socialAuthService: SocialAuthService,
    private FormBuilder: FormBuilder,
    private ApiService: ApiService,
    public globals: globals,
    private localStorageService: LocalStorageService,
    private store: Store
  ) { }
  ngOnInit(): void { }
  tryLogin() {
    this.ApiService.tryLogin(
      this.checkoutForm['value']['email'],
      this.checkoutForm['value']['pass'],
    ).subscribe(
      (user) => {
        this.store.dispatch(userLogined({ user }));
      }
    )
  }
  tryLoginAfterSignup(email, password) {
    this.ApiService.userSignup(email, password).subscribe(
      (user) => {
        this.store.dispatch(userLogined({ user }));
      }
    )
  }
  userSignup() {
    this.ApiService.userSignup(
      this.checkoutFormSignUp['value']['email'],
      this.checkoutFormSignUp['value']['mobile']
    ).subscribe(
      (user) => {
        console.log(user);
        this.store.dispatch(userLogined({ user }));
      }
    )
  }



  googleSignin(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(
        d => {
          this.userDataFromGoogle = d;
          this.globals.loginUserProfileImage = this.userDataFromGoogle.photoUrl;
          this.localStorageService.setItem('photoUrlSession', this.userDataFromGoogle.photoUrl);
          this.tryLoginAfterSignup(this.userDataFromGoogle.email, this.userDataFromGoogle.email);
        }
      )
      .catch();
  }

  signOut() {
    this.store.dispatch(userLougout());
  }



}
