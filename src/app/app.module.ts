import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {  MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies/movies.compotent';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MoviesComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

