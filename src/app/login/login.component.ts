import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <div>
      <form #formRef="ngForm" (ngSubmit)="onSubmit(formRef.value)">
        <input required
          name="username" 
          [(ngModel)]="username" 
          #usernameRef = "ngModel"
          type='text' 
          value="uername" 
          minlength="3"
          />
          <div *ngIf="usernameRef.errors?.required">this is required</div>
          <div *ngIf="usernameRef.errors?.minlength">should be at least 3 charactors</div>
        <input required
          name="password" 
          [(ngModel)]="password" 
          #passwordRef = "ngModel"
          type='password' 
          value="password"
          minlength="6" 
          />
          <div *ngIf="passwordRef.errors?.required">this is required</div>
        <input type='submit' (click)="onClick()"  />
        <button type="submit">Submit</button>
      </form>
    </div>
    <br />
  `,

  styles: []
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  constructor( @Inject('auth') private service) { }

  ngOnInit() {
  }
  onClick(username, password) {
    console.log(this.service.loginWithCredentials(this.username, this.password));
  }
  onSubmit(formValue) {
    console.log(formValue);
  }


}
