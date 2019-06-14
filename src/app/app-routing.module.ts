import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'recorder', loadChildren: './recorder/recorder.module#RecorderPageModule' },  { path: 'choose-park', loadChildren: './choose-park/choose-park.module#ChooseParkPageModule' },
  { path: 'parksimon', loadChildren: './parksimon/parksimon.module#ParksimonPageModule' }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
