webpackJsonp([8],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigurationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ConfigurationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfigurationPage = (function () {
    function ConfigurationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.stateProd = "visible-prod";
        this.stateCharge = "invisible-charge";
        this.stateModif = "invisible-autre-modifs";
    }
    ConfigurationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfigurationPage');
    };
    ConfigurationPage.prototype.toggleVisibility = function () {
        this.stateProd = (this.stateProd == "visible-prod") ? "invisible-prod" : "visible-prod";
        this.stateCharge = (this.stateCharge == "visible-charge") ? "invisible-charge" : "visible-charge";
    };
    ConfigurationPage.prototype.toggleVisibles = function () {
        this.stateCharge = (this.stateCharge == "visible-charge") ? "invisible-charge" : "visible-charge";
        this.stateModif = (this.stateModif == "visible-autre-modifs") ? "invisible-autre-modifs" : "visible-autre-modifs";
    };
    ConfigurationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-configuration',template:/*ion-inline-start:"D:\Terrence\app\ionic\keiwa\version interface design\24-03-2018\keiwa-app-pro\src\pages\configuration\configuration.html"*/'<!--\n\n  Generated template for the ConfigurationPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content style=" background:rgb(241, 241, 241); ">\n\n\n\n    <div class="headerWelcomePage" padding>\n\n        <div class="welcome_page_header" style=" text-align:center; ">\n\n            <span style="position: relative; top: 10px; color: #fff;  "> <ion-icon style="font-size:50px;" name="ios-construct"></ion-icon> </span>\n\n        </div>\n\n        <div class="textHeader">\n\n            <h1>Configuration</h1>\n\n        </div>\n\n    </div>\n\n    <div [@produitservice]="stateProd" style="  margin-top:0px; position:relative; " padding>\n\n        <div class="headerBodyConfig">\n\n            <h3> Selectionner vos produits </h3>\n\n            <button class="animated infinite pulse" style="position: absolute; top:-30px; left:15px; " ion-fab color="blanc"><ion-icon color="primary" name="md-mic"></ion-icon></button>\n\n\n\n        </div>\n\n        <div class="CorpsBodyConfig">\n\n            <ul class="animated slideInDown">\n\n                <li class="">\n\n                    <div class="circle"><img src="assets/imgs/radish_vegetables_16825.png"></div>\n\n                    <h4>Jamie Harden\n\n                        <p class=" desc_filiere "> Lorem ipsum dolor, sit amet . </p>\n\n                    </h4>\n\n                    <input id="check-1" type="checkbox">\n\n                    <label for="check-1"><i class="fa fa-check"></i></label>\n\n                </li>\n\n\n\n            </ul>\n\n\n\n            <ul class="animated slideInDown">\n\n                <li class="">\n\n                    <div class="circle"><img src="assets/imgs/jacket-2.png"></div>\n\n                    <h4>Jamie Harden\n\n                        <p class=" desc_filiere "> Lorem ipsum dolor, sit amet . </p>\n\n                    </h4>\n\n                    <input id="check-2" type="checkbox">\n\n                    <label for="check-2"><i class="fa fa-check"></i></label>\n\n                </li>\n\n\n\n            </ul>\n\n            <ul>\n\n                <li class="animated slideInDown">\n\n                    <div class="circle"><img src="assets/imgs/icons8-taxi-48.png"></div>\n\n                    <h4>Jamie Harden\n\n                        <p class=" desc_filiere "> Lorem ipsum dolor, sit amet . </p>\n\n                    </h4>\n\n\n\n                    <input id="check-3" type="checkbox">\n\n                    <label for="check-3"><i class="fa fa-check"></i></label>\n\n                </li>\n\n\n\n            </ul>\n\n\n\n            <ul>\n\n                <li class="animated slideInDown">\n\n                    <div class="circle"><img src="assets/imgs/icons8-nourriture-50.png"></div>\n\n                    <h4>Jamie Harden\n\n                        <p class=" desc_filiere "> Lorem ipsum dolor, sit amet . </p>\n\n                    </h4>\n\n                    <input id="check-4" type="checkbox">\n\n                    <label for="check-4"><i class="fa fa-check"></i></label>\n\n                </li>\n\n\n\n            </ul>\n\n\n\n            <ul>\n\n                <li class="animated slideInDown">\n\n                    <div class="circle"><img src="assets/imgs/icons8-entretien-48.png"></div>\n\n                    <h4>Jamie Harden\n\n                        <p class=" desc_filiere "> Lorem ipsum dolor, sit amet . </p>\n\n                    </h4>\n\n                    <input id="check-5" type="checkbox">\n\n                    <label for="check-5"><i class="fa fa-check"></i></label>\n\n                </li>\n\n\n\n            </ul>\n\n\n\n        </div>\n\n\n\n    </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <div class="footerButton">\n\n        <div style="text-align:center;padding-top:12px;">\n\n            <button class="btn-default-keiwa background-default " style="width:220px;height:45px;background: #1abc9c;color:white;">Continuer</button>\n\n        </div>\n\n\n\n    </div>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Terrence\app\ionic\keiwa\version interface design\24-03-2018\keiwa-app-pro\src\pages\configuration\configuration.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])("produitservice", [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])("visible-prod", Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        transform: 'translateY(0%)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])("invisible-prod", Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        transform: 'translateY(-200%)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('* => *', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('1s ease-in'))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])("charges", [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])("visible-charge", Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        transform: 'translateY(-100%)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])("invisible-charge", Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        transform: 'translateY(-500%)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('* => *', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('1s ease-out'))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])("autre-modifs", [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])("visible-autre-modifs", Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        transform: 'translateY(-200%)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])("invisible-autre-modifs", Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        transform: 'translateY(-600%)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('* => *', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('1s ease-in'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ConfigurationPage);
    return ConfigurationPage;
}());

//# sourceMappingURL=configuration.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CreditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreditPage = (function () {
    function CreditPage(navCtrl, navParams, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
    }
    CreditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreditPage');
    };
    CreditPage.prototype.closeCredit = function () {
        this.view.dismiss();
    };
    CreditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-credit',template:/*ion-inline-start:"D:\Terrence\app\ionic\keiwa\version interface design\24-03-2018\keiwa-app-pro\src\pages\credit\credit.html"*/'<!--\n\n  Generated template for the CreditPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="jauneor" >\n\n    <ion-title>credit</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="closeCredit()"><ion-icon name="close"></ion-icon></button>\n\n  </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <div class="form-style-5">\n\n        <form>\n\n            <fieldset>\n\n\n\n                <label for="field1">Date *</label>\n\n                <input type="date" class="form-control" required="required" name="daterecette" placeholder="Date *">\n\n\n\n                <input type="text" class="form-control" required="required" name="libelerecette" placeholder="libellés *">\n\n\n\n                <select id="job" class="form-control" required="required" name="category">\n\n\n\n          <optgroup label="Catégorie">\n\n\n\n              <option value="journalier">catégory</option>\n\n            \n\n            <option value="journalier">client</option>\n\n            \n\n            <option value="hebdomadaire">fournisseur</option>\n\n           \n\n            \n\n          </optgroup>\n\n          </select>\n\n\n\n                <label for="field1">date de remboursement *</label>\n\n                <input type="date" class="form-control" required="required" name="daterecette" placeholder="Date *">\n\n\n\n\n\n                <input type="text" class="form-control" required="required" name="montantrecette" placeholder="Montant *">\n\n            </fieldset>\n\n            <fieldset>\n\n\n\n\n\n            </fieldset>\n\n            <input type="submit" value="Valider" />\n\n        </form>\n\n\n\n\n\n    </div>\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Terrence\app\ionic\keiwa\version interface design\24-03-2018\keiwa-app-pro\src\pages\credit\credit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], CreditPage);
    return CreditPage;
}());

