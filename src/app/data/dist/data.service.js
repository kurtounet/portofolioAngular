"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DataService = void 0;
var core_1 = require("@angular/core");
var dataJobs = require("./jobs.json");
var dataTechnologies = require("./techno.json");
var dataProject = require("./project.json");
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.listJobs = dataJobs;
        this.listTechnologies = dataTechnologies;
        this.listProject = dataProject;
    }
    DataService.prototype.getLocalData = function () {
        return this.http.get('./ techno.json');
    };
    DataService.prototype.getTechnologies = function () {
        return this.http.get('./ techno.json');
    };
    DataService.prototype.getProjects = function () {
        return dataProject;
    };
    DataService.prototype.getJobs = function () {
        return dataJobs;
    };
    DataService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
