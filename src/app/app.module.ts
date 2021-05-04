import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AddEventComponent } from './pages/add-event/add-event.component';
import { ClubsComponent } from './pages/clubs/clubs.component';
import { AddClubComponent } from './pages/add-club/add-club.component';
import {HttpClientModule} from '@angular/common/http';
import {EventService} from './core/services/event.service';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AddEventComponent,
    ClubsComponent,
    AddClubComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes, {
      useHash: true
    }),
    HttpClientModule,
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
