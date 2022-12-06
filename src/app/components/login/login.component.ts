import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor
  (
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      usernameLoginValue: new FormControl('mor_2314', Validators.required),
      passwordFieldValue: new FormControl('83r5^_', Validators.required),
      rememberMe: new FormControl(false)
    })
  }

  public login() {

    const bodyToLogin = {
      username: this.form.controls['usernameLoginValue'].value,
      password: this.form.controls['passwordFieldValue'].value
    }

    const rememberMe = this.form.controls['rememberMe'].value

    this.productService.login(bodyToLogin, rememberMe).subscribe(value => {
      this.router.navigate(['content'])
    })
  }

}
