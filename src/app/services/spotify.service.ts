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
      'Authorization':'Bearer BQA4TuXxgKCV9ssLlTtBkqPehd3jhHiPRenT6ITRmTsmNRFdsl5CR9mtdH3FZItrnH4OzgdwAh5d2FyBxRUq1kn1w0ej43lGF2LoWPPnmMDVby9zQxY'
    })
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });      
  }
}
