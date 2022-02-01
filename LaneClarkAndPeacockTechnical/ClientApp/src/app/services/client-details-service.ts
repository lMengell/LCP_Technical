import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ClientDetailsSearchRequest, ClientDetailsDeleteRequest, ClientDetailsUpdateRequest, ClientDetailsCreateRequest } from '../classes/Requests';
import { ClientDetailsCreateResponse, ClientDetailsDeleteResponse, ClientDetailsSearchResponse, ClientDetailsUpdateResponse } from '../classes/Responses';
import { Observable } from 'rxjs';

export class ClientDetailsService
{
    private headers: HttpHeaders;
    

    constructor(private http: HttpClient, private baseUrl: string) {
        this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    }

    deleteClientDetail(request: ClientDetailsDeleteRequest): Observable<ClientDetailsDeleteResponse> {
        let url = this.baseUrl + 'ClientDetails/DeleteClientDetail';
        let body = JSON.stringify(request);

        return this.postRequest<ClientDetailsDeleteResponse>(url, body);
    }

    updateClientDetail(request: ClientDetailsUpdateRequest): Observable<ClientDetailsUpdateResponse> {
        let url = this.baseUrl + 'ClientDetails/UpdateClientDetail';
        let body = JSON.stringify(request);

        return this.postRequest<ClientDetailsUpdateResponse>(url, body);
    }

    createClientDetail(request: ClientDetailsCreateRequest): Observable<ClientDetailsCreateResponse> {
        let url = this.baseUrl + 'ClientDetails/CreateClientDetail';
        let body = JSON.stringify(request);

        return this.postRequest<ClientDetailsCreateResponse>(url, body);
    }

    searchClientDetails(request: ClientDetailsSearchRequest): Observable<ClientDetailsSearchResponse> {
        let url = this.baseUrl + 'ClientDetails/SearchClientDetails';
        let body = JSON.stringify(request);

        return this.postRequest<ClientDetailsSearchResponse>(url, body);
    }

    postRequest<T>(url: string, body: string) : Observable<T> {
        return this.http.post<T>(url, body, { headers: this.headers });
    }
}
