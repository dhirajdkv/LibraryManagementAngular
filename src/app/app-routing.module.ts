import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogContentListingComponent } from './blog-content-listing/blog-content-listing.component';
import { BlogContentListingWebDesignComponent } from './blog-content-listing-web-design/blog-content-listing-web-design.component';
import { ContactComponent } from './contact/contact.component';
import { AddBookComponent } from './add-book/add-book.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'about',
    component : AboutComponent
  },
  {
    path : 'blog/:id',
    component : BlogComponent
  },
  {
    path : 'bloglist',
    component : BlogListComponent
  },
  {
    path : 'addbook',
    component : AddBookComponent
  },
  {
    path : 'bloglist',
    // component : BlogListComponent,
    children : [
      {
        path : 'edit/:id',
        component: ContactComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
