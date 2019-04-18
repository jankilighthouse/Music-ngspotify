import { Injectable } from "@angular/core";
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class SpotifyService{
    private searchUrl: string;
    private artistUrl: string;

    constructor(private _http:Http){

    }

    searchMusic(str:string, type='artist'){
      const accessToken = 'BQD5UP16bvcpazVctmN5Hb7yTzk18ycDD_fzRzVTIQlyQxYdiWgmNCl7Wb2YvpXVwMIk0G3xqz-ERN7bsLNN_9LaATgmR0sxbHdtcSI7G4WnboTtzjTURu8uWqxPQosR7fi5G9onTLp3HGlTi3cthCRXAfIVNXEeyR5Xrsy8-5y4crVaaWvl';
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
   getArtist(id:string){
      const accessToken = 'BQD5UP16bvcpazVctmN5Hb7yTzk18ycDD_fzRzVTIQlyQxYdiWgmNCl7Wb2YvpXVwMIk0G3xqz-ERN7bsLNN_9LaATgmR0sxbHdtcSI7G4WnboTtzjTURu8uWqxPQosR7fi5G9onTLp3HGlTi3cthCRXAfIVNXEeyR5Xrsy8-5y4crVaaWvl';

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization',  'Bearer ' + accessToken);
      let options = new RequestOptions({ headers: headers });
      // console.log(options);

      console.log(this.artistUrl = 'https://api.spotify.com/v1/artists/'+ id);
      // console.log("url",searchUrl);

       // this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=50&type='+type+ '&market=US';

       return this._http.get(this.artistUrl,options)
       .map(res => res.json());


   }

}
