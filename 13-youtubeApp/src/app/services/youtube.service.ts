import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private url = 'https://www.googleapis.com/youtube/v3';
  private apiKey = 'AIzaSyAIICWheVK_b_2oBglyWoDd8ZXqxNkex0o';
  private playlist = 'UUmZdMJwWv9zfqEl1hHZTljQ';
  private nextPageToken: string;

  constructor(public http: HttpClient) { }

  getVideos() {
    const url = `${this.url}/playlistItems`;
    const params = new HttpParams().set('part', 'snippet')
                                   .set('maxResults', '10')
                                   .set('playlistId', this.playlist)
                                   .set('key', this.apiKey );

    return this.http.get(url, {params}).pipe(map((res: any) => {
      this.nextPageToken = res.nextPageToken;
      const videos = [];
      for (const video of res.items) {
        const snippet = video.snippet;
        videos.push(snippet);
      }
      return videos;
    }));
  }
}
