"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var SpotifyService = (function () {
    function SpotifyService(_http) {
        this._http = _http;
    }
    SpotifyService.prototype.searchMusic = function (str, type) {
        if (type === void 0) { type = 'artist'; }
        var accessToken = 'BQD5UP16bvcpazVctmN5Hb7yTzk18ycDD_fzRzVTIQlyQxYdiWgmNCl7Wb2YvpXVwMIk0G3xqz-ERN7bsLNN_9LaATgmR0sxbHdtcSI7G4WnboTtzjTURu8uWqxPQosR7fi5G9onTLp3HGlTi3cthCRXAfIVNXEeyR5Xrsy8-5y4crVaaWvl';
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + accessToken);
        var options = new http_1.RequestOptions({ headers: headers });
        // console.log(options);
        console.log(this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US');
        // console.log("url",searchUrl);
        // this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=50&type='+type+ '&market=US';
        return this._http.get(this.searchUrl, options)
            .map(function (res) { return res.json(); });
    };
    return SpotifyService;
}());
SpotifyService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SpotifyService);
exports.SpotifyService = SpotifyService;
//# sourceMappingURL=spotify.service.js.map