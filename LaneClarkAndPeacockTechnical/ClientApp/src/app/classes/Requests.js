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
exports.ClientDetailsCreateRequest = exports.ClientDetailsUpdateRequest = exports.ClientDetailsDeleteRequest = exports.ClientDetailsSearchRequest = exports.BaseClientDetailsRequest = void 0;
var BaseClientDetailsRequest = /** @class */ (function () {
    function BaseClientDetailsRequest() {
    }
    return BaseClientDetailsRequest;
}());
exports.BaseClientDetailsRequest = BaseClientDetailsRequest;
var ClientDetailsSearchRequest = /** @class */ (function () {
    function ClientDetailsSearchRequest() {
    }
    return ClientDetailsSearchRequest;
}());
exports.ClientDetailsSearchRequest = ClientDetailsSearchRequest;
var ClientDetailsDeleteRequest = /** @class */ (function () {
    function ClientDetailsDeleteRequest() {
    }
    return ClientDetailsDeleteRequest;
}());
exports.ClientDetailsDeleteRequest = ClientDetailsDeleteRequest;
var ClientDetailsUpdateRequest = /** @class */ (function (_super) {
    __extends(ClientDetailsUpdateRequest, _super);
    function ClientDetailsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ClientDetailsUpdateRequest;
}(BaseClientDetailsRequest));
exports.ClientDetailsUpdateRequest = ClientDetailsUpdateRequest;
var ClientDetailsCreateRequest = /** @class */ (function (_super) {
    __extends(ClientDetailsCreateRequest, _super);
    function ClientDetailsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ClientDetailsCreateRequest;
}(BaseClientDetailsRequest));
exports.ClientDetailsCreateRequest = ClientDetailsCreateRequest;
//# sourceMappingURL=Requests.js.map