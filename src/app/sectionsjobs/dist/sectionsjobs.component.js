"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SectionsjobsComponent = void 0;
var core_1 = require("@angular/core");
var data_job_1 = require("../data/data.job");
var common_1 = require("@angular/common");
var card_job_component_1 = require("../sectionsjobs/card-job/card-job.component");
var SectionsjobsComponent = /** @class */ (function () {
    function SectionsjobsComponent() {
        this.listJobs = data_job_1.JOBS;
    }
    SectionsjobsComponent = __decorate([
        core_1.Component({
            selector: 'app-sectionsjobs',
            standalone: true,
            imports: [common_1.CommonModule, card_job_component_1.CardJobComponent],
            templateUrl: './sectionsjobs.component.html',
            styleUrl: './sectionsjobs.component.sass'
        })
    ], SectionsjobsComponent);
    return SectionsjobsComponent;
}());
exports.SectionsjobsComponent = SectionsjobsComponent;
