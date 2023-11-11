import { NgModule } from '@angular/core';

import { SideNavOuterToolbarModule, SingleCardModule } from '../../layouts';
import {
  AppFooterModule,
} from '../../components';

import { CrmContactListModule } from '../../pages/crm-contact-list/crm-contact-list.component';
import { CrmContactDetailsModule } from '../../pages/crm-contact-details/crm-contact-details.component';
import { PlanningTaskListModule } from '../../pages/planning-task-list/planning-task-list.component';
import { PlanningTaskDetailsModule } from '../../pages/planning-task-details/planning-task-details.component';
import { AnalyticsDashboardModule } from '../../pages/analytics-dashboard/analytics-dashboard.component';
import { AnalyticsSalesReportModule } from '../../pages/analytics-sales-report/analytics-sales-report.component';
import { AnalyticsGeographyModule } from '../../pages/analytics-geography/analytics-geography.component';
import { GalleryRoutingModule } from './gallery-routing.module';

@NgModule({
  imports: [
    SideNavOuterToolbarModule,
    SingleCardModule,
    AppFooterModule,
    CrmContactListModule,
    CrmContactDetailsModule,
    PlanningTaskListModule,
    PlanningTaskDetailsModule,
    AnalyticsDashboardModule,
    AnalyticsSalesReportModule,
    AnalyticsGeographyModule,
    GalleryRoutingModule
  ],
  providers: []
})
export class GalleryModule { }
