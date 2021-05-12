import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LeaseDTO } from 'src/app/model/lease-dto.model';
import { UserDTO } from 'src/app/model/user-dto.model';
import { AuthService } from 'src/app/services/auth.service';
import { LeaseService } from 'src/app/services/lease.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['dateInitial','dateFinal','value'];
  dataSource : LeaseDTO[];
  user: UserDTO;

  constructor(private leaseService: LeaseService,private dialog: MatDialog,private authService: AuthService) { }

  ngOnInit() {

    if(this.authService.session)
    this.user = this.authService.session;
    this.getAllLease();
  }


  getAllLease(){
    this.leaseService.getLeaseByUser(this.user._id).subscribe(result=>{
      this.dataSource = result;
    },err=>{
      console.error(err);
    })
  }
}
