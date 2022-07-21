import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { 

  }

  getNewREleases() {

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQDRCkClxyiJOhUf-HbELpOrUyjrvWurRnGU_HuhM1uEcqnDDkC2I8PptI8qJLzesZjcCk3ubWGlARj7ocw5RDrmNTupKln7LnPfeyfUvRjQoL8gAHw'
    })
    this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .subscribe( data => {
        console.log( data );
      })      
  }
}
