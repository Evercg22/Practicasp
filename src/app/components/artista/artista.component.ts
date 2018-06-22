import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';



@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent  {

  artista: any  = [];
  loadingArtist:boolean;
  topTracks:any [] =[];

  constructor(private route:ActivatedRoute,
              private spotifyService:SpotifyService
  ) {
    this.loadingArtist = true;
    this.route.params.subscribe( params => {
      this.getArtista(params.id);
      
    })
   }


   getArtista(id:string) {
      this.spotifyService.getArtista(id).subscribe( (artista: any) => {
        console.log(artista);
        this.artista = artista;
        this.getTopTracks(id);
        this.loadingArtist = false;
      });
   }

   getTopTracks(id:string) {
     this.spotifyService.getTopTracks(id).subscribe( (topTracks: any) => {
        console.log(topTracks);
        this.topTracks = topTracks;
     });
   }

}
