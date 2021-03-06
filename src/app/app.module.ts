import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReadingsComponent } from './readings/readings.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryService } from './shared/category.service';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { AppRoutingModule } from './app-routing.module';
import { MessageService } from './shared/message.service';
import { ReadingDetailsComponent } from './reading-details/reading-details.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserService } from './shared/user.service';
import { MatDialogModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ReadingsComponent,
    CategoriesComponent,
    CategoryDetailsComponent,
    ReadingDetailsComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [ CategoryService, MessageService, UserService ],
  bootstrap: [ AppComponent] ,
  entryComponents: [ CategoryDetailsComponent ]
})
export class AppModule { }
