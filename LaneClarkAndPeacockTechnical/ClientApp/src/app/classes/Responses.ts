import { ClientDetail } from "./ClientDetail";

export class BaseResponse {
    hasError: boolean;
    errorMessage: string;
}

export class ClientDetailsSearchResponse extends BaseResponse {
    clientDetails: ClientDetail[];
}

export class ClientDetailsCreateResponse extends BaseResponse {

}

export class ClientDetailsUpdateResponse extends BaseResponse {

}

export class ClientDetailsDeleteResponse extends BaseResponse {

}