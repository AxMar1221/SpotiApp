import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  newReleases: any[] = [];
  loading: boolean;

  error: boolean;
  mensajeError: string;

  constructor( private spotify: SpotifyService ) { 

    this.loading = true;
    this.error = false;
      this.spotify.getNewReleases()
        .subscribe( (data: any) => {
          this.newReleases = data;
          this.loading = false; 
        }, ( errorService )=>{
          this.loading = false; 

         this.error = true;
         console.log(errorService);
         this.mensajeError = errorService.error.error.message;
        });
  }
}