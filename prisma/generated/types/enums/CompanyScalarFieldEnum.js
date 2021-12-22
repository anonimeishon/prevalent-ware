"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var CompanyScalarFieldEnum;
(function (CompanyScalarFieldEnum) {
    CompanyScalarFieldEnum["id"] = "id";
    CompanyScalarFieldEnum["logo"] = "logo";
    CompanyScalarFieldEnum["companyName"] = "companyName";
    CompanyScalarFieldEnum["socialReason"] = "socialReason";
    CompanyScalarFieldEnum["idType"] = "idType";
    CompanyScalarFieldEnum["companyId"] = "companyId";
    CompanyScalarFieldEnum["isApproved"] = "isApproved";
    CompanyScalarFieldEnum["status"] = "status";
    CompanyScalarFieldEnum["employeeAmount"] = "employeeAmount";
})(CompanyScalarFieldEnum = exports.CompanyScalarFieldEnum || (exports.CompanyScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(CompanyScalarFieldEnum, {
    name: "CompanyScalarFieldEnum",
    description: undefined,
});
