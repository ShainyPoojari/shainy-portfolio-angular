import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Shared Components
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LoadingComponent } from './shared/components/loading/loading.component';

// Page Components
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SkillsComponent } from './pages/skills/skills.component';
// import { ProjectsComponent } from './pages/projects/projects.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ContactComponent } from './pages/contact/contact.component';

// Services
import { ContactService } from './core/services/contact.service';
import { AnimationService } from './core/services/animation.service';

@NgModule({
  declarations: [
    // AppComponent,
    // NavbarComponent,
    // FooterComponent,
    // LoadingComponent,
    // HomeComponent,
    // AboutComponent,
    // SkillsComponent,
    // ProjectsComponent,
    // ExperienceComponent,
    // ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ContactService,
    AnimationService
  ],
  bootstrap: []
})
export class AppModule { }
