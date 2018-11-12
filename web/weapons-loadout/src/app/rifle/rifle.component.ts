import
{
    Component
}
from '@angular/core';
import
{
    ItemComponent
}
from '../item/item.component';

@Component(
{
    selector: 'app-rifle',
    templateUrl: './rifle.component.html',
    styleUrls: ['./rifle.component.scss']
})
export class RifleComponent extends ItemComponent
{
    constructor()
    {
        super();
    }

}
