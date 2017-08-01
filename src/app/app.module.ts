import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER  } from '@angular/core';
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
import { SetupComponent } from './setup/setup.component';

import { LoginComponent } from './login/login.component';

import { AuthService } from './auth.service';

import { Ng2Webstorage } from 'ngx-webstorage';

import { AuthGuard } from './auth-guard.service';
import { SetupGuard } from './setup-guard.service';

import { AppRoutingModule } from './app-routing.module';

import { AppConfig } from './app.config';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    IssueListComponent,
    IssueComponent,
    NewIssueComponent,
    LoginComponent,
    SetupComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxPaginationModule,
    MaterialModule,
    Ng2Webstorage.forRoot({ prefix: 'plexissues' })
  ],
  providers: [
    AuthGuard,
    SetupGuard,
    AuthService,
    AppConfig,
    { provide: APP_INITIALIZER, useFactory: (config: AppConfig) => () => config.load(), deps: [AppConfig], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
