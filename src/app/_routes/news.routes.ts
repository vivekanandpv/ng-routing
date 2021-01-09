import { Routes } from '@angular/router';
import { NewsComponent } from '../news/news.component';

export const NEWS_ROUTES: Routes = [
  {
    path: '',
    component: NewsComponent,
  },
  {
    path: ':country',
    component: NewsComponent,
  },
  {
    path: ':country/:year',
    component: NewsComponent,
  },
];
