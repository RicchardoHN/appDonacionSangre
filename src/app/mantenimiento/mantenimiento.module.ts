import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { ModuloeducativoComponent } from './moduloeducativo/moduloeducativo.component';
import { InventarioComponent } from './inventario/inventario.component';
import { HistorialComponent } from './historial/historial.component';
import { CitasComponent } from './citas/citas.component';
import { CentrosComponent } from './centros/centros.component';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    MantenimientoRoutingModule
  ]
})
export class MantenimientoModule { }
