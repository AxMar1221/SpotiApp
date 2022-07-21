import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { 

  }

  getNewREleases() {
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQAaHfmGyAxO8LBT0WrmElYclevaRZtvHF0Q0upKngWUN22ji3fIGW0CwC86lqGsJ9mYmsVPo9x5DQNxsapDJNRTm2woX0zJnYWADYoNUPmG-PimDlk'
    })
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
              .pipe( map( (data: any) =>{
                return data['albums'].items
              }));
  }

  getArtist( termino: string ) {
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQAaHfmGyAxO8LBT0WrmElYclevaRZtvHF0Q0upKngWUN22ji3fIGW0CwC86lqGsJ9mYmsVPo9x5DQNxsapDJNRTm2woX0zJnYWADYoNUPmG-PimDlk'
    })
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino} &type=artist&limit=15`, { headers })
                .pipe( map( ( data: any) =>{
                  return data['artists'].items
                }));
  }
}
