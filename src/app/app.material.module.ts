import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';




@NgModule({
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatSidenavModule,
        MatTabsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule
        // MatToolbarModule,
        // MatButtonModule,
        // MatSidenavModule,
        // MatIconModule,
        // MatListModule,
        // MatTableModule,
        // MatPaginatorModule
        // MatRadioModule,
        // MatSelectModule,
        // MatDatepickerModule,
        // MatNativeDateModule,
        // MatOptionModule,
        // MatDialogModule,
        // MatProgressSpinnerModule,
        // MatSnackBarModule
    ],
    exports: [
        MatFormFieldModule,
        MatInputModule,
        MatSidenavModule,
        MatTabsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule
        // MatButtonModule,
        // MatSidenavModule,
        // MatIconModule,
        // MatListModule,
        // MatTableModule,
        // MatPaginatorModule,
        // MatRadioModule,
        // MatSelectModule,
        // MatDatepickerModule,
        // MatNativeDateModule,
        // MatOptionModule,
        // MatDialogModule,
        // MatProgressSpinnerModule,
        // MatSnackBarModule
    ],
})
export class AppMaterialModule { }
