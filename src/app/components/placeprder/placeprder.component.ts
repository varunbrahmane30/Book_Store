import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-placeprder',
  templateUrl: './placeprder.component.html',
  styleUrls: ['./placeprder.component.scss'],
})
export class PlaceprderComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  gotobooks() {
    this.route.navigateByUrl('home/books');
  }
}
