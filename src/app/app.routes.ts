import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SkillsComponent } from './pages/skills/skills.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'experience', component: ExperienceComponent },  
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
