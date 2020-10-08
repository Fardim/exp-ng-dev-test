import { ShowAllComponent } from './show-all/show-all.component';
import { NotFoundComponent } from './shell/not-found/not-found.component';
import { ShellComponent } from './shell/shell/shell.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: '', redirectTo: 'show-all', pathMatch: 'full' },
      { path: 'show-all', component: ShowAllComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
