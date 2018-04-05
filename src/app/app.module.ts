import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { EnteranceComponent } from './enterance/enterance.component';
import { AppRoutingModule }     from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    EnteranceComponent,
    DashboardComponent
  ],
  imports: [
    ReactiveFormsModule ,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
   HttpModule
                        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
