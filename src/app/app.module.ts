import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule ,JsonpModule} from "@angular/http";

import { NavbarComponent } from "./components/navbar/navbar.component";
import { SearchComponent } from "./components/search/search.component";
import { AboutComponent } from "./components/about/about.component";

import { AppComponent }  from './app.component';

import { routing } from "./app.routes";

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: SearchComponent },
    { path: 'about', component: AboutComponent },

]
@NgModule({
  imports:      [ BrowserModule,RouterModule.forRoot(routes),HttpModule ],
  declarations: [ AppComponent,AboutComponent,NavbarComponent, SearchComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
