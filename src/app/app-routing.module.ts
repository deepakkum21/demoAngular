import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoSidenavComponent } from './demo-sidenav/demo-sidenav.component';

const routes: Routes = [
  {
    path: 'first',
    component: DemoSidenavComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
