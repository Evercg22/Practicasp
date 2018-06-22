import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { }

  getQuery(query:string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD7hL-DOyUGr_bc56-uWR7goEkflv26IOeUMJwkYbVwDeemVM0A-iQ_NiPIPZ0J0YqKJVf28ixoUvhscl8'
    });

    return this.http.get(url,{headers});

  }

  getNewReleses() {
    return this.getQuery("browse/new-releases")
      .pipe(map( (data: any) => data.albums.items));
    
  }

  getArtistas(termino:string ) {
    return this.getQuery(`search?q=${ termino }&type=artist&market=MX&limit=30&offset=5`)
      .pipe( map( (data: any) =>  data.artists.items));
  }

  getArtista(id:string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id:string) {
    return this.getQuery(`artists/${id}/top-tracks?country=MX`)
    .pipe( map( (data: any) => data.tracks));
  }


}
