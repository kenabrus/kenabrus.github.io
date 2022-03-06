import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { HelloComponent } from '../hello.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  headers = ['#', 'First Name', 'Last Name', 'Email'];

  matDialogRef: MatDialogRef<HelloComponent> | undefined;
  name: string = "";

  constructor(private matDialog: MatDialog) { }

  OpenModal() {
    this.matDialogRef = this.matDialog.open(HelloComponent, {
      data: { name: this.name },
      disableClose: true
    });

    this.matDialogRef.afterClosed().subscribe(res => {
      if ((res == true)) {
        this.name = "";
      }
    });
  }

  ngOnInit(): void {
  }

}
