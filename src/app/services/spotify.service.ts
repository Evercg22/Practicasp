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
      'Authorization': 'Bearer BQAwbl8f8JkOQFjRKDpPIbNVHnPXcQrkCWWE88vfQv1gidxfgTBE41-r9N8aeOUvf5e7_95gKouWYWBdY1E'
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
