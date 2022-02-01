export class BaseClientDetailsRequest {
    firstName: string;
    lastName: string;
    emailAddress: string;
    phoneNumber: string;
}

export class ClientDetailsSearchRequest {
    firstName: string;
    lastName: string;
}

export class ClientDetailsDeleteRequest {
    clientDetailsId: string;
}

export class ClientDetailsUpdateRequest extends BaseClientDetailsRequest {
    clientDetailsId: string;
}

export class ClientDetailsCreateRequest extends BaseClientDetailsRequest {

}

