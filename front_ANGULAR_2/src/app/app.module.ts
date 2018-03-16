import { FormatCurrencyPipe } from './pipes/format-currency.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';
import { HttpModule } from '@angular/http';
import { MyDatePickerModule } from 'mydatepicker';
import { ModalModule } from 'ngx-bootstrap';
import { SelectModule } from 'angular2-select';
import { BrMasker4Module } from 'brmasker4';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { routing } from './app.routing';
import { VarsProd } from './app.varsprod';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';



import { AppComponent } from './app.component';
import { TransLoginComponent } from './trans-login/trans-login.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteService } from './cliente/cliente.service';


@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    FormatCurrencyPipe,
    TransLoginComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    MyDatePickerModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    TabsModule.forRoot(),
    TimepickerModule.forRoot(),
    SelectModule,
    BrMasker4Module,
    CurrencyMaskModule,
    routing,
  ],
   providers: [ClienteService, AuthGuard, AuthService, VarsProd], 
  bootstrap: [AppComponent]
})
export class AppModule { }
export class MyTestAppModule {}