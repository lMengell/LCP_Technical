"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientDetail = void 0;
var ClientDetail = /** @class */ (function () {
    function ClientDetail() {
    }
    ClientDetail.prototype.isValidForCreate = function () {
        if (!this.firstName)
            return false;
        if (!this.lastName)
            return false;
        if (!this.emailAddress)
            return false;
        if (!this.phoneNumber)
            return false;
        return true;
    };
    return ClientDetail;
}());
exports.ClientDetail = ClientDetail;
//# sourceMappingURL=ClientDetail.js.map