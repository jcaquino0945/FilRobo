import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AquadroneComponent } from './projects/aquadrone/aquadrone.component';
import { ProjectsComponent } from './projects/projects.component';
import { LisaRobotComponent } from './projects/lisa-robot/lisa-robot.component';
import { RobotractorComponent } from './projects/robotractor/robotractor.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { ArduinoComponent } from './tutorials/arduino/arduino.component';
import { HowtoflyComponent } from './tutorials/howtofly/howtofly.component';
import { RobotOSComponent } from './tutorials/robot-os/robot-os.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'tutorials', component: TutorialsComponent },
  { path: 'projects/aquadrone', component: AquadroneComponent },
  { path: 'projects/lisaRobot', component: LisaRobotComponent },
  { path: 'projects/robotractor', component: RobotractorComponent },
  { path: 'tutorials/arduino', component: ArduinoComponent },
  { path: 'tutorials/howtofly', component:  HowtoflyComponent },
  { path: 'tutorials/robot-os', component:  RobotOSComponent },

  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `Home`
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
