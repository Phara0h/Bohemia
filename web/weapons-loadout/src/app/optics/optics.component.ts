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
    selector: 'app-optics',
    templateUrl: './optics.component.html',
    styleUrls: ['./optics.component.scss']
})
export class OpticsComponent extends ItemComponent
{
    constructor()
    {
        super();
    }
}
