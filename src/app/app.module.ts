import { BrowserModule } from '@angular/platform-browser';

import { NgModule }      from '@angular/core';
import { AppComponent }  from './app.component';
import {FormsModule} from '@angular/forms';
import { HttpModule ,JsonpModule} from "@angular/http";
import { SearchComponent } from "./components/search/search.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AboutComponent } from "./components/about/about.component";
import { routing } from "./app.routes";

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: SearchComponent },
    { path: 'about', component: AboutComponent }

]

@NgModule({
  imports:      [ BrowserModule ,JsonpModule, RouterModule.forRoot(routes),FormsModule,HttpModule ],
  declarations: [ AppComponent, AboutComponent,NavbarComponent,SearchComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
// import { BrowserModule } fr
