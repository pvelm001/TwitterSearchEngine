import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { AdminService } from '../../admin.service';
import { Router, ActivatedRoute } from '@angular/router';
// import { FlashMessagesService } from 'ngx-flash-messages';
import { SweetAlertService } from 'ngx-sweetalert2';
import { IProperty } from '../common/property';

@Component({
  selector: 'app-hadoop',
  templateUrl: './hadoop.component.html',
  styleUrls: ['./hadoop.component.css']
})
export class HadoopComponent implements OnInit {
  public parameter: IProperty = {};


  constructor(private route: ActivatedRoute, private admin: AdminService, private router: Router, private swal: SweetAlertService) {
    this.parameter.p = 1;
    this.parameter.itemsPerPage = this.admin.limit;
    this.parameter.data = '';
  }

  ngOnInit() {}
  @ViewChild("mysearch") mysearch;

  getPage(page: number){
    this.parameter.p=page;
    var k = this.mysearch.nativeElement.value;
    this.Search(k,page);
  }


  Search(name, page){
    this.parameter.loading = true;
    if(page!=undefined)
      var skip = (page-1) * this.admin.limit;
    else
      var skip =0;

    this.parameter.url = 'tweets?skip='+skip +'&limit='+this.admin.limit + '&query='+name;
    this.admin.getDataApi(this.parameter.url)
      .subscribe(
        success => {
          this.parameter.loading = false;
          this.parameter.total = 50;
          console.log(success);
          this.parameter.data = success;
        },
        error => {
          this.parameter.loading = false;
        });
  }


}
