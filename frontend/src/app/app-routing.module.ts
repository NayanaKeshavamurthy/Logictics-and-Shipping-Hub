import { ServiceComponent } from './service/service.component';
import { InventoryInfoShowComponent } from './admin/inventory-info-show/inventory-info-show.component';
import { ViewOrderComponent } from './login/view-order/view-order.component';
import { DeliveryPartnerLoginComponent } from './delivery-partner-login/delivery-partner-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { NotifyUserComponent } from './delivery-partner/notify-user/notify-user.component';
import { RescheduleDeliveryComponent } from './delivery-partner/reschedule-delivery/reschedule-delivery.component';
import { UpdatePickupComponent } from './delivery-partner/update-pickup/update-pickup.component';
import { UpdateDeliveryComponent } from './delivery-partner/update-delivery/update-delivery.component';
import { DeliveryPartnerComponent } from './delivery-partner/delivery-partner.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PackageEstimatorComponent } from './package-estimator/package-estimator.component';
import { CustomerLoginComponent } from './login/customer-login/customer-login.component';
import { NearMeComponent } from './near-me/near-me.component';
import { PickUpDropOffComponent } from './pickUpDropOff/pickUpDropOff.component';
import { RateUsCompComponent } from './rate-us-comp/rate-us-comp.component';
import { DropOffPackageComponent } from './drop-off-package/drop-off-package.component';
import { AdminComponent } from './admin/admin.component';
import { CouponComponent } from './admin/coupon/coupon.component';
import { WarehouseInfoComponent } from './admin/warehouse-info/warehouse-info.component';
import { InventoryInfoComponent } from './admin/inventory-info/inventory-info.component';
import { AboutComponent } from './about/about.component';
import { PriceComponent } from './price/price.component';
import { ContactComponent } from './contact/contact.component';
import { TrackingDataComponent } from './tracking-data/tracking-data.component';
import { ModifyOrderComponent } from './login/modify-order/modify-order.component';
import { AccountDetailsComponent } from './login/account-details/account-details.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'home', component: HomePageComponent},
  { path: 'login', component : LoginComponent},
  { path:'register', component: RegisterComponent},
  { path:'getEstimate', component:PackageEstimatorComponent},
  { path: 'customerLogin', component: CustomerLoginComponent},
  { path:'nearMe', component: NearMeComponent},
  { path:'pickUpDropOff', component: PickUpDropOffComponent},
  { path:'rateUs', component: RateUsCompComponent},
  { path:'agent', component: DeliveryPartnerComponent},
  { path:'agent/update-delivery', component: UpdateDeliveryComponent},
  { path:'agent/pickup', component: UpdatePickupComponent},
  { path:'agent/reschedule', component: RescheduleDeliveryComponent},
  { path:'agent/notify', component: NotifyUserComponent},
  { path:'dropOffPackage', component:DropOffPackageComponent},
  {path:'admin', component: AdminComponent},
  {path:'coupon', component: CouponComponent},
  {path: 'wareouseinfo', component: WarehouseInfoComponent},
  {path: 'inventoryinfo', component: InventoryInfoComponent},
  {path: 'about', component: AboutComponent},
  {path: 'price', component:PriceComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'admin-login', component:AdminLoginComponent},
  {path: 'dp-login', component:DeliveryPartnerLoginComponent},
  {path: 'tracking', component:TrackingDataComponent},
  {path: 'viewOrder', component:ViewOrderComponent},
  {path: 'modifyOrder', component:ModifyOrderComponent},
  {path: 'accountDetails', component:AccountDetailsComponent},
  {path: 'inventoryShow',component:InventoryInfoShowComponent},
  {path: 'services', component: ServiceComponent}

];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const  routingComponents = [HomePageComponent,LoginComponent];
