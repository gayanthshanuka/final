import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstructionComponent } from './instruction/instruction.component';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxSpinnerModule } from "ngx-spinner";
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { IntroComponent } from './intro/intro.component'
const appRoutes: Routes = [
 
  { path: 'result',component: ResultComponent },
  {
    path: 'instruction',
    component: InstructionComponent,
    data: { title: 'Heroes List' }
  },
  { path: 'home', component: HomeComponent },
  {
    path:'intro',component:IntroComponent
  },
  { path: '',
    redirectTo: '/instruction',
    pathMatch: 'full'
  },

];
@NgModule({
  declarations: [
    AppComponent,
    InstructionComponent,
    HomeComponent,
    ResultComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
      
    ),ReactiveFormsModule,HttpClientModule,
    NgbModule,NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
