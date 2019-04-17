import { Injectable } from "@angular/core";
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class SpotifyService{
    private searchUrl: string;

    constructor(private _http:Http){
    }
    searchMusic(str:string, type='artist'){
  const accessToken = 'BQDaOqG8M3PFpa6aOmMR3E6AUad91oGiG5PLXFzo-RJeuGSWy8bmVzQHXttnhSDqjVswLb6nq_PJSa_RHn8GIjRrpAq7qf5LdGckpRwWGgbHnVvHuFkvd-JJnLRR4dVtAzazylext30bd-kiN4VQ8pOT_hnctQkTBV4blfJQyCHFefBKVf2z';
  let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization',  'Bearer ' + accessToken);
    let options = new RequestOptions({ headers: headers });
    // console.log(options);

    console.log(this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US');
    // console.log("url",searchUrl);

       // this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=50&type='+type+ '&market=US';

       return this._http.get(this.searchUrl,options)
       .map(res => res.json());


   }

}
