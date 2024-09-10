import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CentrosComponent } from './centros/centros.component';
import { CitasComponent } from './citas/citas.component';
import { HistorialComponent } from './historial/historial.component';
import { ModuloeducativoComponent } from './moduloeducativo/moduloeducativo.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';

const routes: Routes = [
  {path:'',
    children:[
      {path:'usuarios', component:UsuariosComponent},
      {path:'centros', component:CentrosComponent},
      {path:'citas', component:CitasComponent},
      {path:'historial', component:HistorialComponent},
      {path:'moduloeducativo', component:ModuloeducativoComponent},
      {path:'notificaciones', component:NotificacionesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenimientoRoutingModule { }
