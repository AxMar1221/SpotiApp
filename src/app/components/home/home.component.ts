import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  newReleases: any[] = [];
  loading: boolean;

  constructor( private spotify: SpotifyService ) { 

    this.loading = true;
      this.spotify.getNewReleases()
        .subscribe( (data: any) => {
          this.newReleases = data;
          console.log( data );
        this.loading = false;
        });
  }
}
   