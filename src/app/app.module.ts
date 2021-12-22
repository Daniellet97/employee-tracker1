import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { HttpClientModule } from '@angular/common/http';
import { HaederComponent } from './components/haeder/haeder.component';
import { AppRoutingModule } from './app-routing.module';
import { SendEmailComponent } from './components/send-email/send-email.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    HomePageComponent,
    FooterComponent,
    EmployeeDetailsComponent,
    HaederComponent,
    SendEmailComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
