import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { Router } from '@angular/router';
import { SweetAlertService } from 'ngx-sweetalert2';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private admin: AdminService, private router: Router, private swal: SweetAlertService) { }

  ngOnInit() {
  }

  isActive = false;
  showMenu = '';
  eventCalled() {
      this.isActive = !this.isActive;
  }

  addExpandClass(element: any) {
    //   console.log(element);
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

}
