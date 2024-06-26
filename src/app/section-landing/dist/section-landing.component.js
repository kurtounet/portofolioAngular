"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SectionLandingComponent = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var circular_list_component_1 = require("../section-landing/circular-list/circular-list.component");
var SectionLandingComponent = /** @class */ (function () {
    function SectionLandingComponent() {
        this.items = ['html5', 'ccs3', 'Symfony', 'Angular', 'ApiPlatform', 'Javascript'];
    }
    SectionLandingComponent = __decorate([
        core_1.Component({
            selector: 'app-section-landing',
            standalone: true,
            imports: [common_1.CommonModule, circular_list_component_1.CircularListComponent],
            templateUrl: './section-landing.component.html',
            styleUrl: './section-landing.component.sass'
        })
    ], SectionLandingComponent);
    return SectionLandingComponent;
}());
exports.SectionLandingComponent = SectionLandingComponent;
