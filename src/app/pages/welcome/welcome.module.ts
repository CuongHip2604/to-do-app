import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule, NzCardModule, NzIconModule, NzInputModule, NzSwitchModule } from 'ng-zorro-antd';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';


@NgModule({
  imports: [WelcomeRoutingModule, NzCardModule, NzInputModule, NzButtonModule, NzIconModule, NzSwitchModule, FormsModule, CommonModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
