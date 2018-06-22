import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { load } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artistas:any [] = [];

  loading:boolean;

  constructor( private spotify:SpotifyService) { }

  ngOnInit() {
  }

  buscar(termino:string) {
    //console.log(termino);
    this.loading = true;
    this.spotify.getArtistas(termino).subscribe( (data: any) => {
      console.log(data);
      this.artistas = data;
      this.loading = false;
    });
  }

}
