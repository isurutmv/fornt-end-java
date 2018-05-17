import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatTooltipModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';

import {routing} from './app.routing';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';

import {LoginService} from './service/login.service';
import {AddClientService} from './service/add-client.service';
import {UploadImageService} from './service/upload-image.service';
import { AddNewClientComponent } from './components/add-new-client/add-new-client.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { ViewClientComponent } from './components/view-client/view-client.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    AddNewClientComponent,
    ClientListComponent,
    EditClientComponent,
    ViewClientComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    NoopAnimationsModule,
    MatTooltipModule,
    MatToolbarModule,
    routing,
    HttpModule,
    MatGridListModule,
    MatInputModule,
    FormsModule
  ],
  providers: [
    LoginService,
    AddClientService,
    UploadImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
