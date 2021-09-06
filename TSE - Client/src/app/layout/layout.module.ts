import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';
import { FlashMessagesModule } from 'ngx-flash-messages';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SweetAlertService } from 'ngx-sweetalert2';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
import { TruncateModule } from 'ng2-truncate';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import {Ng2TelInputModule} from 'ng2-tel-input';


// importing components
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent} from '../shared/sidebar/sidebar.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { LuceneComponent } from './lucene/lucene.component';
import { HadoopComponent } from './hadoop/hadoop.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        FormsModule,
        ReactiveFormsModule,
        Ng2TelInputModule,
        NgbModule.forRoot(),
        FlashMessagesModule,
        NgxPaginationModule,
        LoadingModule.forRoot({
            animationType: ANIMATION_TYPES.rectangleBounce,
            backdropBackgroundColour: 'rgba(0,0,0,0.1)',
            backdropBorderRadius: '4px',
            primaryColour: '#ffffff',
            secondaryColour: '#ffffff',
            tertiaryColour: '#ffffff'
        }),
        MomentModule,
        TruncateModule,
        BsDropdownModule.forRoot(),
        NgxIntlTelInputModule
    ],
    declarations: [
        LayoutComponent,
        SidebarComponent,
        DashboardComponent,
        LuceneComponent,
        HadoopComponent
    ],
    providers: [SweetAlertService],
})
export class LayoutModule { }
