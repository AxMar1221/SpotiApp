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
    'Authorization':'Bearer BQBt4c5O8lxOHyP-fALYtTiVYu6bLoXK__FL942KBJSp88JZFLDQ1g-aYOiHVGHC53XiFs0uIbLU-6e2lPJ3KFLpbivXPus_iONFkb6zbTZY2J-pxR8'
  })
  return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });      
}
  getArtists( termino: string ) {
  
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQB3FTaF4CNWOjl_2TOWRzDVNOedB2lDdmYv5KUDiAX32FqXHkNDsr5_RfQXZlxIQwC8mMI1-08K6upVtzLa9W_t95_cV6kXtKJHqSg88Fq_2F5lzaE'
    })
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino } &type=artist&limit=15`, { headers });    
  }

  getArtist( id: string ) {
  
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQB3FTaF4CNWOjl_2TOWRzDVNOedB2lDdmYv5KUDiAX32FqXHkNDsr5_RfQXZlxIQwC8mMI1-08K6upVtzLa9W_t95_cV6kXtKJHqSg88Fq_2F5lzaE'
    })
    return this.http.get(`https://api.spotify.com/v1/artists/${ id }`, { headers });    
  }

  getTopTracks( id: string ) {
  
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQB3FTaF4CNWOjl_2TOWRzDVNOedB2lDdmYv5KUDiAX32FqXHkNDsr5_RfQXZlxIQwC8mMI1-08K6upVtzLa9W_t95_cV6kXtKJHqSg88Fq_2F5lzaE'
    })
    return this.http.get(`https://api.spotify.com/v1/artists/${ id }/top-tracks?market=ES`, { headers });    
  }
}
