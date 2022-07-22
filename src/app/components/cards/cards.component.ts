import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
})
export class CardsComponent {

  @Input() items: any[] = []

  constructor( private router: Router) { }

  verArtista( item: any) {
    
    let artistaId;

    if ( item.type === 'artist' ) {
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id
    }

    this.router.navigate([ '/artist', artistaId ]);

  }
}
