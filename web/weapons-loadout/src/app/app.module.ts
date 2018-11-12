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
    BrowserAnimationsModule
}
from '@angular/platform-browser/animations';
import
{
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule
}
from '@angular/material';
import
{
    OpticsComponent
}
from './optics/optics.component';
import
{
    RifleComponent
}
from './rifle/rifle.component';
import
{
    AmmunitionComponent
}
from './ammunition/ammunition.component';
import
{
    WeaponConfigurationSelectionComponent
}
from './weapon-configuration-selection/weapon-configuration-selection.component';
import
{
    WeaponDialogComponent
}
from './weapon-dialog/weapon-dialog.component';
import
{
    ItemComponent
}
from './item/item.component';
import
{
    FormsModule
}
from '@angular/forms';

@NgModule(
{
    declarations: [
        AppComponent,
        OpticsComponent,
        RifleComponent,
        AmmunitionComponent,
        WeaponConfigurationSelectionComponent,
        WeaponDialogComponent,
        ItemComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatCardModule,
        FormsModule

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule
{}
