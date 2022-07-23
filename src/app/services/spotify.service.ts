import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      'Authorization': 
      'Bearer BQD-dVwZvD-Ahxen7HZcmJjfMpMGgvGzQQOOBhd60xqo4PIRRIEOfQ_oVaBlTaI39HC378xl97KnE7LqhM2Po7KsO6oL67Wgc4VZxIBIBkzgr4kru0o'
    });
    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
              .pipe( map( data => data['albums'].items ));
  }

  getArtists( termino: string ) {
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
                .pipe( map( data => data['artists'].items));
  }

  getArtist( id: string ) {
    return this.getQuery(`artists/${ id }`);
                // .pipe( map( data => data['artists'].items));
  }

  getTopTracks( id: string ) {
    return this.getQuery(`artists/${ id }/top-tracks?market=us`)
                .pipe( map( data => data['tracks']));
  }
}