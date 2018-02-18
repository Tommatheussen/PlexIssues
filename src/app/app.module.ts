import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssueCardComponent } from './issue-card/issue-card.component';
import { NewIssueComponent } from './new-issue/new-issue.component';

import { AuthService } from './auth.service';

import { Ng2Webstorage } from 'ngx-webstorage';

import { AuthGuard } from './auth-guard.service';
import { SetupGuard } from './setup-guard.service';

import { AppRoutingModule } from './app-routing.module';

import { AppConfig } from './app.config';

import { SetupModule } from './setup/setup.module';
import { LoginModule } from './login/login.module';

import { PlexIssuesSharedModule } from './shared/shared.module';

import { HttpClientModule } from '@angular/common/http';

import { ShellComponent } from './shell/shell.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AppRoutingModule,

    PlexIssuesSharedModule,

    HttpClientModule,

    FlexLayoutModule,

    HttpModule,
    Ng2Webstorage.forRoot({ prefix: 'plexissues' })
  ],
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    IssueListComponent,
    IssueCardComponent,
    NewIssueComponent,
    ShellComponent
  ],
  providers: [
    AuthGuard,
    SetupGuard,
    AuthService,
    AppConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: initConfiguration,
      deps: [AppConfig],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function initConfiguration(config: AppConfig): Function {
  return () => config.load();
}
