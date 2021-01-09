import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { count } from 'console';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  country!: string | null;
  year!: string | null;
  query!: object;
  constructor(private ar: ActivatedRoute) {}

  ngOnInit(): void {
    this.country = this.ar.snapshot.paramMap.get('country');
    this.year = this.ar.snapshot.paramMap.get('year');

    this.query = this.ar.snapshot.queryParams;
  }
}
