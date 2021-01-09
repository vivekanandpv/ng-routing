import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NEWS_ROUTES } from '../_routes/news.routes';

const routes: Routes = [
  {
    path: '',
    children: NEWS_ROUTES,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {}
