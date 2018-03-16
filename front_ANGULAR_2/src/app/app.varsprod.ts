import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';


@Injectable()
export class VarsProd {
      
      private Inprod = false;

      private  VarApiLocal:   string  = 'http://localhost:8000';
      private  VarApiProd:    string  = 'http://localhost:8000';


      private  VarLocalIndex:   string  = 'http://localhost/';
      private  VarProdIndex:    string  = 'http://localhost';


      private  VarApi:        string; 
      private  VarURLIndex:   string;
      


      public get ApiLocal():string {
        return this.VarApiLocal;
      }

      public get ApiProd():string {
        return this.VarApiProd;
      }

      public get Api():string {
        return this.VarApi;
      }

      public get VarUrlId():string {
        return this.VarURLIndex;
      }

      constructor(){
        this.VarApi          = environment.production ? this.VarApiProd : this.VarApiLocal;
        this.VarURLIndex     = environment.production ? this.VarProdIndex : this.VarLocalIndex;
      }


}; 

 export const GlobalVariable = Object.freeze({
     BASE_API_URL: 'http://example.com/',
     //... more of your variables
 });

//export const VarsProd;
