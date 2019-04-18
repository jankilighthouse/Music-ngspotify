import { Component } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {SpotifyService} from './components/services/spotify.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers:  [SpotifyService]



})

export class AppComponent  {  }
