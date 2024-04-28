"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var header_component_1 = require("./header/header.component");
var footer_component_1 = require("./footer/footer.component");
var section_landing_component_1 = require("./section-landing/section-landing.component");
var sectionsjobs_component_1 = require("./sectionsjobs/sectionsjobs.component");
var sectionproject_component_1 = require("./sectionproject/sectionproject.component");
var sectionskills_component_1 = require("./sectionskills/sectionskills.component");
var sectiontech_component_1 = require("./sectiontech/sectiontech.component");
var sectionform_component_1 = require("./sectionform/sectionform.component");
var cardproject_component_1 = require("./sectionproject/cardproject/cardproject.component");
var card_techno_component_1 = require("./sectiontech/card-techno/card-techno.component");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Portofolio d\' Anthony Bossut';
        console.log("start");
    }
    AppComponent.prototype.ngOnInit = function () {
        particlesJS.load("particles-js", "assets/particlesjs-config.json", null);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            standalone: true,
            imports: [router_1.RouterOutlet,
                header_component_1.HeaderComponent,
                section_landing_component_1.SectionLandingComponent,
                sectionsjobs_component_1.SectionsjobsComponent,
                sectionskills_component_1.SectionskillsComponent,
                sectiontech_component_1.SectiontechComponent,
                sectionform_component_1.SectionformComponent,
                footer_component_1.FooterComponent,
                cardproject_component_1.CardprojectComponent,
                sectionproject_component_1.SectionprojectComponent,
                card_techno_component_1.CardTechnoComponent,
            ],
            templateUrl: './app.component.html',
            styleUrl: './app.component.sass'
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
