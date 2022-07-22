import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { 

  }

  // getQuery( query: string ) {
  //   const url = `https://api.spotify.com/v1/${ query }`;
  //   const headers = new HttpHeaders({
  //     'Authorization': 'Bearer BQBdbvTww9RL3LSVnFi6_WyIzR-NGSIAuFLQZEQhY2TUsKe_1H0784dL8rtUrjAQZ4fPMj4WvDCy7R448VOog45_hnCF4nCino0zIoajrGr1blxtSkE'
  //   });
  //   return this.http.get(url, { headers });
  // }

  getNewReleases() {
    const headers = new HttpHeaders({
    'Authorization':'Bearer BQAFOwmCLcYrDjpgm7kR1DKi38DT3y9Xf7F71SmUGiyk4ixD4Ggg-x-jsjDzk6DzdbsZ5CanW7L-EgjYLKFL2nRJR342o78nyXEz_eCzwSVlgzuVs14'
  })
  return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });      
}
  getArtist( termino: string ) {
  
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQAFOwmCLcYrDjpgm7kR1DKi38DT3y9Xf7F71SmUGiyk4ixD4Ggg-x-jsjDzk6DzdbsZ5CanW7L-EgjYLKFL2nRJR342o78nyXEz_eCzwSVlgzuVs14'
    })
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino } &type=artist&limit=15`, { headers });    
  }
}