//# sourceMappingURL=credit.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepensePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DepensePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DepensePage = (function () {
    function DepensePage(navCtrl, view, navParams) {
        this.navCtrl = navCtrl;
        this.view = view;
        this.navParams = navParams;
        this.depenseForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            datedepense: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            category: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            libeledepense: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            montantdepense: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]()
        });
    }
    DepensePage.prototype.registerDepense = function () {
        alert(this.depenseForm.value);
    };
    DepensePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DepensePage');
    };
    DepensePage.prototype.closeDepense = function () {
        this.view.dismiss();
    };
    DepensePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-depense',template:/*ion-inline-start:"D:\Terrence\app\ionic\keiwa\version interface design\24-03-2018\keiwa-app-pro\src\pages\depense\depense.html"*/'<!--\n\n  Generated template for the RecettePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="danger">\n\n        <ion-title>Depense</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button (click)="closeDepense()"><ion-icon name="close"></ion-icon></button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n    <div class="form-style-5">\n\n        <form (ngSubmit)="registerDepense()" [formGroup]="depenseForm" depenseForm>\n\n            <fieldset>\n\n                <legend><span class="number"> <img src="assets/imgs/recette.png" style="width:23px; " alt=""> </span> Infos dépense</legend>\n\n                <label for="field1">Date *</label>\n\n                <input formControlName="datedepense" type="date" class="form-control" required="required" name="daterecette" placeholder="Date *">\n\n\n\n                <input type="text" formControlName="libeledepense" class="form-control" required="required" name="libelerecette" placeholder="libellés *">\n\n\n\n                <select id="job" class="form-control" formControlName="category" required="required" name="category">\n\n\n\n                  <optgroup label="Catégorie">\n\n                    \n\n                    <option value="journalier">journalier</option>\n\n                    \n\n                    <option value="hebdomadaire">hebdomadaire</option>\n\n                    <option value="mensuel">mensuel</option>\n\n                    <option value="annuel">annuel</option>\n\n                    \n\n                  </optgroup>\n\n                  </select>\n\n\n\n                <input type="text" formControlName="montantdepense" class="form-control" required="required" name="montantrecette" placeholder="Montant *">\n\n            </fieldset>\n\n            <fieldset>\n\n\n\n\n\n            </fieldset>\n\n            <input type="submit" value="Valider" />\n\n        </form>\n\n    </div>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Terrence\app\ionic\keiwa\version interface design\24-03-2018\keiwa-app-pro\src\pages\depense\depense.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DepensePage);
    return DepensePage;
}());

//# sourceMappingURL=depense.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, nativePageTransitions) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativePageTransitions = nativePageTransitions;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.goToWelcomePage = function () {
        var animationsOptions = {
            animation: 'ios-transition',
            duration: 300
        };
        this.navCtrl.pop(animationsOptions);
    };
    LoginPage.prototype.goToRegisterPage = function () {
        var animationsOptions = {
            animation: 'ios-transition',
            duration: 300
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */], {}, animationsOptions);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\Terrence\app\ionic\keiwa\version interface design\24-03-2018\keiwa-app-pro\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content>\n\n    <div class="welcomePage sliderOverflow">\n\n        <div class="headerWelcomePage" padding>\n\n            <div class="welcome_page_header">\n\n                <a (click)="goToWelcomePage()">\n\n                    <ion-icon ios="ios-close" class="fontSizeIcon" md="md-arrow-back"></ion-icon>\n\n                </a>\n\n            </div>\n\n            <div class="textHeader">\n\n                <h1>Connexion</h1>\n\n            </div>\n\n        </div>\n\n        <div class="bodyWelcomePage">\n\n            <div class="step" padding>\n\n                <div class="form-group">\n\n                    <input type="text" placeholder="Numéro de téléphone ou e-mail">\n\n                </div>\n\n                <div class="form-group">\n\n                    <input type="password" placeholder="Mot de passe">\n\n                </div>\n\n                <div class="form-group">\n\n                    <button class="btn-default-keiwa background-default" style="width:100%;height:45px;border-radius:0;">Je me connecte</button>\n\n                </div>\n\n                <div class="form-group" style="margin-bottom:35px;">\n\n                    <p>Mot de passe oublié? <br><strong>Obtenez de l\'aide pour vous connecter.</strong></p>\n\n                </div>\n\n                <div class="border-divider"></div>\n\n                <div class="form-group" style="margin-top:35px;">\n\n                    <button class="btn-default-keiwa btn-facebook" style="height:45px;border-radius:0">\n\n                <span class="fa fa-facebook"></span>\n\n                Se connecter avec facebook\n\n          </button> <br><br>\n\n                </div>\n\n            </div>\n\n            <hr>\n\n        </div>\n\n        <div class="footerFixed">\n\n            <p>Vous n\'avez pas de compte ? <strong> <a (click)="goToRegisterPage()"> inscrivez vous.</a></strong></p>\n\n        </div>\n\n\n\n\n\n\n\n\n\n\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\Terrence\app\ionic\keiwa\version interface design\24-03-2018\keiwa-app-pro\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpportunitePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the OpportunitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OpportunitePage = (function () {
    function OpportunitePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OpportunitePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OpportunitePage');
    };
    OpportunitePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-opportunite',template:/*ion-inline-start:"D:\Terrence\app\ionic\keiwa\version interface design\24-03-2018\keiwa-app-pro\src\pages\opportunite\opportunite.html"*/'<!--\n\n  Generated template for the OpportunitePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-toolbar color="primary">\n\n\n\n        <ion-buttons left>\n\n            <button ion-button icon-only menuToggle>\n\n            <ion-icon name="menu"  ></ion-icon>\n\n          </button>\n\n\n\n        </ion-buttons>\n\n        <ion-title>\n\n\n\n            Opportunité\n\n        </ion-title>\n\n\n\n    </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Terrence\app\ionic\keiwa\version interface design\24-03-2018\keiwa-app-pro\src\pages\opportunite\opportunite.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], OpportunitePage);
    return OpportunitePage;
}());

