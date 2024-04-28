"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CardJobComponent = void 0;
var core_1 = require("@angular/core");
//import { ModelJob } from './models/ModelJob.models';
var common_1 = require("@angular/common");
var CardJobComponent = /** @class */ (function () {
    function CardJobComponent() {
        this.url = "../assets/imgs/logo-technologies/angular.png";
        this.isSkillsVisible = false;
    }
    CardJobComponent.prototype.toggleVisibility = function () {
        this.isSkillsVisible = !this.isSkillsVisible;
    };
    __decorate([
        core_1.Input()
    ], CardJobComponent.prototype, "job");
    CardJobComponent = __decorate([
        core_1.Component({
            selector: 'app-card-job',
            standalone: true,
            imports: [common_1.CommonModule],
            templateUrl: './card-job.component.html',
            styleUrl: './card-job.component.sass'
        })
    ], CardJobComponent);
    return CardJobComponent;
}());
exports.CardJobComponent = CardJobComponent;
