import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
})
export class ArtistaComponent {

  artista: any = {};
  topTracks: any[] = [];

  loadingArtist!: boolean;

  constructor( private router: ActivatedRoute,
               private spotify: SpotifyService ) {

    this.router.params.subscribe( params => {
      this.getArtist( params['id']);
      this.getTopTracks( params['id']);
    });
  }

  getArtist( id: string ){

    this.loadingArtist = true;

    this.spotify.getArtist( id )
        .subscribe( artista => {
          this.artista = artista;
          this.loadingArtist = false;
        });
  }

  getTopTracks( id: string) {
    this.spotify.getTopTracks( id )
        .subscribe( topTracks => {
          console.log( topTracks );
          // this.topTracks = topTracks;
        });
  }
  
}
