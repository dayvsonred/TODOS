import { Component, OnInit } from '@angular/core';

import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

    ListUSUARIOS              : any;
    PortaServe                : any;
    ListUSUARIOSID            : any;
    IDUSER                    : any;
    
  constructor(private ClienteService : ClienteService) { }

  ngOnInit() {
    console.log("version:0.01");
  }



  GetUSUARIOS(){

      this.ClienteService.GetUSUARIOS().subscribe(res => {  this.ListUSUARIOS=res; });

  }

  GetUSUARIOSID(ID){

    this.ClienteService.GetUSUARIOSID(ID).subscribe(res => {  this.ListUSUARIOSID=res; });

  }

  a(){
    
  }

  

}
