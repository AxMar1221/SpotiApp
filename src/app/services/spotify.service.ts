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
    'Authorization':'Bearer BQDo9fo5rLcU1DAujLqmDDeke5fd5mL31m88I6EfKYu3AGmic6iupJbonzw0vs9HHpoQzzG6nS7MSBIg2IXGicAoQvZpFoky2lksjQvqpktaCfqn_Pc'
  })
  return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });      
}
  getArtist( termino: string ) {
  
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQDo9fo5rLcU1DAujLqmDDeke5fd5mL31m88I6EfKYu3AGmic6iupJbonzw0vs9HHpoQzzG6nS7MSBIg2IXGicAoQvZpFoky2lksjQvqpktaCfqn_Pc'
    })
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino } &type=artist&limit=15`, { headers });    
  }
}
