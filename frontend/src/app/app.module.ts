import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PackageEstimatorComponent } from './package-estimator/package-estimator.component';
import { CustomerLoginComponent } from './login/customer-login/customer-login.component';
import { NearMeComponent } from './near-me/near-me.component';
import { PickUpDropOffComponent } from './pickUpDropOff/pickUpDropOff.component';
import {GoogleMapsModule} from '@angular/google-maps';
import { RateUsCompComponent } from './rate-us-comp/rate-us-comp.component';
import { DeliveryPartnerComponent } from './delivery-partner/delivery-partner.component';
import { UpdateDeliveryComponent } from './delivery-partner/update-delivery/update-delivery.component';
import { UpdatePickupComponent } from './delivery-partner/update-pickup/update-pickup.component';
import { RescheduleDeliveryComponent } from './delivery-partner/reschedule-delivery/reschedule-delivery.component';
import { NotifyUserComponent } from './delivery-partner/notify-user/notify-user.component';
import { DropOffPackageComponent } from './drop-off-package/drop-off-package.component';
import { AdminComponent } from './admin/admin.component';
import { CouponComponent } from './admin/coupon/coupon.component';
import { WarehouseInfoComponent } from './admin/warehouse-info/warehouse-info.component';
import { InventoryInfoComponent } from './admin/inventory-info/inventory-info.component';
import { AboutComponent } from './about/about.component';
import { PriceComponent } from './price/price.component';
import { ContactComponent } from './contact/contact.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DeliveryPartnerLoginComponent } from './delivery-partner-login/delivery-partner-login.component';
import { TrackingDataComponent } from './tracking-data/tracking-data.component';
import { ModifyOrderComponent } from './login/modify-order/modify-order.component';
import { ViewOrderComponent } from './login/view-order/view-order.component';
import { AccountDetailsComponent } from './login/account-details/account-details.component';
import { WearhouseComponent } from './wearhouse/wearhouse.component';
import { InventoryInfoShowComponent } from './admin/inventory-info-show/inventory-info-show.component';
import { ServiceComponent } from './service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
    PackageEstimatorComponent,
    CustomerLoginComponent,
    NearMeComponent,
    PickUpDropOffComponent,
    RateUsCompComponent,
    UpdateDeliveryComponent,
    UpdatePickupComponent,
    RescheduleDeliveryComponent,
    NotifyUserComponent,DropOffPackageComponent,
    AdminComponent,
    CouponComponent,
    WarehouseInfoComponent,
    InventoryInfoComponent,
    AboutComponent,
    PriceComponent,
    ContactComponent,
    DeliveryPartnerComponent,
    DropOffPackageComponent,
    AdminLoginComponent,
    DeliveryPartnerLoginComponent,
    TrackingDataComponent,
    ModifyOrderComponent,
    ViewOrderComponent,
    AccountDetailsComponent,
    WearhouseComponent,
    InventoryInfoShowComponent,
    ServiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//wujqdlefrxmhnwfqcs@tmmcv.net
