import
{
    WeaponConfig
}
from '../weapon-config';
import
{
    WeaponConfigurationSelectionComponent
}
from '../weapon-configuration-selection/weapon-configuration-selection.component';

import
{
    Component,
    OnInit
}
from '@angular/core';

@Component(
{
    selector: 'app-weapon-dialog',
    templateUrl: './weapon-dialog.component.html',
    styleUrls: ['./weapon-dialog.component.scss']
})
export class WeaponDialogComponent implements OnInit
{
    public config: WeaponConfig;

    constructor()
    {
        this.config = JSON.parse(localStorage.getItem('WeaponConfig'));
        if (this.config == null)
        {
            this.config = new WeaponConfig();
            this.config.ammunition = '30 Round Clip';
            this.config.rifle = 'AK-47';
            this.config.optics = 'ACOG';
            this.config.name = 'Boom Stick';
        }

    }

    ngOnInit()
    {}

    saveConfig(weaponConfigSelection: WeaponConfigurationSelectionComponent)
    {
        // set the savedConfig to the default value
        weaponConfigSelection.savedWeaponConfig.rifle = this.config.rifle;
        weaponConfigSelection.savedWeaponConfig.optics = this.config.optics;
        weaponConfigSelection.savedWeaponConfig.ammunition = this.config.ammunition;
        weaponConfigSelection.savedWeaponConfig.name = this.config.name;
        localStorage.setItem('WeaponConfig', JSON.stringify(this.config));
        console.log(this.config);
    }

}
