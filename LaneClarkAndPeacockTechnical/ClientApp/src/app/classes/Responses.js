"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientDetailsDeleteResponse = exports.ClientDetailsUpdateResponse = exports.ClientDetailsCreateResponse = exports.ClientDetailsSearchResponse = exports.BaseResponse = void 0;
var BaseResponse = /** @class */ (function () {
    function BaseResponse() {
    }
    return BaseResponse;
}());
exports.BaseResponse = BaseResponse;
var ClientDetailsSearchResponse = /** @class */ (function (_super) {
    __extends(ClientDetailsSearchResponse, _super);
    function ClientDetailsSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ClientDetailsSearchResponse;
}(BaseResponse));
exports.ClientDetailsSearchResponse = ClientDetailsSearchResponse;
var ClientDetailsCreateResponse = /** @class */ (function (_super) {
    __extends(ClientDetailsCreateResponse, _super);
    function ClientDetailsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ClientDetailsCreateResponse;
}(BaseResponse));
exports.ClientDetailsCreateResponse = ClientDetailsCreateResponse;
var ClientDetailsUpdateResponse = /** @class */ (function (_super) {
    __extends(ClientDetailsUpdateResponse, _super);
    function ClientDetailsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ClientDetailsUpdateResponse;
}(BaseResponse));
exports.ClientDetailsUpdateResponse = ClientDetailsUpdateResponse;
var ClientDetailsDeleteResponse = /** @class */ (function (_super) {
    __extends(ClientDetailsDeleteResponse, _super);
    function ClientDetailsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ClientDetailsDeleteResponse;
}(BaseResponse));
exports.ClientDetailsDeleteResponse = ClientDetailsDeleteResponse;
//# sourceMappingURL=Responses.js.map