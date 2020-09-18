import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../../services/security/security.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: string;
  user = {
    nombre: '',
    password: '',
  };

  constructor(private securityService: SecurityService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {

    this.securityService.login(this.user).subscribe(
      (res) => {
        if (typeof res.token !== 'undefined') {
          localStorage.setItem('token', res.token);
          this.router.navigate(['cliente']);
        }else{
          this.error = res.mensaje;
        }
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
