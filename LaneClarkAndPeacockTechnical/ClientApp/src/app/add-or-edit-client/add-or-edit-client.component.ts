import { Component, Inject, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ClientDetailsService } from '../services/client-details-service';
import { ClientDetail } from '../classes/ClientDetail';

@Component({
  selector: 'add-or-edit-client',
  templateUrl: './add-or-edit-client.component.html'
})
export class AddOrEditClientComponent {

    @Input() clientDetail: ClientDetail;
    @Input() isNew: boolean;
    @Input() showErrors: boolean;

    @Output() clientDetailChange = new EventEmitter<ClientDetail>();
    @Output() onSave = new EventEmitter<boolean>();

    constructor() {
    }

    save(event: any): void {
        console.log("Save");
        this.onSave.emit(true);
    }

    cancel(event: any): void {
        console.log("Cancel");
        this.onSave.emit(false);
    }

    public showErrorClass(value: string) : string {
        if (!value && this.showErrors) {
            return "error";
        }
    }
}
