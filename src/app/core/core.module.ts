import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerComponent } from './drawer/drawer.component';
import { ViewComponent } from './view/view.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { BarComponent } from './bar/bar.component';
import { AppRoutingModule } from '../app-routing.module';
import { IconsProviderModule } from '../icons-provider.module';


@NgModule({
  declarations: [DrawerComponent, ViewComponent, BarComponent],
  imports: [
    CommonModule,
    NzMenuModule,
    NzLayoutModule,
    AppRoutingModule,
    IconsProviderModule,
  ],
  exports: [DrawerComponent]
})
export class CoreModule { }
