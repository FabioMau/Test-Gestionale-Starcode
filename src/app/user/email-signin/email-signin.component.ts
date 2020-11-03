import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-email-signin',
  templateUrl: './email-signin.component.html',
  styleUrls: ['./email-signin.component.scss']
})
export class EmailSigninComponent implements OnInit {
  form: FormGroup;

  type: 'login' | 'reset' = 'login';
  loading = false;

  serverMessage: string;

  constructor(private afAuth: AngularFireAuth, private fb: FormBuilder, private router: Router,) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: [
        '',
        [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.minLength(6), Validators.required]
      ]
    });
  }

  changeType(val) {
    this.type = val;
  }

  get isLogin() {
    return this.type === 'login';
  }

  get isPasswordReset() {
    return this.type === 'reset';
  }

  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }

  async onSubmit() {
    this.loading = true;

    const email = this.email.value;
    const password = this.password.value;

    try {
      if (this.isLogin) {
        await this.afAuth.signInWithEmailAndPassword(email, password).then((result) => {
          this.router.navigate(['/']);
        }, (result) => {
          console.log(result);
        });
      }
      if (this.isPasswordReset) {
        await this.afAuth.sendPasswordResetEmail(email);
        this.serverMessage = 'Controlla la tua email';
      }
    } catch (err) {
      this.serverMessage = err;
    }

    this.loading = false;
  }
}