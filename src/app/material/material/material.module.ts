import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule,MatGridTile} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {MatPaginatorModule} from '@angular/material/paginator';

import {MatMenuModule} from '@angular/material/menu';







@NgModule({
  declarations: [],
  imports: [MatCardModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  MatDialogModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatTableModule,
  MatPaginatorModule,
  MatMenuModule
],
  exports:[MatCardModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  MatDialogModule,
  MatGridListModule,
MatGridTile,
MatFormFieldModule,
MatInputModule,
MatDatepickerModule,
MatTableModule,
MatPaginatorModule,
MatMenuModule
]
})
export class MaterialModule { }
