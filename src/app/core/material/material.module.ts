import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
  } from '@angular/material';

  import {MatTableModule} from '@angular/material/table';
  import {MatCardModule} from '@angular/material/card';
  import {MatTabsModule} from '@angular/material/tabs';
  import {MatButtonToggleModule} from '@angular/material/button-toggle';

  const MatModules = [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatTabsModule,
    MatButtonToggleModule
];

@NgModule({
  imports: [
    CommonModule,
    ...MatModules
  ],
  exports: [
    CommonModule,
    ...MatModules
  ],
})
export class MaterialModule {}