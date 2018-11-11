import
{
    BrowserModule
}
from '@angular/platform-browser';
import
{
    NgModule
}
from '@angular/core';

import
{
    AppComponent
}
from './app.component';
import
{
    EmployeeListComponent
}
from './employee-list/employee-list.component';
import
{
    EmployeeComponent
}
from './employee/employee.component';
import
{
    HttpClientModule
}
from '@angular/common/http';
import
{
    BrowserAnimationsModule
}
from '@angular/platform-browser/animations';


@NgModule(
{
    declarations: [
        AppComponent,
        EmployeeListComponent,
        EmployeeComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule
    ],
    providers: [HttpClientModule],
    bootstrap: [AppComponent]
})
export class AppModule
{}
