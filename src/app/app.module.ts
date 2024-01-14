import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import { MembreListeComponent } from './membre-liste/membre-liste.component';
import {MatIconModule} from "@angular/material/icon";
import { MembreFormComponent } from './membre-form/membre-form.component';
import {MatButtonModule} from "@angular/material/button";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";

import { HttpClientModule } from '@angular/common/http';
import { ConfirmeDialogComponent } from './confirme-dialog/confirme-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { LayoutComponent } from './layout/layout.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolsComponent } from './tools/tools.component';
import { ArticlesComponent } from './articles/articles.component';
import { EventsComponent } from './events/events.component';
import {FirebaseModule} from "./Firebase.module";
import { LoginComponent } from './login/login.component';
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
     MembreListeComponent,
     MembreFormComponent,
     ConfirmeDialogComponent,
     LayoutComponent,
     DashboardComponent,
     ToolsComponent,
     ArticlesComponent,
     EventsComponent,
     LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    FirebaseModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
