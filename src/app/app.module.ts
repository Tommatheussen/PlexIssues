import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import {
  MdToolbarModule,
  MdInputModule,
  MdListModule,
  MdCardModule,
  MdButtonModule,
  MdChipsModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssuesComponent } from './issues/issues.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    IssueListComponent,
    IssuesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
	  HttpModule,
	  BrowserAnimationsModule,
	  MdToolbarModule,
    MdInputModule,
    MdListModule,
    MdCardModule,
    MdButtonModule,
    MdChipsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'list',
        component: IssueListComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
