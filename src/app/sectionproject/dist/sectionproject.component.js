"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SectionprojectComponent = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var cardproject_component_1 = require("./cardproject/cardproject.component");
var data_project_1 = require("../data/data.project");
var SectionprojectComponent = /** @class */ (function () {
    function SectionprojectComponent() {
        this.listProjects = data_project_1.PROJECTS;
    }
    SectionprojectComponent = __decorate([
        core_1.Component({
            selector: 'app-sectionproject',
            standalone: true,
            imports: [
                common_1.CommonModule,
                cardproject_component_1.CardprojectComponent
            ],
            templateUrl: './sectionproject.component.html',
            styleUrl: './sectionproject.component.sass'
        })
    ], SectionprojectComponent);
    return SectionprojectComponent;
}());
exports.SectionprojectComponent = SectionprojectComponent;
