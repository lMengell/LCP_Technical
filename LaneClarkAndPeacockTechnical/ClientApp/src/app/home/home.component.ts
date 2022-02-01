import { Component, Inject, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ClientDetail } from '../classes/ClientDetail';
import { ClientDetailsService } from '../services/client-details-service'
import { ClientDetailsCreateRequest, ClientDetailsDeleteRequest, ClientDetailsSearchRequest, ClientDetailsUpdateRequest } from '../classes/Requests';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit
{
    public clientDetails: ClientDetail[];
    private clientDetailsService: ClientDetailsService;
    private updatedClientDetail: ClientDetail;
    private isNewClientDetail: boolean = true;
    private showErrors: boolean = false;
    private firstNameSearch: string = "";
    private lastNameSearch: string = "";

    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string)
    {
        this.clientDetailsService = new ClientDetailsService(http, baseUrl);
        this.clientDetails = [];
    }

    ngOnInit() {
        this.searchClientDetails();
    }

    dateToString(date: Date): string {
        let pipe = new DatePipe('en-UK');
        return pipe.transform(date, 'short');
    }

    public search(event: any): void {
        this.searchClientDetails(this.firstNameSearch, this.lastNameSearch);
    }

    editClientDetail(event: any, clientDetail: ClientDetail): void {
        this.updatedClientDetail = new ClientDetail();

        this.updatedClientDetail.firstName = clientDetail.firstName;
        this.updatedClientDetail.lastName = clientDetail.lastName;
        this.updatedClientDetail.emailAddress = clientDetail.emailAddress;
        this.updatedClientDetail.phoneNumber = clientDetail.phoneNumber;
        this.updatedClientDetail.clientDetailsId = clientDetail.clientDetailsId;

        this.isNewClientDetail = false;
    }

    addNewClientDetail(event: any): void
    {
        this.updatedClientDetail = new ClientDetail();
        this.isNewClientDetail = true;
    }

    searchClientDetails(firstName: string = "", lastName: string = ""): void {
        let request = new ClientDetailsSearchRequest();
        request.firstName = firstName;
        request.lastName = lastName;

        this.clientDetailsService.searchClientDetails(request)
            .subscribe(response => {
                if (response.hasError) {
                    alert(response.errorMessage);
                    return;
                }

                this.clientDetails = [...response.clientDetails];
            });;
    }

    deleteClientDetail(event: any, clientDetailsId: string): void {
        let request = new ClientDetailsDeleteRequest();
        request.clientDetailsId = clientDetailsId;

        this.clientDetailsService.deleteClientDetail(request).subscribe(response => {
            if (response.hasError) {
                alert(response.errorMessage);
                return;
            }

            this.searchClientDetails();
        });
    }

    onClientDetailSave(isSave: boolean): void {
        if (!isSave) {
            this.resetAddOrEditModal();
            return;
        }

        console.log(this.updatedClientDetail);
        console.log(this.updatedClientDetail.isValidForCreate());
        if (!this.updatedClientDetail.isValidForCreate()) {
            this.showErrors = true;
            return;
        }

        console.log(this.updatedClientDetail);

        if (this.isNewClientDetail) {
            let request = new ClientDetailsCreateRequest();
            request.firstName = this.updatedClientDetail.firstName;
            request.lastName = this.updatedClientDetail.lastName;
            request.emailAddress = this.updatedClientDetail.emailAddress;
            request.phoneNumber = this.updatedClientDetail.phoneNumber;

            this.clientDetailsService.createClientDetail(request).subscribe(response => {
                if (response.hasError) {
                    alert(response.errorMessage);
                    return;
                }

                this.searchClientDetails();
                this.resetAddOrEditModal();
            });
            return;
        }

        let request = new ClientDetailsUpdateRequest();
        request.clientDetailsId = this.updatedClientDetail.clientDetailsId;
        console.log(this.updatedClientDetail.clientDetailsId, request.clientDetailsId)
        request.firstName = this.updatedClientDetail.firstName;
        request.lastName = this.updatedClientDetail.lastName;
        request.emailAddress = this.updatedClientDetail.emailAddress;
        request.phoneNumber = this.updatedClientDetail.phoneNumber;

        console.log("Updated request ");
        console.log(request);

        this.clientDetailsService.updateClientDetail(request).subscribe(response => {
            if (response.hasError) {
                alert(response.errorMessage);
                return;
            }

            this.searchClientDetails();
            this.resetAddOrEditModal();
        });
    }

    resetAddOrEditModal(): void {
        this.updatedClientDetail = null;
        this.isNewClientDetail = false;
        this.showErrors = false;
    }
}
