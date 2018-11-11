import
{
    Component,
    OnInit
}
from '@angular/core';
import
{
    EmployeeService
}
from '../employee.service';


@Component(
{
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit
{
    public employees: any[];
    private sortTitleSwap = 1;
    private sortNameSwap = 1;
    constructor(private employeeService: EmployeeService)
    {

    }

    ngOnInit()
    {
        this.employeeService.getAll < any[] > ().subscribe((data: any[]) => this.employees = data);
    }

    sortByName()
    {
        this.employees = this.employees.sort((a, b) =>
        {
            // ignore upper and lowercase
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();

            return nameA < nameB ? -1 * this.sortNameSwap : this.sortNameSwap;
        });
        this.sortNameSwap = -1 * this.sortNameSwap;
    }

    sortByTitle()
    {
        this.employees = this.employees.sort((a, b) =>
        {
            // ignore upper and lowercase
            const titleA = a.title.toUpperCase();
            const titleB = b.title.toUpperCase();

            return titleA < titleB ? -1 * this.sortTitleSwap : this.sortTitleSwap;
        });
        this.sortTitleSwap = -1 * this.sortTitleSwap;
    }
}
