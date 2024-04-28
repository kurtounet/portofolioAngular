"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CardTechnoComponent = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var CardTechnoComponent = /** @class */ (function () {
    function CardTechnoComponent() {
    }
    CardTechnoComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        console.log(this.techno.title);
    };
    __decorate([
        core_1.Input()
    ], CardTechnoComponent.prototype, "techno");
    CardTechnoComponent = __decorate([
        core_1.Component({
            selector: 'app-card-techno',
            standalone: true,
            imports: [common_1.CommonModule],
            templateUrl: './card-techno.component.html',
            styleUrl: './card-techno.component.sass'
        })
    ], CardTechnoComponent);
    return CardTechnoComponent;
}());
exports.CardTechnoComponent = CardTechnoComponent;
