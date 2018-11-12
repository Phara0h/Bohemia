import
{
    Component,
    OnInit,
    Input
}
from '@angular/core';

@Component(
{
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit
{
    public imgSrc;
    private _type;
    get type(): any
    {
        return this._type;
    }

    @Input()
    set type(val: any)
    {
        this._type = val;
        switch (this._type)
        {
            case 'ACOG':
                this.imgSrc = 'assets/ACOG.png';
                break;
            case 'Red Dot':
                this.imgSrc = 'assets/RedDot.png';
                break;
            case 'AK-47':
                this.imgSrc = 'assets/AK-47.png';
                break;
            case 'M16':
                this.imgSrc = 'assets/M16.png';
                break;
            case '30 Round Clip': // Its actually a 10 round in the picture.
                this.imgSrc = 'assets/10_Round_Clip.png';
                break;
            case '50 Round Clip': // Its actually a 30 round in the picture.
                this.imgSrc = 'assets/30_Round_Clip.png';
                break;
        }
    }
    constructor()
    {}

    ngOnInit()
    {}

}