//# sourceMappingURL=opportunite.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecettePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_saverecette_saverecette__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RecettePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecettePage = (function () {
    function RecettePage(navCtrl, saverecet, view, navParams) {
        this.navCtrl = navCtrl;
        this.saverecet = saverecet;
        this.view = view;
        this.navParams = navParams;
        this.recetteForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            daterecette: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
            category: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
            libelerecette: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
            montantrecette: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]()
        });
    }
    RecettePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecettePage');
    };
    RecettePage.prototype.closeRecette = function () {
        this.view.dismiss();
    };
    RecettePage.prototype.goToSlide3 = function () {
        this.slides.slideTo(1, 500);
    };
    RecettePage.prototype.register = function () {
        alert(this.recetteForm.value);
        this.saverecet.dataRecette.push(this.recetteForm.value);
    };
    RecettePage.prototype.toggleFuction = function (e) {
        e.target.classList.add("rec_ele");
        var var_mod = document.getElementsByClassName("lulu");
        for (var i = 0; i < var_mod.length; i++) {
            if (var_mod[i] != e.target) {
                console.log(var_mod[i]);
                var_mod[i].classList.add("select_ele");
                var_mod[i].classList.remove("rec_ele");
            }
            else {
                var_mod[i].classList.remove("select_ele");
                var_mod[i].classList.add("rec_ele");
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
    ], RecettePage.prototype, "slides", void 0);
    RecettePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recette',template:/*ion-inline-start:"D:\Terrence\app\ionic\keiwa\version interface design\24-03-2018\keiwa-app-pro\src\pages\recette\recette.html"*/'<!--\n\n  Generated template for the RecettePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <ion-title>recette</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button (click)="closeRecette()"><ion-icon name="close"></ion-icon></button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content >\n\n\n\n        <ion-slides pager="false">\n\n                <ion-slide   >\n\n\n\n\n\n\n\n                    <ion-grid  >  \n\n\n\n                        <ion-row>\n\n                                <ion-col >\n\n                                        <img class="lulu" (click)="toggleFuction($event)" style=" border-radius:50%; padding:2px; width:80px; " src="assets/imgs/icons8-orge-48.png" alt="" srcset="">\n\n                                        <span style="display:none; position:absolute; top:10px; right:20px; color:#33c924; " > <ion-icon name="checkmark-circle"></ion-icon> </span>\n\n                                        <p style="position:relative; top:-20px; color:#888; font-family:\'OpenSans-Light\'; font-size:14px; font-style:italic;  "  > céréale  </p>\n\n                                </ion-col>\n\n    \n\n                                <ion-col >\n\n                                        <img (click)="toggleFuction($event)" class="lulu" style=" border-radius:50%; padding:2px; width:80px; " src="assets/imgs/x3_content_icon-icons.com_76806.png" alt="" srcset="">\n\n                                        <span style="display:none; position:absolute; top:10px; right:20px; color:#33c924; " > <ion-icon name="checkmark-circle"></ion-icon> </span>\n\n                                        <p style="position:relative; top:-20px; color:#888; font-family:\'OpenSans-Light\'; font-size:14px; font-style:italic;  "  > fruits </p>\n\n                                </ion-col>\n\n    \n\n                            \n\n\n\n                                <ion-col >\n\n                                        <img style=" border-radius:50%; padding:2px; width:80px; " src="assets/imgs/icons8-poivrière-80.png" alt="" srcset="">\n\n                                        <p style="position:relative; top:-20px; color:#888; font-family:\'OpenSans-Light\'; font-size:14px; font-style:italic;  "  > Epices </p>\n\n                                </ion-col>\n\n                            \n\n                        </ion-row>\n\n\n\n                        <ion-row> \n\n                                <ion-col >\n\n                                        <img style=" border-radius:50%; padding:2px; width:80px; " src="assets/imgs/radish_vegetables_16825.png" alt="" srcset="">\n\n                                        <p style="position:relative; top:-20px; color:#888; font-family:\'OpenSans-Light\'; font-size:14px; font-style:italic;  "  > Légumes </p>\n\n                                </ion-col>\n\n    \n\n                                <ion-col >\n\n                                        <img style=" border-radius:50%; padding:2px; width:80px; " src="assets/imgs/salad-1.png" alt="" srcset="">\n\n                                        <p style="position:relative; top:-20px; color:#888; font-family:\'OpenSans-Light\'; font-size:14px; font-style:italic;  "  > Feuilles </p>\n\n                                </ion-col>\n\n                                \n\n                                <ion-col >\n\n                                        <img style=" border-radius:50%; padding:2px; width:80px; " src="assets/imgs/icons8-patate-douce-80.png" alt="" srcset="">\n\n                                        <p style="position:relative; top:-20px; color:#888; font-family:\'OpenSans-Light\'; font-size:14px; font-style:italic;  "  > Tubercules </p>\n\n                                </ion-col> \n\n                                \n\n                            </ion-row>  \n\n\n\n                            <ion-row> \n\n                                    <ion-col >\n\n                                            <img style=" border-radius:50%; padding:2px; width:80px; " src="assets/imgs/shrimp.png" alt="" srcset="">\n\n                                            <p style="position:relative; top:-20px; color:#888; font-family:\'OpenSans-Light\'; font-size:14px; font-style:italic;  "  > Crustacé </p>\n\n                                    </ion-col>\n\n        \n\n                                    <ion-col >\n\n                                            <img style=" border-radius:50%; padding:2px; width:80px; " src="assets/imgs/steak.png" alt="" srcset="">\n\n                                            <p style="position:relative; top:-20px; color:#888; font-family:\'OpenSans-Light\'; font-size:14px; font-style:italic;  "  > Viande </p>\n\n                                    </ion-col> \n\n        \n\n                                    <ion-col >\n\n                                            <img style=" border-radius:50%; padding:2px; width:80px; " src="assets/imgs/Fish_Dorada_26371.png" alt="" srcset="">\n\n                                            <p style="position:relative; top:-20px; color:#888; font-family:\'OpenSans-Light\'; font-size:14px; font-style:italic;  "  > Poisson </p>\n\n                                    </ion-col>\n\n                                    \n\n                                </ion-row> \n\n\n\n                                <ion-row> \n\n                                        <ion-col >\n\n                                                <img  style=" border-radius:50%; padding:2px; width:80px; " src="assets/imgs/icons8-sac-de-farine-40.png" alt="" srcset="">\n\n                                                <p style="position:relative; top:-20px; color:#888; font-family:\'OpenSans-Light\'; font-size:14px; font-style:italic;  "  > Farine </p>\n\n                                        </ion-col>\n\n            \n\n                                        <ion-col >\n\n                                                <img style=" border-radius:50%; padding:2px; width:80px; " src="assets/imgs/icons8-huile-d\'olive-48.png" alt="" srcset="">\n\n                                                <p style="position:relative; top:-20px; color:#888; font-family:\'OpenSans-Light\'; font-size:14px; font-style:italic;  "  > Huile </p>\n\n                                        </ion-col> \n\n            \n\n                                        <ion-col >\n\n                                                <img style=" border-radius:50%; padding:2px; width:80px; " src="assets/imgs/Fish_Dorada_26371.png" alt="" srcset="">\n\n                                                <p style="position:relative; top:-20px; color:#888; font-family:\'OpenSans-Light\'; font-size:14px; font-style:italic;  "  > Poisson </p>\n\n                                        </ion-col>\n\n                                        \n\n                                    </ion-row> \n\n                      \n\n                        \n\n                    </ion-grid>\n\n                    \n\n                    <ion-fab (click)="goToSlide3()" style="position: absolute; bottom:40px; right:10px;" >\n\n                        <button ion-fab color="primary"> <ion-icon name="arrow-forward"></ion-icon> </button>\n\n                      </ion-fab>\n\n                 \n\n                </ion-slide>\n\n              \n\n             \n\n              \n\n              <ion-slide >\n\n              \n\n                \n\n\n\n                    <div id="formWrapper">\n\n\n\n                            <div id="form">\n\n                            <div class="logo">\n\n                           <p>\n\n                               <img style="width:70px;" src="assets/imgs/icons8-orge-48.png" alt="" srcset="">\n\n                           </p>\n\n                           <p style=" margin-top:-15px; " >\n\n                               <span style=" font-size:16px; color:#888; font-style:italic; font-family:\'OpenSans-Light\' " > Pomme du sénégale </span>\n\n                           </p>\n\n                            </div>\n\n            \n\n                            <div class="form-item">\n\n                                    <ion-item style=" margin-top:-15px; " >\n\n                                            <ion-label style=" color:#888; font-family:\'OpenSans-Light\' " >vente à crédit</ion-label>\n\n                                            <ion-toggle  ></ion-toggle>\n\n                                    </ion-item>\n\n                             </div>\n\n            \n\n                            \n\n            \n\n                                    <div class="form-item">\n\n                                        \n\n                                        <input placeholder="Quantité" style="font-size:14px;" type="text" name="quantite" id="email" class="form-style" autocomplete="off"/>\n\n                                    </div>\n\n                                    <div class="form-item">\n\n                                            \n\n                                            <input placeholder="Montant" style="font-size:14px;" type="text" name="text" id="email" class="form-style" autocomplete="off"/>\n\n                                        </div>\n\n                                    <div class="form-item">\n\n                                        \n\n                                        <input value="02/03/2017" style="font-size:14px;" type="text" name="texte" id="date"  class="form-style" />\n\n                                        <!-- <div class="pw-view"><i class="fa fa-eye"></i></div> -->\n\n                                            \n\n                                    </div>\n\n                                    <div class="form-item" style=" margin-top:40px; " >\n\n                                    <p class="pull-left"> </p>\n\n                                    <input type="submit" class="login pull-right" value="Enregistrer">\n\n                                    <div class="clear-fix"></div>\n\n                                    </div>\n\n                            </div>\n\n                            </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n              \n\n              </ion-slide>\n\n              \n\n              </ion-slides>\n\n              \n\n              \n\n              \n\n              \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n       \n\n\n\n</ion-content>'/*ion-inline-end:"D:\Terrence\app\ionic\keiwa\version interface design\24-03-2018\keiwa-app-pro\src\pages\recette\recette.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_saverecette_saverecette__["a" /* SaverecetteProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RecettePage);
    return RecettePage;
}());

//# sourceMappingURL=recette.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


