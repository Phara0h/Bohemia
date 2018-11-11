import
{
    Injectable
}
from '@angular/core';
import
{
    HttpClient
}
from '@angular/common/http';
import
{
    Observable
}
from 'rxjs';

@Injectable(
{
    providedIn: 'root'
})
export class EmployeeService
{
    endpoint;

    constructor(private http: HttpClient)
    {
        this.endpoint = 'http://' + window.location.hostname + '/api/employees';
    }
    public getAll < T > (): Observable < T >
    {
        return this.http.get < T > (this.endpoint);
    }
}
