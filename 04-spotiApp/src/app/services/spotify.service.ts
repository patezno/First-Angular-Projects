import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQApTwoo-sNKKx7JiQL5K66IQW4zi-TPtjpAoz_JASMqNQ14zOufDO7L9IaLNCup6Jzn5gzadvoMLrqnTCo'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers});
  }
}
