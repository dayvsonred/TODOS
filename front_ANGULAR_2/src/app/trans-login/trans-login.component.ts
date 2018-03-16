import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-trans-login',
  templateUrl: './trans-login.component.html'
})

export class TransLoginComponent implements OnInit {

  DadosUser         : any;

  constructor(
    private router: Router,
    private routerURl: ActivatedRoute,
    private authService: AuthService
  ){  }

  ngOnInit() {
    //console.log("init");
    // this.authService.UserValid('aaaaaaaaa');
    // this.authService.UserValid('aaaaaa').subscribe(res=>this.DadosUser=res );
    //console.log(this.routerURl.snapshot.params);
    if(Object.keys(this.routerURl.snapshot.params).length){
      let toke = this.routerURl.snapshot.params['toke'];
      let rota = this.routerURl.snapshot.params['rota'];
      this.authService.UserValid(toke).subscribe(data => {  
        this.DadosUser=data; /* this.showVars(); */
        this.router.navigate(['/'+rota]);  
      });
    };
    //this.router.navigate(['/signin']);
  }


  showVars(){
    console.log("showVars");
    console.log(this.DadosUser);
    console.log(this.authService.RESUserValid);
  }

}
