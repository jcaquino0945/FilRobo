import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AquadroneComponent } from './projects/aquadrone/aquadrone.component';
import { ProjectsComponent } from './projects/projects.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { LisaRobotComponent } from './projects/lisa-robot/lisa-robot.component';
import { RobotractorComponent } from './projects/robotractor/robotractor.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PagenotfoundComponent,
    AquadroneComponent,
    ProjectsComponent,
    TutorialsComponent,
    LisaRobotComponent,
    RobotractorComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
