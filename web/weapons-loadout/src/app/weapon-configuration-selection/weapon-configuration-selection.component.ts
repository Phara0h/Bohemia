import
{
    Component,
    OnInit,
    Input,
    Output
}
from '@angular/core';
import
{
    WeaponConfig
}
from '../weapon-config';


@Component(
{
    selector: 'app-weapon-configuration-selection',
    templateUrl: './weapon-configuration-selection.component.html',
    styleUrls: ['./weapon-configuration-selection.component.scss']
})
export class WeaponConfigurationSelectionComponent implements OnInit
{

    @Input()
    @Output()
    public weaponConfig: WeaponConfig;

    public savedWeaponConfig: WeaponConfig;
    constructor()
    {}

    ngOnInit()
    {
        if (this.savedWeaponConfig == null)
        {
            this.savedWeaponConfig = Object.assign(new WeaponConfig(), this.weaponConfig);
        }
    }

    changeItem(type: String, event)
    {
        const item = event.currentTarget.attributes.type.nodeValue;

        switch (type)
        {
            case 'Ammunition':
                this.weaponConfig.ammunition = item;
                break;
            case 'Optics':
                this.weaponConfig.optics = item;
                break;
            case 'Rifle':
                this.weaponConfig.rifle = item;
                break;
        }
    }


    resetConfig()
    {
        this.weaponConfig.rifle = this.savedWeaponConfig.rifle;
        this.weaponConfig.optics = this.savedWeaponConfig.optics;
        this.weaponConfig.ammunition = this.savedWeaponConfig.ammunition;
        this.weaponConfig.name = this.savedWeaponConfig.name;
    }

}
