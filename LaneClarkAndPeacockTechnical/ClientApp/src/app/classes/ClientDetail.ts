import { ClientNote } from './/ClientNote';

export class ClientDetail {
    clientDetailsId: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
    phoneNumber: string;
    notes: ClientNote[];
    createdAt: Date;
    lastUpdatedAt: Date;

    public isValidForCreate(): boolean {
        if (!this.firstName)
            return false;

        if (!this.lastName)
            return false;

        if (!this.emailAddress)
            return false;

        if (!this.phoneNumber)
            return false;

        return true;
    }
}