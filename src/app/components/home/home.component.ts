import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  newReleases:any [] = [];
  loading:boolean;
  error:boolean;
  messageError:string;

  constructor( private spotify:SpotifyService) {
    this.error = false;
    this.loading = true;
    this.spotify.getNewReleses().subscribe( (data: any) => {
      console.log(data);
      
      this.newReleases = data;
      this.loading = false;
    }, (errorService) => {
      // console.log(errorService.error.error.message);
      this.error = true;
      this.messageError = errorService.error.error.message;

    });
    
   }

  ngOnInit() {
  }

}
