import
{
    ItemComponent
}
from '../item/item.component';
import
{
    Component
}
from '@angular/core';

@Component(
{
    selector: 'app-ammunition',
    templateUrl: './ammunition.component.html',
    styleUrls: ['./ammunition.component.scss']
})
export class AmmunitionComponent extends ItemComponent
{

    constructor()
    {
        super();
    }

}
