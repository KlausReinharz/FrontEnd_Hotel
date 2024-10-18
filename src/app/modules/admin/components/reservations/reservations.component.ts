import { Component } from '@angular/core';
import { AdminService } from '../../adminServices/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent {

  currentPage: any = 1;
  total:any;
  reservations:any;

  constructor(private adminService: AdminService,
    private massage:NzMessageService
  ){
    this.getReservations();
  }

  getReservations(){
      this.adminService.getReservations(this.currentPage-1).subscribe(res=>{
        console.log(res);
        this.reservations = res.reservationDtoList;
        this.total = res.totalPages * 5;

      })
  }

  pageIndexChange(value:any){
    this.currentPage = value;
    this.getReservations();

  }

  changeReservationStatus(bookiingId:number, status:string){
    this.adminService.changeReservationStatus(bookiingId,status).subscribe(res=>{
      this.massage.success('Reservation status changed successfully',{nzDuration:5000});
      this.getReservations();

    },error=>{
      this.massage.error(`${error.error}`,{nzDuration:5000})
    })

  }

}
