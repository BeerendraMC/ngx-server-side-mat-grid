import { NgModule } from '@angular/core';
import { NgxServerSideMatGridComponent } from './ngx-server-side-mat-grid.component';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [NgxServerSideMatGridComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatSelectModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  exports: [NgxServerSideMatGridComponent]
})
export class NgxServerSideMatGridModule {}
