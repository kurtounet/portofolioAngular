"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SectiontechComponent = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var card_techno_component_1 = require("../sectiontech/card-techno/card-techno.component");
var data_techno_1 = require("../data/data.techno");
var SectiontechComponent = /** @class */ (function () {
    function SectiontechComponent() {
        this.listTechno = data_techno_1.TECHNO;
    }
    SectiontechComponent.prototype.ngOnInit = function () {
        console.log(this.listTechno);
    };
    SectiontechComponent = __decorate([
        core_1.Component({
            selector: 'app-sectiontech',
            standalone: true,
            imports: [common_1.CommonModule, card_techno_component_1.CardTechnoComponent],
            templateUrl: './sectiontech.component.html',
            styleUrl: './sectiontech.component.sass'
        })
    ], SectiontechComponent);
    return SectiontechComponent;
}());
exports.SectiontechComponent = SectiontechComponent;
