
import { Injectable } from '@angular/core';
import { Http, Response, Jsonp, URLSearchParams, ResponseOptions} from '@angular/http';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';  
import { VarsProd } from '../app.varsprod';


@Injectable()
export class ClienteService {
  URLBASE                     : any;
  URLIndex                    : any;

  constructor(private http:Http, private varsProd:VarsProd ) {
    this.URLBASE = this.varsProd.Api;
    this.URLIndex = this.varsProd.VarUrlId;
  }

  extractData(res: Response){
    return res.json();
  }


  GetUSUARIOS(){
    return this.http.post(this.URLBASE + '/api/WEBuser/',null)
    .map(
            response => {
              console.log(response.json().dados)
                return response.json().dados;
            },
            error => {
                return error;
            }
    );
  }

  

  GetUSUARIOSID(ID){
    return this.http.post(this.URLBASE + '/api/WEBuserID/'+ID,null)
    .map(
            response => {
              console.log(response.json().dados)
                return response.json().dados;
            },
            error => {
                return error;
            }
    );
  }



}
