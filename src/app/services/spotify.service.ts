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
      'Authorization': 'Bearer BQA7WQmVcP06BvjeYn07t140mACcY5OD43OeIHM1ZU5fJqJGcy5DMyseuVAq_30FtvSOV5NdaUM7x3aSqq4'
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
}
