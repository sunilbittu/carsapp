import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from 'src/app/map/map.component';
import { UnauthGuard } from 'src/app/auth/unauth.guard';

const routes: Routes = [
    {
    path: '',
    children: [
        {
            path: '',
            component: MapComponent,
            canActivate: [UnauthGuard],
        }
    ]
}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [],
  })
  export class MapModule {}

  export const routedComponents = [
      MapComponent
  ]