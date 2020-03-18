import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCalendar, faUserAlt, faUserTie, faGlobeAmericas, faBook, faLayerGroup, faUniversity, faGraduationCap, faBriefcase, faBuilding } from '@fortawesome/free-solid-svg-icons'
import { AppComponent } from './app.component';
import { SideDivComponent } from './side-div/side-div.component';
import { ContentMainComponent } from './content-main/content-main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ProjetosComponent } from './projetos/projetos.component';

@NgModule({
  declarations: [
    AppComponent,
    SideDivComponent,
    ContentMainComponent,
    ProjetosComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faCalendar, faUserAlt, faUserTie, faGlobeAmericas, faBook, faLayerGroup, faUniversity, faGraduationCap, faBriefcase, faBuilding);
  }
 }
