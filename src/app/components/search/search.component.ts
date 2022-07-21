import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  artistas: any[] = []

  constructor( private spotify: SpotifyService ) { }

  search( termino :string) {
    console.log( termino );
    this.spotify.getArtist( termino )
      .subscribe( (data: any) => {
        console.log( data );
        this.artistas = data;
      });
  }

}
