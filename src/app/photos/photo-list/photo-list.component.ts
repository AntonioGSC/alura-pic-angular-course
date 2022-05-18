import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo.model';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

    photos: Photo[] = [];
    filter: string = '';

    constructor(
        private photoService: PhotoService,
        private activatedRoute: ActivatedRoute
    ){}

    ngOnInit(): void{
        const userNameParam = this.activatedRoute.snapshot.params['userName'];
        this.photoService.listFromUser(userNameParam)
        .subscribe(photos => {
            this.photos = photos;
        }, err => console.log(err));
    }
}
