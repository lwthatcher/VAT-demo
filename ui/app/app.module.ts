import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { HttpModule } from '@angular/http';
// These are only used for mocking a database
import { XHRBackend } from '@angular/http';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { MockDataService } from './services/mock-data.service';

import { FILE_UPLOAD_DIRECTIVES, FileDropDirective } from 'ng2-file-upload/ng2-file-upload';

import { AppComponent }   from './app.component';
import { routing }        from './app.routing';

import { NavBarComponent } from './nav-bar.component';
import { DashboardComponent } from './dashboard.component';

import { ProjectsComponent } from './navigation/projects.component';
import { ViewComponent } from './views/view.component';
import { NewWorkspaceComponent } from './views/new-workspace.component';
import { VideoUploaderComponent } from './views/center-pane/video-uploader.component';
import { SignalUploaderComponent } from './views/signal-pane/signal-uploader.component';
import { SignalDisplayComponent } from './views/shared/signal-display.component';

import { ProjectService } from './services/projects.service';
import { SignalParseService } from './services/signals.service';
import { VideoService } from './services/video.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    DashboardComponent,
    ProjectsComponent,
    ViewComponent,
    NewWorkspaceComponent,
    VideoUploaderComponent,
    SignalUploaderComponent,
    SignalDisplayComponent,
    FILE_UPLOAD_DIRECTIVES,
    FileDropDirective
  ],
  providers: [
    SignalParseService,
    VideoService,
    ProjectService,
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA,  useClass: MockDataService }     // in-mem server data
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}