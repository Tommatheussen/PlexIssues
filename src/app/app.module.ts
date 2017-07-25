import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxPaginationModule } from 'ngx-pagination';

import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssueComponent } from './issue/issue.component';
import { NewIssueComponent } from './new-issue/new-issue.component';
import { SettingsComponent } from './settings/settings.component';

import { LoginComponent } from './login/login.component';

import { PrivateComponent } from './private.component';

class SettingsGuard implements CanActivate {
  canActivate() {
    console.log('Can activate?');
    return false;
  }
}

const routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: PrivateComponent,
    canActivate: [SettingsGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    IssueListComponent,
    IssueComponent,
    NewIssueComponent,
    SettingsComponent,
    LoginComponent,
    PrivateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxPaginationModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    SettingsGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
