import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videos = [];

  constructor(public youtubeService: YoutubeService) { }

  ngOnInit() {
    this.youtubeService.getVideos().subscribe(videos => {
      console.log(videos);
      this.videos = videos;
    });
  }

}