var WelcomePage = (function () {
    function WelcomePage(navCtrl, navParams, nativePageTransitions) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativePageTransitions = nativePageTransitions;
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePage');
    };
    WelcomePage.prototype.goToLoginPage = function () {
        var animationsOptions = {
            animation: 'ios-transition',
            duration: 300
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */], {}, animationsOptions);
    };
    WelcomePage.prototype.goToRegisterPage = function () {
        var animationsOptions = {
            animation: 'ios-transition',
            duration: 300
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */], {}, animationsOptions);
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"D:\Terrence\app\ionic\keiwa\version interface design\24-03-2018\keiwa-app-pro\src\pages\welcome\welcome.html"*/'<!--\n\n  Generated template for the WelcomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content>\n\n\n\n    <div class="welcomePage sliderOverflow">\n\n        <div class="headerWelcomePage" padding>\n\n            <div class="welcome_page_header">\n\n                <a class="pull-right-style fontSizeText" (click)="goToLoginPage()">Connexion</a>\n\n                <ion-icon ios="ios-close" class="fontSizeIcon" md="ios-close-outline"></ion-icon>\n\n            </div>\n\n            <div class="textHeader">\n\n                <h1>Bienvenue sur keiwa</h1>\n\n            </div>\n\n        </div>\n\n        <div class="bodyWelcomePage">\n\n            <div class="step" padding>\n\n                <img src="assets/imgs/img-first-page.png" style="width:200px;" />\n\n                <h1>Gérez facilement votre comptabilité</h1>\n\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text.</p>\n\n\n\n                <button class="btn-default-keiwa background-default" style="width:220px;height:45px;" (click)="goToRegisterPage()">C\'est parti !</button>\n\n            </div>\n\n            <hr>\n\n        </div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\Terrence\app\ionic\keiwa\version interface design\24-03-2018\keiwa-app-pro\src\pages\welcome\welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/configuration/configuration.module": [
		296,
		7
	],
	"../pages/credit/credit.module": [
		297,
		6
	],
	"../pages/depense/depense.module": [
		298,
		5
	],
	"../pages/login/login.module": [
		299,
		4
	],
	"../pages/opportunite/opportunite.module": [
		300,
		3
	],
	"../pages/recette/recette.module": [
		301,
		2
	],
	"../pages/register/register.module": [
		302,
		1
	],
	"../pages/welcome/welcome.module": [
		303,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 165;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.segment = "exploitation";
        this.gender = "du jour";
    }
    AboutPage.prototype.ionViewDidLoad = function () {
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"D:\Terrence\app\ionic\keiwa\version interface design\24-03-2018\keiwa-app-pro\src\pages\about\about.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n\n\n        <ion-buttons left>\n\n            <button ion-button icon-only menuToggle>\n\n            <ion-icon name="menu"  ></ion-icon>\n\n          </button>\n\n\n\n        </ion-buttons>\n\n        <ion-title>\n\n\n\n            Rapport\n\n        </ion-title>\n\n\n\n        <ion-buttons end>\n\n            \n\n    \n\n         \n\n        </ion-buttons>\n\n\n\n    </ion-navbar>\n\n    <ion-toolbar color="primary">\n\n        <ion-segment [(ngModel)]="segment" color="blanc" style=" font-family:\'OpenSans-Semibold\'; font-weight:bold; ">\n\n            <ion-segment-button value="exploitation">\n\n             <span style="font-weight:bold">mon point</span>\n\n            </ion-segment-button>\n\n            <ion-segment-button value="ratio">\n\n             <span style="  font-weight:bold">indicateur</span>\n\n            </ion-segment-button>\n\n\n\n\n\n        </ion-segment>\n\n\n\n\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content >\n\n\n\n    <div [ngSwitch]="segment">\n\n\n\n        <div *ngSwitchCase="\'exploitation\'">\n\n\n\n\n\n            <ion-item  style=" background-color:#eaeff5; " >\n\n                <ion-label style="color:#8ba0b0; font-family:\'OpenSans-Light\';  " >votre point </ion-label>\n\n                <ion-select style="color:#8ba0b0;" [(ngModel)]="gender">\n\n                    <ion-option value="du jour" style="color:#8ba0b0; font-family:\'OpenSans-Light\'; " >du jour</ion-option>\n\n                    <ion-option value="de la semaine" style="color:#8ba0b0; font-family:\'OpenSans-Light\'; " >de la semaine</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n\n\n          \n\n\n\n           \n\n\n\n            <ion-list >\n\n                <ion-item  style=" border-bottom: solid 1px #eaeff5; " >\n\n                  <ion-avatar item-start>\n\n                    <img src="assets/imgs/icons8-pièces-de-monnaie-48.png"  class="img_items" >\n\n                  </ion-avatar>\n\n                  <h2 class="title_rapport" >Mes recettes</h2>\n\n                  <p class="desc_rapport" >Mes ventes du jours...</p>\n\n                  <span  class="montant_rapport opt_recette" > 2500 FCFA </span>\n\n                </ion-item> \n\n\n\n                <ion-item  style=" border-bottom: solid 1px #eaeff5; " >\n\n                    <ion-avatar item-start>\n\n                      <img src="assets/imgs/icons8-argent-liquide-en-main-48.png"  class="img_items" >\n\n                    </ion-avatar>\n\n                    <h2  class="title_rapport" >Mes dépenses</h2>\n\n                    <p class="desc_rapport" >Mes dépenses du jours...</p>\n\n                    <span  class="montant_rapport opt_depense"  > 2500 FCFA </span>\n\n                  </ion-item>\n\n\n\n                  <ion-item  >\n\n                    <ion-avatar item-start>\n\n                      <img src="assets/imgs/especes-monnaie-portefeuille-icone-4444-128.png"  class="img_items" >\n\n                    </ion-avatar>\n\n                    <h2 class="title_rapport" >Mes résultats</h2>\n\n                    <p class="desc_rapport" >Mon résultat du jours...</p>\n\n                    <span  class="montant_rapport opt_resultat" > 2500 FCFA </span>\n\n                  </ion-item>\n\n\n\n               \n\n\n\n                 \n\n\n\n                 \n\n                   \n\n\n\n              </ion-list>\n\n\n\n              <ion-item  style=" background-color:#eaeff5; margin-top:-8px;  " >\n\n                <ion-label style="color:#8ba0b0; font-family:\'OpenSans-Light\'; color:#8ba0b0; " >Mes crédits </ion-label>\n\n                <ion-select style="color:#8ba0b0;" [(ngModel)]="gender">\n\n                    <ion-option value="du jour" style="color:#8ba0b0; font-family:\'OpenSans-Light\'; " >du jour</ion-option>\n\n                    <ion-option value="de la semaine" style="color:#8ba0b0; font-family:\'OpenSans-Light\'; " >de la semaine</ion-option>\n\n                </ion-select>\n\n            </ion-item> \n\n\n\n            \n\n            \n\n           <ion-list >\n\n               \n\n\n\n                <ion-item  style=" border-bottom: solid 1px #eaeff5; " >\n\n                    <ion-avatar item-start>\n\n                      <img src="assets/imgs/icons8-sac-d\'argent-80.png" class="img_items" >\n\n                    </ion-avatar>\n\n                    <h2 class="title_rapport" >Mes créances</h2>\n\n                    <p class="desc_rapport" >Mes dépenses du jours...</p>\n\n                    <span  class="montant_rapport" style=" border:solid 1px #ad4e08; color:#fff; background-color:#ad4e08; " > 2500 FCFA </span>\n\n                  </ion-item>\n\n                  \n\n                  <ion-item  >\n\n                    <ion-avatar item-start>\n\n                      <img src="assets/imgs/icons8-tirelire-64.png"  class="img_items" >\n\n                    </ion-avatar>\n\n                    <h2 class="title_rapport" >Mes dettes</h2>\n\n                    <p class="desc_rapport" >Mon résultat du jours...</p>\n\n                    <span  class="montant_rapport" style="border:solid 1px #7e7e7e; color:#fff; background:#7e7e7e; " > 2500 FCFA </span>\n\n                  </ion-item>\n\n\n\n               \n\n\n\n                 \n\n\n\n                 \n\n                   \n\n\n\n              </ion-list>\n\n\n\n              <ion-item  style=" background-color:#eaeff5; " >\n\n                <ion-label style="color:#8ba0b0; font-family:\'OpenSans-Light\'; color:#8ba0b0; " >Ma trésorerie </ion-label>\n\n                <ion-select style="color:#8ba0b0;" [(ngModel)]="gender">\n\n                    <ion-option value="du jour" style="color:#8ba0b0; font-family:\'OpenSans-Light\'; " >du jour</ion-option>\n\n                    <ion-option value="de la semaine" style="color:#8ba0b0; font-family:\'OpenSans-Light\'; " >de la semaine</ion-option>\n\n                </ion-select>\n\n            </ion-item> \n\n\n\n            <ion-list >\n\n\n\n                    <ion-item  style=" border-bottom: solid 1px #eaeff5; " >\n\n                            <ion-avatar item-start>\n\n                              <img src="assets/imgs/icons8-coffre-au-trésor-80.png"  style=" padding:2px; background-color:#eaeff5; width:45px; height:45px;  " >\n\n                            </ion-avatar>\n\n                            <h2 class="title_rapport" >Ma caisse </h2>\n\n                            <p class="desc_rapport" >Mes dépenses du jours...</p>\n\n                            <span  class="montant_rapport opt_caisse"  > 2500 FCFA </span>\n\n                          </ion-item>\n\n\n\n                <ion-item  style=" border-bottom: solid 1px #eaeff5; " >\n\n                  <ion-avatar item-start>\n\n                    <img  class="img_items" src="assets/imgs/icons8-musée-48.png"   >\n\n                  </ion-avatar>\n\n                  <h2 class="title_rapport" >Ma  banque</h2>\n\n                  <p class="desc_rapport" >Mes ventes du jours...</p>\n\n                  <span  class="montant_rapport opt_banque" > 2500 FCFA </span>\n\n                </ion-item> \n\n\n\n               \n\n\n\n                  <ion-item  >\n\n                    <ion-avatar item-start>\n\n                      <img src="assets/imgs/icons8-paiement-mobile-64.png"  style=" padding:2px; background-color:#eaeff5; width:45px; height:45px;  " >\n\n                    </ion-avatar>\n\n                    <h2 class="title_rapport" >Mon wallet</h2>\n\n                    <p class="desc_rapport" >Mon résultat du jours...</p>\n\n                    <span  class="montant_rapport opt_wallet"  > 2500 FCFA </span>\n\n                  </ion-item>\n\n\n\n               \n\n\n\n                 \n\n\n\n                 \n\n                   \n\n\n\n              </ion-list>\n\n\n\n\n\n\n\n\n\n\n\n        </div>\n\n\n\n        <div *ngSwitchCase="\'ratio\'">\n\n\n\n\n\n\n\n            <div id="chart" padding>\n\n\n\n                <h4 style="font-size:18px; color:#444; margin-top:-20px; font-family:\'OpenSans-Regular\'; color:#8ba0b0; "> Evolution du chiffre d\'affaire </h4>\n\n\n\n\n\n                <ul class="bars">\n\n                    <li>\n\n                        <div data-height="20" class="bar" style="height: 20%;">\n\n                            <div class="per">20</div>\n\n                        </div> <span>J</span> </li>\n\n                    <li>\n\n                        <div data-height="30" class="bar" style="height: 30%;">\n\n                            <div class="per">30</div>\n\n                        </div> <span>F</span> </li>\n\n                    <li>\n\n                        <div data-height="40" class="bar" style="height: 40%;">\n\n                            <div class="per">40</div>\n\n                        </div> <span>M</span> </li>\n\n                    <li>\n\n                        <div data-height="50" class="bar" style="height: 50%;">\n\n                            <div class="per">50</div>\n\n                        </div> <span>A</span> </li>\n\n                    <li>\n\n                        <div data-height="60" class="bar" style="height: 60%;">\n\n                            <div class="per">60</div>\n\n                        </div> <span>M</span> </li>\n\n                    <li>\n\n                        <div data-height="70" class="bar" style="height: 70%;">\n\n                            <div class="per">70</div>\n\n                        </div> <span>J</span> </li>\n\n                    <li>\n\n                        <div data-height="80" class="bar" style="height:80%;">\n\n                            <div class="per">80</div>\n\n                        </div> <span>J</span> </li>\n\n                    <li>\n\n                        <div data-height="90" class="bar" style="height: 90%;">\n\n                            <div class="per">90</div>\n\n                        </div> <span>A</span> </li>\n\n                </ul>\n\n\n\n\n\n\n\n\n\n\n\n            </div>\n\n\n\n            <div style=" margin-top:30px; "  padding>\n\n\n\n                <h4 style="font-size:16px; font-family: \'OpenSans-Regular\'; color:#8ba0b0; ">Mes réserves sur les charges périodiques </h4>\n\n\n\n                <div style="position:relative;">\n\n\n\n                    <p style=" font-family: \'OpenSans-Light\'; margin-top:5px; padding:10px 15px; background-color:#f4f7f8; "> <span style="font-size:16px; color:#8ba0b0;">  Electricité : </span> <span style="position:absolute; right:20px; font-size:16px; color:#8ba0b0; ">  10000 Fcfa </span> </p>\n\n\n\n                </div>\n\n\n\n                <div style="position:relative;">\n\n\n\n                    <p style=" font-family: \'OpenSans-Light\'; margin-top:5px; padding:10px 15px; background-color:#f4f7f8; "> <span style="font-size:16px; color:#8ba0b0; ">   Loyer : </span> <span style="position:absolute; right:20px; font-size:16px; color:#8ba0b0; ">  10000 Fcfa </span> </p>\n\n\n\n                </div>\n\n\n\n                <div style="position:relative;">\n\n\n\n                    <p style=" font-family: \'OpenSans-Light\'; margin-top:5px; padding:10px 15px; background-color:#f4f7f8; "> <span style="font-size:16px; color:#8ba0b0; ">   Internet : </span> <span style="position:absolute; right:20px; font-size:16px; color:#8ba0b0; ">  10000 Fcfa  </span> </p>\n\n\n\n                </div>\n\n\n\n            </div>\n\n\n\n            <div style=" margin-top:0px; " padding >\n\n\n\n                <h4 style="font-size:16px; font-family: \'OpenSans-Regular\'; color:#8ba0b0; ">Mes réserves sur mon capital </h4>\n\n\n\n                <div style="position:relative;">\n\n\n\n                    <p style=" font-family: \'OpenSans-Light\'; margin-top:5px; padding:10px 15px; background-color:#f4f7f8; "> <span style="font-size:16px; color:#8ba0b0; ">   Charge annuel: </span> <span style="position:absolute; right:20px; font-size:16px; color:#8ba0b0; ">  10000 Fcfa  </span> </p>\n\n\n\n                </div>\n\n\n\n\n\n\n\n\n\n            </div>\n\n\n\n\n\n\n\n        </div>\n\n\n\n\n\n    </div>\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Terrence\app\ionic\keiwa\version interface design\24-03-2018\keiwa-app-pro\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.segment = "Caisse";
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"D:\Terrence\app\ionic\keiwa\version interface design\24-03-2018\keiwa-app-pro\src\pages\contact\contact.html"*/'<ion-header>\n\n    <ion-toolbar color="primary">\n\n\n\n        <ion-buttons left>\n\n            <button ion-button icon-only menuToggle>\n\n            <ion-icon name="menu"  ></ion-icon>\n\n          </button>\n\n\n\n        </ion-buttons>\n\n        <ion-title>\n\n\n\n            Paiement\n\n        </ion-title>\n\n\n\n    </ion-toolbar>\n\n    <ion-toolbar color="primary">\n\n        <ion-segment [(ngModel)]="segment" color="blanc" style=" font-family:\'OpenSans-Semibold\'; font-weight:bold; ">\n\n            <ion-segment-button value="Caisse">\n\n                <img src="assets/imgs/compte.png" style="width:20px;" alt=""> <br> <span style="font-size: 9px;      position: absolute; top: 11px; left: 60px">mes comptes</span>\n\n            </ion-segment-button>\n\n            <ion-segment-button value="Banque">\n\n                <img src="assets/imgs/operation.png" style="width:20px;" alt=""> <br> <span style="font-size: 9px;      position: absolute; top: 11px; left: 60px">mes opérations</span>\n\n\n\n            </ion-segment-button>\n\n\n\n\n\n        </ion-segment>\n\n\n\n\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <div [ngSwitch]="segment">\n\n\n\n        <div *ngSwitchCase="\'Caisse\'">\n\n\n\n\n\n            <div class="main">\n\n                <h4 style="margin-left:20px; font-family:\'OpenSans-Light\';">Shopping cart</h4>\n\n\n\n\n\n                <ion-list>\n\n                        <ion-item>\n\n                          <ion-avatar item-start>\n\n                            <img src="assets/imgs/kak-sozdat-elektronnij-koshelek.jpg">\n\n                          </ion-avatar>\n\n                          <h2>Cher</h2>\n\n                          <p>Ugh. As if.</p>\n\n                        </ion-item>\n\n                      </ion-list>\n\n\n\n\n\n                \n\n            </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n        </div>\n\n\n\n        <div *ngSwitchCase="\'Banque\'">\n\n\n\n\n\n\n\n\n\n        </div>\n\n\n\n\n\n\n\n\n\n    </div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Terrence\app\ionic\keiwa\version interface design\24-03-2018\keiwa-app-pro\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recette_recette__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__depense_depense__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__credit_credit__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_saverecette_saverecette__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_text_to_speech__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(navCtrl, saverecet, alertCtrl, tts, modal) {
        this.navCtrl = navCtrl;
        this.saverecet = saverecet;
        this.alertCtrl = alertCtrl;
        this.tts = tts;
        this.modal = modal;
        this.segment = "Recette";
        this.mois = "Decembre";
        this.im_pop = "<img class='redim_img_pop' width='30'   src='assets/imgs/apple-1.png' alt=''>";
    }
    HomePage.prototype.openRecette = function () {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_2__recette_recette__["a" /* RecettePage */]);
        modal.present();
    };
    HomePage.prototype.openDepense = function () {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_3__depense_depense__["a" /* DepensePage */]);
        modal.present();
    };
    HomePage.prototype.openCredit = function () {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_4__credit_credit__["a" /* CreditPage */]);
        modal.present();
    };
    HomePage.prototype.presentConfirm = function () {
        var alert = this.alertCtrl.create({
            title: this.im_pop + " tomate fraiche",
            message: "<div style='margin-top:-20px' >\n      <p> Prix unitaire: 3000Fcfa     </p>\n      <p> Quantit\u00E9: 12     </p>\n      <p> date : 22-01-2015    </p>\n      <p> Payer a credit  </p>\n       </div>\n      ",
            cssClass: 'mypop',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Buy',
                    handler: function () {
                        console.log('Buy clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.speak = function () {
        this.tts.speak({
            text: "bienvenu sur keiwaPro, pour enregistrer une recette, cliquez sur le crayon, et pour enregistrer une depense, cliquez sur la main, en haut, a gauche",
            locale: "fr-FR"
        })
            .then(function () { return console.log('Success'); })
            .catch(function (reason) { return console.log(reason); });
    };
    HomePage.prototype.speakRecette = function () {
        this.tts.speak({
            text: "vous êtes dans l'onglet depense, pour enregistrer une depense, cliquez sur le crayon, et pour enregistrer une recette, cliquez sur le cahier, en haut, a droite",
            locale: "fr-FR"
        })
            .then(function () { return console.log('Success'); })
            .catch(function (reason) { return console.log(reason); });
    };
    HomePage.prototype.indextab = function (val) {
        for (var i = 0; i < this.saverecet.dataRecette.length; i++) {
            if (this.saverecet.dataRecette[i].montantrecette == val) {
                break;
            }
        }
        return i;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Terrence\app\ionic\keiwa\version interface design\24-03-2018\keiwa-app-pro\src\pages\home\home.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n\n\n        <ion-buttons left>\n\n            <button ion-button icon-only menuToggle>\n\n            <ion-icon name="menu"  ></ion-icon>\n\n          </button>\n\n\n\n        </ion-buttons>\n\n        <ion-title>\n\n\n\n            Journal\n\n        </ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button icon-only>\n\n                <ion-icon name="search"></ion-icon>\n\n              </button> \n\n    \n\n          <button ion-button  icon-only>\n\n            <ion-icon name="more"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n\n\n    </ion-navbar>\n\n    <ion-toolbar color="primary">\n\n        <ion-segment [(ngModel)]="segment" color="blanc" style=" font-family:\'OpenSans-Light\'; font-weight:bold; ">\n\n            <ion-segment-button value="Recette">\n\n                <span style=" font-weight:bold; " >   recette </span>\n\n            </ion-segment-button>\n\n            <ion-segment-button value="Depense">\n\n                <span style=" font-weight:bold; " > depense </span>\n\n            </ion-segment-button>\n\n\n\n            <ion-segment-button value="credit">\n\n               <span style=" font-weight:bold; " > credit </span> \n\n            </ion-segment-button>\n\n\n\n        </ion-segment>\n\n\n\n\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <div [ngSwitch]="segment">\n\n\n\n        <div *ngSwitchCase="\'Recette\'">\n\n\n\n            <div class=" banner_home " >\n\n                <span style="position: absolute; top: 10px; left:10px; z-index:100; "> <ion-icon style="  font-size: 35px " color="primary" name="ios-arrow-dropleft-circle"></ion-icon> </span>\n\n\n\n\n\n                <ion-list style=" margin-bottom:1px; width:100%; margin-left:-120px; ">\n\n                    <ion-item>\n\n                        <ion-label style="font-size:16px; text-align:center; color:#888; font-family:\'OpenSans-Semibold\'; "> </ion-label>\n\n                        <ion-select style=" color:#666; font-family:\'OpenSans-Semibold\';" [(ngModel)]="mois" placeholder="Decembre">\n\n                            <ion-option value="Decembre">Decembre</ion-option>\n\n                            <ion-option value="Janvier">Janvier</ion-option>\n\n                            <ion-option value="Fevrier">Fevrier</ion-option>\n\n                            <ion-option value="Mars">Mars</ion-option>\n\n                            <ion-option value="Avrile">Avrile</ion-option>\n\n                            <ion-option value="Mai">Mai</ion-option>\n\n                            <ion-option value="Juin">Juin</ion-option>\n\n                        </ion-select>\n\n                    </ion-item>\n\n                </ion-list>\n\n\n\n\n\n                <span style="position: absolute; top: 10px;  right:10px;"> <ion-icon style=" font-size: 35px; " color="primary" name="ios-arrow-dropright-circle"></ion-icon> </span>\n\n\n\n            </div>\n\n\n\n            <div class="messages_section dragscroll">\n\n                <div class="single_chat">\n\n                    <div class="image_container">\n\n                        <img src="assets/imgs/apple-1.png" alt="" srcset="">\n\n                    </div>\n\n                    <div class="content_container"  (click)="presentConfirm()" >\n\n                    <div class="content_container_inner">\n\n                        <p class="user_name" >\n\n                            <span style="color:#666; " >  Legumes </span>  <span class="more_info" > <ion-icon name="more"></ion-icon> </span> \n\n\n\n                        </p>\n\n                        <p class="chat_content" style=" margin-top:-10px; " > ventes de tomate fraiches ... <span> 3 </span> </p>\n\n\n\n                    </div>\n\n                    </div>\n\n\n\n                </div>\n\n\n\n                <div class="single_chat">\n\n                        <div class="image_container">\n\n                            <img src="assets/imgs/corn.png" alt="" srcset="">\n\n                        </div>\n\n                        <div class="content_container">\n\n                        <div class="content_container_inner">\n\n                            <p class="user_name" >\n\n                                <span style="color:#666; " >  Legumes </span>  <span class="more_info" > <ion-icon name="more"></ion-icon> </span> \n\n    \n\n                            </p>\n\n                            <p class="chat_content" style=" margin-top:-10px; " > ventes de tomate fraiches ... <span> 3 </span> </p>\n\n    \n\n                        </div>\n\n                        </div>\n\n    \n\n                    </div>\n\n\n\n                    <div class="single_chat">\n\n                            <div class="image_container">\n\n                                <img src="assets/imgs/cabbage.png" alt="" srcset="">\n\n                            </div>\n\n                            <div class="content_container">\n\n                            <div class="content_container_inner">\n\n                                <p class="user_name" >\n\n                                    <span style="color:#666; " >  Legumes </span>  <span class="more_info" > <ion-icon name="more"></ion-icon> </span> \n\n        \n\n                                </p>\n\n                                <p class="chat_content" style=" margin-top:-10px; " > ventes de tomate fraiches ... <span> 3 </span> </p>\n\n        \n\n                            </div>\n\n                            </div>\n\n        \n\n                        </div>\n\n\n\n                        <div class="single_chat">\n\n                                <div class="image_container">\n\n                                    <img src="assets/imgs/carrot.png" alt="" srcset="">\n\n                                </div>\n\n                                <div class="content_container">\n\n                                <div class="content_container_inner">\n\n                                    <p class="user_name" >\n\n                                        <span style="color:#666; " >  Legumes </span>  <span class="more_info" > <ion-icon name="more"></ion-icon> </span> \n\n            \n\n                                    </p>\n\n                                    <p class="chat_content" style=" margin-top:-10px; " > ventes de tomate fraiches ... <span> 3 </span> </p>\n\n            \n\n                                </div>\n\n                                </div>\n\n            \n\n                            </div>\n\n                            <div class="single_chat">\n\n                                    <div class="image_container">\n\n                                        <img src="assets/imgs/pear.png" alt="" srcset="">\n\n                                    </div>\n\n                                    <div class="content_container">\n\n                                    <div class="content_container_inner">\n\n                                        <p class="user_name" >\n\n                                            <span style="color:#666; " >  Legumes </span>  <span class="more_info" > <ion-icon name="more"></ion-icon> </span> \n\n                \n\n                                        </p>\n\n                                        <p class="chat_content" style=" margin-top:-10px; " > ventes de tomate fraiches ... <span> 3 </span> </p>\n\n                \n\n                                    </div>\n\n                                    </div>\n\n                \n\n                                </div>  \n\n\n\n                                <div class="single_chat">\n\n                                        <div class="image_container">\n\n                                            <img src="assets/imgs/orange.png" alt="" srcset="">\n\n                                        </div>\n\n                                        <div class="content_container">\n\n                                        <div class="content_container_inner">\n\n                                            <p class="user_name" >\n\n                                                <span style="color:#666; " >  Legumes </span>  <span class="more_info" > <ion-icon name="more"></ion-icon> </span> \n\n                    \n\n                                            </p>\n\n                                            <p class="chat_content" style=" margin-top:-10px; " > ventes de tomate fraiches ... <span> 3 </span> </p>\n\n                    \n\n                                        </div>\n\n                                        </div>\n\n                    \n\n                                    </div>\n\n            </div>\n\n\n\n\n\n           \n\n\n\n          \n\n\n\n           \n\n\n\n            \n\n\n\n           \n\n\n\n            \n\n\n\n            \n\n\n\n            <ion-fab right bottom fixed style="position:fixed; bottom:70px;">\n\n                <button ion-fab color="primary"><ion-icon name="add"></ion-icon></button>\n\n                <ion-fab-list side="top">\n\n                    <button color="secondary" (click)="openRecette()" ion-fab><ion-icon name="create"></ion-icon></button>\n\n                    <button color="danger" (click)="speakRecette()" ion-fab><img src="assets/imgs/vocale.png" style="width:20px;" alt=""></button>\n\n\n\n\n\n                </ion-fab-list>\n\n            </ion-fab>\n\n        </div>\n\n\n\n        <div *ngSwitchCase="\'Depense\'">\n\n\n\n\n\n            <div class=" banner_home " >\n\n                <span style="position: absolute; top: 10px; left:10px; z-index:100; "> <ion-icon style="  font-size: 35px " color="danger" name="ios-arrow-dropleft-circle"></ion-icon> </span>\n\n\n\n\n\n                <ion-list style=" margin-bottom:1px; width:100%; margin-left:-120px; ">\n\n                    <ion-item>\n\n                        <ion-label style="font-size:16px; text-align:center; color:#888; font-family:\'OpenSans-Semibold\'; "> </ion-label>\n\n                        <ion-select style=" color:#666; font-family:\'OpenSans-Semibold\';" [(ngModel)]="mois" placeholder="Decembre">\n\n                            <ion-option value="Janvier">Janvier</ion-option>\n\n                            <ion-option value="Fevrier">Fevrier</ion-option>\n\n                            <ion-option value="Mars">Mars</ion-option>\n\n                            <ion-option value="Avrile">Avrile</ion-option>\n\n                            <ion-option value="Mai">Mai</ion-option>\n\n                            <ion-option value="Juin">Juin</ion-option>\n\n                        </ion-select>\n\n                    </ion-item>\n\n                </ion-list>\n\n\n\n\n\n                <span style="position: absolute; top: 10px;  right:10px;"> <ion-icon style=" font-size: 35px; " color="danger" name="ios-arrow-dropright-circle"></ion-icon> </span>\n\n\n\n            </div>\n\n\n\n\n\n           \n\n\n\n            \n\n\n\n          \n\n\n\n\n\n           \n\n\n\n          \n\n\n\n            <ion-fab right bottom fixed style="position:fixed; bottom:70px;">\n\n                <button ion-fab color="danger"><ion-icon name="add"></ion-icon></button>\n\n                <ion-fab-list side="top">\n\n                    <button color="secondary" (click)="openDepense()" ion-fab><ion-icon name="create"></ion-icon></button>\n\n                    <button color="danger" (click)="speakRecette()" ion-fab><ion-icon name="megaphone"></ion-icon></button>\n\n\n\n\n\n                </ion-fab-list>\n\n            </ion-fab>\n\n\n\n\n\n        </div>\n\n\n\n\n\n\n\n\n\n\n\n        <div *ngSwitchCase="\'credit\'" >\n\n\n\n\n\n\n\n          <!--  <div class="form-style-5">\n\n                <form>\n\n                    <fieldset>\n\n\n\n                        <label for="field1">Date *</label>\n\n                        <input type="date" class="form-control" required="required" name="daterecette" placeholder="Date *">\n\n\n\n                        <input type="text" class="form-control" required="required" name="libelerecette" placeholder="libellés *">\n\n\n\n                        <select id="job" class="form-control" required="required" name="category">\n\n\n\n                  <optgroup label="Catégorie">\n\n\n\n                      <option value="journalier">catégory</option>\n\n                    \n\n                    <option value="journalier">client</option>\n\n                    \n\n                    <option value="hebdomadaire">fournisseur</option>\n\n                   \n\n                    \n\n                  </optgroup>\n\n                  </select>\n\n\n\n                        <label for="field1">date de remboursement *</label>\n\n                        <input type="date" class="form-control" required="required" name="daterecette" placeholder="Date *">\n\n\n\n\n\n                        <input type="text" class="form-control" required="required" name="montantrecette" placeholder="Montant *">\n\n                    </fieldset>\n\n                    <fieldset>\n\n\n\n\n\n                    </fieldset>\n\n                    <input type="submit" value="Valider" />\n\n                </form>\n\n\n\n\n\n            </div>\n\n\n\n        -->\n\n        <div class="banner_home">\n\n            <span style="position: absolute; top: 10px; left:10px; z-index:100; "> <ion-icon style="  font-size: 35px; color:#fbad03; " name="ios-arrow-dropleft-circle"></ion-icon> </span>\n\n\n\n\n\n            <ion-list style=" margin-bottom:1px; width:100%; margin-left:-120px; ">\n\n                <ion-item>\n\n                    <ion-label style="font-size:16px; text-align:center; color:#888; font-family:\'OpenSans-Semibold\'; "> </ion-label>\n\n                    <ion-select style=" color:#666; font-family:\'OpenSans-Semibold\';" [(ngModel)]="mois" placeholder="Decembre">\n\n                        <ion-option value="Janvier">Janvier</ion-option>\n\n                        <ion-option value="Fevrier">Fevrier</ion-option>\n\n                        <ion-option value="Mars">Mars</ion-option>\n\n                        <ion-option value="Avrile">Avrile</ion-option>\n\n                        <ion-option value="Mai">Mai</ion-option>\n\n                        <ion-option value="Juin">Juin</ion-option>\n\n                    </ion-select>\n\n                </ion-item>\n\n            </ion-list>\n\n\n\n\n\n            <span style="position: absolute; top: 10px;  right:10px;"> <ion-icon style=" font-size: 35px; color:#fbad03; "  name="ios-arrow-dropright-circle"></ion-icon> </span>\n\n\n\n        </div>\n\n\n\n\n\n      \n\n\n\n\n\n        \n\n\n\n       \n\n\n\n      \n\n\n\n       \n\n\n\n       \n\n\n\n        <div *ngIf="saverecet.dataRecette!=undefined">\n\n            <div *ngFor=\'let recette of saverecet.dataRecette \' style="width:100%;">\n\n                <div style="width:60%;  float:left; background:#f7f7f9; padding:15px 15px; "> <span style=" font-size:16px; color:#666; font-family:\'OpenSans-Regular\'; ">{{recette.libelerecette}}</span> <br> <span style=" font-size:12px; color:#aaa; display: block;  margin-top: 5px; font-family:\'OpenSans-Regular\'; font-family:\'OpenSans-Regular\'; "> 22-02-12 10:25:36 </span>                        </div>\n\n                <div style="width:40%;  float:right;  text-align:right; background:#f7f7f9; padding:15px 15px;  "> <span style=" font-size:16px; color:#fbad03; font-family:\'OpenSans-Regular\'; ">{{recette.montantrecette}}Fcfa</span> <br> <span style=" font-size:12px; color:#aaa; display: block;  margin-top: 5px; font-family:\'OpenSans-Regular\'; font-family:\'OpenSans-Regular\'; "> catégory </span>                        </div>\n\n\n\n            </div>\n\n        </div>\n\n\n\n        <ion-fab right bottom fixed style="position:fixed; bottom:70px;">\n\n            <button ion-fab style="background-color:#fbad03; "><ion-icon name="add"></ion-icon></button>\n\n            <ion-fab-list side="top">\n\n                <button color="secondary" (click)="openCredit()" ion-fab><ion-icon name="create"></ion-icon></button>\n\n                <button color="danger" (click)="speakRecette()" ion-fab><ion-icon name="megaphone"></ion-icon></button>\n\n\n\n\n\n            </ion-fab-list>\n\n        </ion-fab>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n        </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    </div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Terrence\app\ionic\keiwa\version interface design\24-03-2018\keiwa-app-pro\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_saverecette_saverecette__["a" /* SaverecetteProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_text_to_speech__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_web_animations_js_web_animations_min__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_web_animations_js_web_animations_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_web_animations_js_web_animations_min__);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_text_to_speech__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_about__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_opportunite_opportunite__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_recette_recette__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_depense_depense__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_configuration_configuration__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_credit_credit__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_tabs_tabs__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_welcome_welcome__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_login_login__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_register_register__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_saverecette_saverecette__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















/**Page add by Terrence kondou */






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_19__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_opportunite_opportunite__["a" /* OpportunitePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_recette_recette__["a" /* RecettePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_depense_depense__["a" /* DepensePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_credit_credit__["a" /* CreditPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_configuration_configuration__["a" /* ConfigurationPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/configuration/configuration.module#ConfigurationPageModule', name: 'ConfigurationPage', segment: 'configuration', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/credit/credit.module#CreditPageModule', name: 'CreditPage', segment: 'credit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/depense/depense.module#DepensePageModule', name: 'DepensePage', segment: 'depense', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/opportunite/opportunite.module#OpportunitePageModule', name: 'OpportunitePage', segment: 'opportunite', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recette/recette.module#RecettePageModule', name: 'RecettePage', segment: 'recette', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_19__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_opportunite_opportunite__["a" /* OpportunitePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_recette_recette__["a" /* RecettePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_depense_depense__["a" /* DepensePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_credit_credit__["a" /* CreditPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_configuration_configuration__["a" /* ConfigurationPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_text_to_speech__["a" /* TextToSpeech */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_24__providers_saverecette_saverecette__["a" /* SaverecetteProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // set status bar to white
            statusBar.backgroundColorByHexString('#036e2b');
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Terrence\app\ionic\keiwa\version interface design\24-03-2018\keiwa-app-pro\src\app\app.html"*/'<ion-menu [content]="content" style="  ">\n\n\n\n    <ion-header>\n\n        <ion-toolbar color="primary">\n\n            <ion-title>Keiwa Pro</ion-title>\n\n        </ion-toolbar>\n\n    </ion-header>\n\n    <ion-content>\n\n\n\n        <div id="mySidenav" class="sidenav" style="margin-top:20px;">\n\n                \n\n            <a href="#">\n\n                        <ion-icon class="icon_side_bar" name="ionitron"></ion-icon>Module supplémentaire\n\n            </a>\n\n\n\n            <a href="#">\n\n                    <ion-icon class="icon_side_bar" name="settings"></ion-icon>Paramètre\n\n            </a>\n\n\n\n           \n\n            <a href="#">\n\n                <ion-icon class="icon_side_bar" name="ios-school"></ion-icon>Formations\n\n            </a>\n\n            <a href="#">\n\n                <ion-icon class="icon_side_bar" name="share"></ion-icon>Invitez des amis</a>\n\n            \n\n           \n\n            <a href="#">\n\n                <ion-icon class="icon_side_bar" name="ios-chatbubbles"></ion-icon>Boite à suggestion\n\n            </a>\n\n\n\n            <a href="#">\n\n                <ion-icon class="icon_side_bar" name="md-log-in"></ion-icon>Déconnection \n\n            </a>\n\n        </div>\n\n    </ion-content>\n\n\n\n</ion-menu>\n\n\n\n\n\n\n\n\n\n\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\Terrence\app\ionic\keiwa\version interface design\24-03-2018\keiwa-app-pro\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__opportunite_opportunite__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__opportunite_opportunite__["a" /* OpportunitePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Terrence\app\ionic\keiwa\version interface design\24-03-2018\keiwa-app-pro\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n    <ion-tab [root]="tab1Root" tabTitle="Journal" tabIcon="ios-paper"></ion-tab>\n\n    <ion-tab [root]="tab2Root" tabTitle="Rapport" tabIcon="speedometer"></ion-tab>\n\n    <ion-tab [root]="tab3Root" tabTitle="Paiement" tabIcon="ios-cash"></ion-tab>\n\n    <ion-tab [root]="tab4Root" tabTitle="opportunité" tabIcon="cart"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"D:\Terrence\app\ionic\keiwa\version interface design\24-03-2018\keiwa-app-pro\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configuration_configuration__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, nativePageTransitions) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativePageTransitions = nativePageTransitions;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.goToSlide = function (numberslide) {
        this.slides.slideTo(numberslide, 100);
    };
    RegisterPage.prototype.goToBack = function () {
        var animationsOptions = {
            animation: 'ios-transition',
            duration: 300
        };
        this.navCtrl.pop(animationsOptions);
    };
    RegisterPage.prototype.goPageConfiguration = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__configuration_configuration__["a" /* ConfigurationPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
    ], RegisterPage.prototype, "slides", void 0);
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"D:\Terrence\app\ionic\keiwa\version interface design\24-03-2018\keiwa-app-pro\src\pages\register\register.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n\n\n<ion-content padding>\n\n    <ion-slides pager class="swiper-no-swiping" style="height:auto;">\n\n\n\n        <ion-slide style="padding-bottom:100px">\n\n            <div padding>\n\n                <div class="register_page_header">\n\n                    <span class="badge_progression_register pull-right-style">1/4</span>\n\n                    <a (click)="goToBack()">\n\n                        <ion-icon ios="ios-close" class="fontSizeIcon" md="md-arrow-back"></ion-icon>\n\n                    </a>\n\n                </div>\n\n                <div class="register_page_title">\n\n                    <h1>Configuration de base</h1>\n\n                    <p>Indiquez votre Langue ainsi que votre monnaie. </p>\n\n                </div>\n\n                <div class="register_page_form">\n\n                    <ion-list>\n\n\n\n                        <ion-item>\n\n                            <ion-label stacked>Langue</ion-label>\n\n                            <ion-input type="text"></ion-input>\n\n                        </ion-item>\n\n\n\n                        <ion-item style="margin-top:22px;">\n\n                            <ion-label stacked>Monnaie</ion-label>\n\n                            <ion-input type="text"></ion-input>\n\n                        </ion-item>\n\n\n\n\n\n                    </ion-list>\n\n                </div>\n\n\n\n\n\n                <div class="fixed_bar_login_register">\n\n                    <button class="btn-default-keiwa background-default" (click)="goToSlide(1)" style="width:250px;height:50px;">\n\n                        Continuer\n\n                    </button>\n\n                </div>\n\n            </div>\n\n        </ion-slide>\n\n        <ion-slide style="padding-bottom:100px">\n\n            <div padding>\n\n                <div class="register_page_header">\n\n                    <span class="badge_progression_register pull-right-style">2/4</span>\n\n                    <a (click)="goToSlide(0)">\n\n                        <ion-icon ios="ios-close" class="fontSizeIcon" md="md-arrow-back"></ion-icon>\n\n                    </a>\n\n                </div>\n\n                <div class="register_page_title">\n\n                    <h1>Itentifier vous</h1>\n\n                    <p>indiquez votre nom et prénoms pour que nous vous identifions. </p>\n\n                </div>\n\n                <div class="register_page_form">\n\n                    <ion-list>\n\n\n\n                        <ion-item>\n\n                            <ion-label stacked>Nom</ion-label>\n\n                            <ion-input type="text"></ion-input>\n\n                        </ion-item>\n\n\n\n                        <ion-item style="margin-top:22px;">\n\n                            <ion-label stacked>Prenoms</ion-label>\n\n                            <ion-input type="text"></ion-input>\n\n                        </ion-item>\n\n\n\n\n\n                    </ion-list>\n\n                </div>\n\n\n\n\n\n                <div class="fixed_bar_login_register">\n\n                    <button class="btn-default-keiwa background-default" (click)="goToSlide(2)" style="width:250px;height:50px;">\n\n                        Continuer\n\n                    </button>\n\n                </div>\n\n            </div>\n\n        </ion-slide>\n\n\n\n        <ion-slide style="padding-bottom:100px">\n\n            <div padding>\n\n                <div class="register_page_header">\n\n                    <span class="badge_progression_register pull-right-style">3/4</span>\n\n                    <a (click)="goToSlide(1)">\n\n                        <ion-icon ios="ios-close" class="fontSizeIcon" md="md-arrow-back"></ion-icon>\n\n                    </a>\n\n                </div>\n\n                <div class="register_page_title">\n\n                    <h1>Indiquez votre numéro de portable</h1>\n\n                    <p>Nous allons vous envoyer un code de verification par SMS.</p>\n\n                </div>\n\n                <div class="register_page_form" style="margin-top:50px">\n\n                    <span>Téléphone</span>\n\n                    <div>\n\n                        <div class="align-middle" style="width:80px;">\n\n                            <ion-item>\n\n                                <ion-input type="text" value="+225" disabled="true"></ion-input>\n\n                            </ion-item>\n\n                        </div>\n\n                        <div class="align-middle inputTel">\n\n                            <ion-item>\n\n                                <ion-input type="tel"></ion-input>\n\n                            </ion-item>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n\n\n\n\n\n\n                <div class="fixed_bar_login_register">\n\n                    <button class="btn-default-keiwa background-default" (click)="goToSlide(3)" style="width:250px;height:50px;">\n\n                        Continuer\n\n                    </button>\n\n                </div>\n\n            </div>\n\n        </ion-slide>\n\n        <ion-slide style="padding-bottom:100px">\n\n            <div padding>\n\n                <div class="register_page_header">\n\n                    <span class="badge_progression_register pull-right-style">4/4</span>\n\n                    <a (click)="goToSlide(2)">\n\n                        <ion-icon ios="ios-close" class="fontSizeIcon" md="md-arrow-back"></ion-icon>\n\n                    </a>\n\n                </div>\n\n                <div class="register_page_title">\n\n                    <h1>Créer un mot de passe</h1>\n\n                    <p>Votre mot de passe doit comporter 8 caractères ou plus. N\'utiliszer pas un mot de passe trop commun ni de répétitions ou de séquences.\n\n                    </p>\n\n                </div>\n\n                <div class="register_page_form">\n\n                    <ion-list>\n\n\n\n                        <ion-item>\n\n                            <ion-label stacked>Mot de passe</ion-label>\n\n                            <ion-input type="text"></ion-input>\n\n                        </ion-item>\n\n                    </ion-list>\n\n                </div>\n\n\n\n\n\n\n\n                <div class="fixed_bar_login_register">\n\n\n\n                    <button (click)="goPageConfiguration()" class="btn-default-keiwa background-default" style="width:250px;height:50px;">\n\n\n\n                \n\n                        Terminer\n\n                    </button>\n\n                </div>\n\n            </div>\n\n        </ion-slide>\n\n    </ion-slides>\n\n</ion-content>'/*ion-inline-end:"D:\Terrence\app\ionic\keiwa\version interface design\24-03-2018\keiwa-app-pro\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaverecetteProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the SaverecetteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SaverecetteProvider = (function () {
    function SaverecetteProvider(http) {
        this.http = http;
        this.dataRecette = [];
        console.log('Hello SaverecetteProvider Provider');
    }
    SaverecetteProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], SaverecetteProvider);
    return SaverecetteProvider;
}());

//# sourceMappingURL=saverecette.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map