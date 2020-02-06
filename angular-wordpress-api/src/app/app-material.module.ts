import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatCardModule, MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule } from '@angular/material';

const materialModules = [
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
];

@NgModule({
  imports: [ materialModules, CommonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule ],
  exports: [ materialModules, CommonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule ]
})
export class AppMaterialModule { }
