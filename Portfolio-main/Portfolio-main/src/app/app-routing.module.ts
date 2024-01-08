import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { CurriculumVitaeComponent } from './curriculum-vitae/curriculum-vitae.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'cv', component: CurriculumVitaeComponent },
  { path: 'about', component: AboutComponent }];

@NgModule({
  imports: [

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
