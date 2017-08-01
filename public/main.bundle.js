webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'app';
        this.authService.handleAuthentication();
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_problemdetails_service__ = __webpack_require__("../../../../../src/app/services/problemdetails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_collaboration_service__ = __webpack_require__("../../../../../src/app/services/collaboration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_editor_editor_component__ = __webpack_require__("../../../../../src/app/component/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_problemlist_problemlist_component__ = __webpack_require__("../../../../../src/app/component/problemlist/problemlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__component_problemdetails_problemdetails_component__ = __webpack_require__("../../../../../src/app/component/problemdetails/problemdetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_newproblem_newproblem_component__ = __webpack_require__("../../../../../src/app/component/newproblem/newproblem.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__component_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/component/navbar/navbar.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Services



// Components





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__component_problemlist_problemlist_component__["a" /* ProblemlistComponent */],
            __WEBPACK_IMPORTED_MODULE_11__component_problemdetails_problemdetails_component__["a" /* ProblemdetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__component_newproblem_newproblem_component__["a" /* NewproblemComponent */],
            __WEBPACK_IMPORTED_MODULE_13__component_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__component_editor_editor_component__["a" /* EditorComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["b" /* routes */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__services_collaboration_service__["a" /* CollaborationService */],
            __WEBPACK_IMPORTED_MODULE_6__services_problemdetails_service__["a" /* ProblemdetailsService */],
            __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_component_problemlist_problemlist_component__ = __webpack_require__("../../../../../src/app/component/problemlist/problemlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_component_problemdetails_problemdetails_component__ = __webpack_require__("../../../../../src/app/component/problemdetails/problemdetails.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routes; });
/* unused harmony export routableComponents */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by feiyzhao on 7/11/17.
 */




var appRoutes = [
    {
        path: '',
        redirectTo: 'problems',
        pathMatch: 'full'
    },
    {
        path: 'problems',
        component: __WEBPACK_IMPORTED_MODULE_2_app_component_problemlist_problemlist_component__["a" /* ProblemlistComponent */]
    },
    {
        path: 'problems/:id',
        component: __WEBPACK_IMPORTED_MODULE_3_app_component_problemdetails_problemdetails_component__["a" /* ProblemdetailsComponent */]
    },
    {
        path: '**',
        redirectTo: 'problems'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], AppRoutingModule);

;
var routes = __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes);
var routableComponents = [__WEBPACK_IMPORTED_MODULE_2_app_component_problemlist_problemlist_component__["a" /* ProblemlistComponent */], __WEBPACK_IMPORTED_MODULE_3_app_component_problemdetails_problemdetails_component__["a" /* ProblemdetailsComponent */]];
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/component/editor/editor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen {\n #editor { \n   height: 600px; \n } \n .lang-select { \n   width: 100px; \n   margin-right: 10px; \n } \n header .btn { \n   margin: 0 5px; \n } \n footer .btn { \n   margin: 0 5px; \n } \n .editor-footer, .editor-header { \n   margin: 10px 0; \n } \n .cursor { \n   /*position:absolute;*/ \n   background: rgba(0, 250, 0, 0.5); \n   z-index: 40; \n   width: 2px!important \n } \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/editor/editor.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <header>\n    <select class=\"form-control pull-left lang-select\" id=\"language\" name=\"language\"\n     [(ngModel)]=\"language\" (change)=\"setLanguage(language)\">\n        <option *ngFor=\"let language of languages\" [value]=\"language\">\n          {{ language }}\n        </option>\n      </select>\n\n  </header>\n    <!-- Button trigger modal -->\n<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\">\n  <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span>\n</button>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Modal title</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        Are you Sure?\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"resetEditor()\">Reset</button>\n        <button type=\"button\" class=\"btn btn-primary\" >Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n  <br/>\n\n  <div class=\"row\">\n  </div>\n  <div id=\"editor\">\n  </div>\n<div>\n  {{output}}\n</div>\n\n  <footer>\n    <button type=\"button\" class=\"btn btn-success pull-right\" (click)=\"submit()\">\n      Submit Solution\n    </button>\n  </footer>\n</section>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/component/editor/editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_collaboration_service__ = __webpack_require__("../../../../../src/app/services/collaboration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_problemdetails_service__ = __webpack_require__("../../../../../src/app/services/problemdetails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditorComponent = (function () {
    function EditorComponent(collaborationService, route, problemdetailsService) {
        this.collaborationService = collaborationService;
        this.route = route;
        this.problemdetailsService = problemdetailsService;
        this.languages = ['Java', 'Python'];
        this.language = 'Java';
        this.output = '';
        this.defaultContect = {
            'Java': "public class Example {     \n\tpublic static void main (String[] args) {     \n\t\t// Type your java code here\n     \n\t}     \n}",
            'Python': "class Solution():     \n\tdef example(self):     \n\t\t # write your Python code here     \n\t\tprint('hello world from feiyzhao')\n    \n     \ndef main():     \n\tsol = Solution()     \n\tsol.example()     \n\n    \nif __name__ == '__main__':     \n\tmain()\n    "
        };
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.sessionId = params['id'];
        });
        this.initEditor();
    };
    EditorComponent.prototype.initEditor = function () {
        var _this = this;
        this.editor = ace.edit('editor');
        this.editor.setTheme('ace/theme/eclipse');
        this.resetEditor();
        document.getElementsByTagName('textarea')[0].focus();
        this.collaborationService.init(this.editor, this.sessionId);
        this.editor.lastAppliedChanges = null;
        // TODO
        // register change callback
        this.editor.on('change', function (e) {
            console.log('editor changed' + JSON.stringify(e));
            if (_this.editor.lastAppliedChanges != e) {
                console.log("new changes");
                _this.collaborationService.change(JSON.stringify(e));
            }
        });
        // cursor movement
        this.editor.getSession().getSelection().on('changeCursor', function () {
            var cursor = _this.editor.getSession().getSelection().getCursor();
            console.log("cursor move", JSON.stringify(cursor));
            _this.collaborationService.cursorMove(JSON.stringify(cursor));
        });
        // call restore buffer to restore changes
        this.collaborationService.restoreBuffer();
    };
    EditorComponent.prototype.setLanguage = function (language) {
        this.language = language;
        this.resetEditor();
    };
    EditorComponent.prototype.resetEditor = function () {
        console.log("Resetting editor");
        this.editor.getSession().setMode("ace/mode/" + this.language.toLowerCase());
        this.editor.setValue(this.defaultContect[this.language]);
        this.output = '';
    };
    EditorComponent.prototype.submit = function () {
        var _this = this;
        this.output = '';
        // TODO
        var userCodes = this.editor.getValue();
        console.log(userCodes);
        var codes = {
            userCodes: userCodes,
            lang: this.language.toLocaleLowerCase()
        };
        console.log('debug' + codes);
        this.problemdetailsService.buildAndRun(codes)
            .then(function (res) {
            console.log('client editor received' + res.toString());
            _this.output = res.toString();
        });
    };
    return EditorComponent;
}());
EditorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-editor',
        template: __webpack_require__("../../../../../src/app/component/editor/editor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/editor/editor.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_collaboration_service__["a" /* CollaborationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_collaboration_service__["a" /* CollaborationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_problemdetails_service__["a" /* ProblemdetailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_problemdetails_service__["a" /* ProblemdetailsService */]) === "function" && _c || Object])
], EditorComponent);

var _a, _b, _c;
//# sourceMappingURL=editor.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Brand</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\"><a href=\"#\">Link <span class=\"sr-only\">(current)</span></a></li>\n        <li><a href=\"#\">Link</a></li>      \n      </ul>\n      <form class=\"navbar-form navbar-left\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n      </form>\n      \n      <form class=\"navbar-form navbar-right\" *ngIf=\"!authService.isAuthenticated()\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"login()\">Login</button>\n      </form>\n      \n      <ul class=\"nav navbar-nav navbar-right\">    \n        <li class=\"dropdown\" *ngIf=\"authService.isAuthenticated()\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            {{profile?.name}}\n            <span class=\"caret\"></span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">My Profile</a></li>\n            <li><a href=\"#\">Something else here</a></li>\n            <li><a (click)=\"logout()\">Logout</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/component/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(authService) {
        var _this = this;
        this.authService = authService;
        this.authService.userProfile.subscribe(function (profile) { return _this.profile = profile; });
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.login = function () {
        this.authService.login();
    };
    NavbarComponent.prototype.logout = function () {
        this.authService.logout();
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/component/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], NavbarComponent);

var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/newproblem/newproblem.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/newproblem/newproblem.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <form #formRef=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"problemName\">Problem Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"problemName\" name=\"problemName\" placeholder=\"Input Problem Name\" required\n        [(ngModel)]=\"newProblem.name\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"problemDesc\">Problem Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"problemDesc\" name=\"problemDesc\" placeholder=\"Input Problem Description\" required\n        [(ngModel)]=\"newProblem.desc\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n\n    <div class=\"form-group\">\n      <label for=\"difficulty\">Difficulty</label>\n      <select class=\"form-control\" id=\"difficulty\" name=\"difficulty\" [(ngModel)]=\"newProblem.difficulty\">\n        <option *ngFor=\"let difficulty of difficulties\" [value]=\"difficulty\">\n          {{difficulty}}\n        </option>\n      </select>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <button type=\"submit\" class=\"btn btn-primary pull-right\"\n        (click)=\"addProblem()\">Submit</button>\n      </div>\n\n\n    </div>\n    \n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/component/newproblem/newproblem.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_problemdetails_service__ = __webpack_require__("../../../../../src/app/services/problemdetails.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewproblemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DEFAULT_PROBLEM = Object.freeze({
    id: 1,
    name: 'default problem',
    desc: 'default description',
    difficulty: 'easy'
});
var NewproblemComponent = (function () {
    function NewproblemComponent(problemdetailsService) {
        this.problemdetailsService = problemdetailsService;
        this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
        this.difficulties = ['easy', 'medium', 'hard', 'super'];
    }
    NewproblemComponent.prototype.ngOnInit = function () {
    };
    NewproblemComponent.prototype.addProblem = function () {
        this.problemdetailsService.addProblem(this.newProblem)
            .catch(function (error) { return console.log(error.body); });
        this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
    };
    return NewproblemComponent;
}());
NewproblemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-newproblem',
        template: __webpack_require__("../../../../../src/app/component/newproblem/newproblem.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/newproblem/newproblem.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_problemdetails_service__["a" /* ProblemdetailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_problemdetails_service__["a" /* ProblemdetailsService */]) === "function" && _a || Object])
], NewproblemComponent);

var _a;
//# sourceMappingURL=newproblem.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/problemdetails/problemdetails.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/problemdetails/problemdetails.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"container\" *ngIf = \"problem\">\n  <div class=\"col-xs-12 col-md-4\">\n    <h2>\n      {{problem.id}}. {{problem.name}}\n    </h2>\n    <p>\n      {{problem.desc}}\n    </p>\n\n  </div>\n  <div class=\"hidden-xs col-sm-12 col-md-8\">\n    <app-editor></app-editor>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/component/problemdetails/problemdetails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_problemdetails_service__ = __webpack_require__("../../../../../src/app/services/problemdetails.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProblemdetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProblemdetailsComponent = (function () {
    function ProblemdetailsComponent(problemdetailService, route) {
        this.problemdetailService = problemdetailService;
        this.route = route;
    }
    ProblemdetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.problemdetailService.getProblemById(+params['id'])
                .then(function (problem) { return _this.problem = problem; });
        });
    };
    return ProblemdetailsComponent;
}());
ProblemdetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-problemdetails',
        template: __webpack_require__("../../../../../src/app/component/problemdetails/problemdetails.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/problemdetails/problemdetails.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_problemdetails_service__["a" /* ProblemdetailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_problemdetails_service__["a" /* ProblemdetailsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], ProblemdetailsComponent);

var _a, _b;
//# sourceMappingURL=problemdetails.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/problemlist/problemlist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".difficulty {\n  min-width: 65px;\n  margin-right: 10px;\n}\n\n.label.difficulty {\n  padding-top: 0.6em;\n  color: #fbfdfa;\n  font-size: 12px;\n}\n\n.title {\n  font-size: 1.2em;\n}\n\n.diff-easy {\n  background-color: #42ebf4;\n}\n\n.diff-medium {\n  background-color: #92cf5c;\n}\n\n.diff-hard {\n  background-color: #dd0d1e;\n}\n\n.diff-super {\n  background-color: #8d16e2;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/problemlist/problemlist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-newproblem></app-newproblem>\n  <div class=\"list-group\">\n    <a class=\"list-group-item\" *ngFor=\"let problem of problems\"\n\t\t[routerLink]=\"['/problems', problem.id]\">\n      <span class=\"{{'pull-left label difficulty diff-' + problem.difficulty.toLocaleLowerCase()}}\">\n        {{problem.difficulty}}\n      </span>\n      <strong class=\"title\">{{problem.id}}. {{problem.name}}</strong>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/component/problemlist/problemlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_problemdetails_service__ = __webpack_require__("../../../../../src/app/services/problemdetails.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProblemlistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProblemlistComponent = (function () {
    function ProblemlistComponent(problemdetailsService) {
        this.problemdetailsService = problemdetailsService;
        this.problems = [];
        // this.problems = this.problemlistService.getProblems();
    }
    ProblemlistComponent.prototype.getProblems = function () {
        var _this = this;
        //this.problems = this.problemdetailsService.getStaticProblems();
        this.problemdetailsService.getProblems()
            .subscribe(function (problems) { return _this.problems = problems; });
    };
    ProblemlistComponent.prototype.ngOnInit = function () {
        this.getProblems();
    };
    return ProblemlistComponent;
}());
ProblemlistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-problemlist',
        template: __webpack_require__("../../../../../src/app/component/problemlist/problemlist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/problemlist/problemlist.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_problemdetails_service__["a" /* ProblemdetailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_problemdetails_service__["a" /* ProblemdetailsService */]) === "function" && _a || Object])
], ProblemlistComponent);

var _a;
//# sourceMappingURL=problemlist.component.js.map

/***/ }),

/***/ "../../../../../src/app/mock-problems.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PROBLEMS; });
var PROBLEMS = [
    {
        id: 1,
        name: "Two Sum",
        desc: "Given an array of integers, find two numbers such that they add up to a specific target number.\nThe function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are NOT zero-based.",
        difficulty: "easy"
    },
    {
        id: 2,
        name: "3Sum",
        desc: "Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.",
        difficulty: "medium"
    },
    {
        id: 3,
        name: "4Sum",
        desc: "Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target?\nFind all unique quadruplets in the array which gives the sum of target.",
        difficulty: "medium"
    },
    {
        id: 4,
        name: "Triangle Count",
        desc: "Given an array of integers, how many three numbers can be found in the array, so that we can build an triangle whose three edges length is the three numbers that we find?",
        difficulty: "hard"
    },
    {
        id: 5,
        name: "Sliding Window Maximum",
        desc: "Given an array of n integer with duplicate number, and a moving window(size k), move the window at each iteration from the start of the array, find the maximum number inside the window at each moving.",
        difficulty: "super"
    }
];
//# sourceMappingURL=mock-problems.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js__ = __webpack_require__("../../../../auth0-js/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_auth0_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
        this.auth0 = new __WEBPACK_IMPORTED_MODULE_3_auth0_js__["WebAuth"]({
            clientID: 'rVBvSrBUp2vHV61ouc8Ru6zrxkzOtqyn',
            domain: 'feiyzhao.auth0.com',
            responseType: 'token id_token',
            audience: 'https://feiyzhao.auth0.com/userinfo',
            redirectUri: 'http://localhost:3000',
            scope: 'openid profile'
        });
        this.userProfile = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["BehaviorSubject"](undefined);
        this.userProfile.next(JSON.parse(localStorage.getItem('profile')));
    }
    AuthService.prototype.login = function () {
        this.auth0.authorize();
    };
    AuthService.prototype.getProfile = function () {
        var accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            throw new Error('Access token must exist to fetch profile');
        }
        var self = this;
        this.auth0.client.userInfo(accessToken, function (err, profile) {
            if (profile) {
                self.userProfile.next(profile);
                localStorage.setItem('userprofile', JSON.stringify(profile));
            }
        });
    };
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                _this.setSession(authResult);
                _this.getProfile();
                _this.router.navigate(['/home']);
            }
            else if (err) {
                _this.router.navigate(['/home']);
                console.log(err);
            }
        });
    };
    AuthService.prototype.setSession = function (authResult) {
        // Set the time that the access token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('userprofile');
        // Go back to the home route
        this.router.navigate(['/']);
    };
    AuthService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // access token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/collaboration.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_colors__ = __webpack_require__("../../../../../src/assets/colors.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollaborationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CollaborationService = (function () {
    function CollaborationService() {
        this.clientsInfo = {};
        this.clientNum = 0;
    }
    CollaborationService.prototype.init = function (editor, sessionId) {
        var _this = this;
        this.collaborationSocket = io(window.location.origin, { query: 'sessionId=' + sessionId });
        // this.collaborationSocket.on('message', (message) => {
        //   console.log('message received from server:' + message);
        // })
        this.collaborationSocket.on('change', function (delta) {
            console.log("collaboration editor changes " + delta);
            delta = JSON.parse(delta);
            editor.lastAppliedChanges = delta;
            editor.getSession().getDocument().applyDeltas([delta]);
        });
        this.collaborationSocket.on('cursorMove', function (cursor) {
            console.log("cursor move" + cursor);
            var session = editor.getSession();
            cursor = JSON.parse(cursor);
            var x = cursor['row'];
            var y = cursor['column'];
            var changeClientId = cursor['socketId'];
            if (changeClientId in _this.clientsInfo) {
                session.removeMarker(_this.clientsInfo[changeClientId]['marker']);
            }
            else {
                _this.clientsInfo[changeClientId] = {};
                var css = document.createElement('style');
                css.type = 'text/css';
                css.innerHTML = '.editor_cursor_' + changeClientId
                    + '{ position: absolute; background: '
                    + __WEBPACK_IMPORTED_MODULE_1__assets_colors__["a" /* COLORS */][_this.clientNum] + ';'
                    + 'z-index: 100; width: 3px !important; }';
                document.body.appendChild(css);
                _this.clientNum++;
            }
            var Range = ace.require('ace/range').Range;
            var newMarker = session.addMarker(new Range(x, y, x, y + 1), 'editor_cursor_' + changeClientId, true);
            _this.clientsInfo[changeClientId]['marker'] = newMarker;
        });
    };
    CollaborationService.prototype.change = function (delta) {
        this.collaborationSocket.emit('change', delta);
    };
    CollaborationService.prototype.cursorMove = function (cursor) {
        this.collaborationSocket.emit('cursorMove', cursor);
    };
    CollaborationService.prototype.restoreBuffer = function () {
        this.collaborationSocket.emit('restoreBuffer');
    };
    return CollaborationService;
}());
CollaborationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CollaborationService);

//# sourceMappingURL=collaboration.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/problemdetails.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_mock_problems__ = __webpack_require__("../../../../../src/app/mock-problems.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProblemdetailsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProblemdetailsService = (function () {
    function ProblemdetailsService(http) {
        this.http = http;
        this.problems = __WEBPACK_IMPORTED_MODULE_4_app_mock_problems__["a" /* PROBLEMS */];
        this._problemSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
    }
    ProblemdetailsService.prototype.getStaticProblems = function () {
        return this.problems;
    };
    ProblemdetailsService.prototype.addStaticProblem = function (newProblem) {
        newProblem.id = this.problems.length + 1;
        this.problems.push(newProblem);
    };
    ProblemdetailsService.prototype.getProblems = function () {
        var _this = this;
        this.http.get('api/v1/problems')
            .toPromise()
            .then(function (res) {
            _this._problemSource.next(res.json());
        })
            .catch(this.handleError);
        return this._problemSource.asObservable();
    };
    ProblemdetailsService.prototype.getProblemById = function (id) {
        return this.http.get("api/v1/problems/" + id)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ProblemdetailsService.prototype.addProblem = function (problem) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post('/api/v1/problems', problem, { headers: headers })
            .toPromise()
            .then(function (res) {
            _this.getProblems();
            return res.json();
        })
            .catch(this.handleError);
    };
    /**
     *
     * @param data TODO: define a model
     */
    ProblemdetailsService.prototype.buildAndRun = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post('/api/v1/build_and_run', data, { headers: headers })
            .toPromise()
            .then(function (res) {
            console.log('in client build and run', res);
            return res.json();
        })
            .catch(this.handleError);
    };
    ProblemdetailsService.prototype.handleError = function (error) {
        console.error("An error occured", error);
        return Promise.reject(error);
    };
    return ProblemdetailsService;
}());
ProblemdetailsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ProblemdetailsService);

var _a;
//# sourceMappingURL=problemdetails.service.js.map

/***/ }),

/***/ "../../../../../src/assets/colors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COLORS; });
var COLORS = [
    "#0000ff",
    "#a52a2a",
    "#00ffff",
    "#00008b",
    "#008b8b",
    "#a9a9a9",
    "#006400",
    "#bdb76b",
    "#8b008b",
    "#556b2f",
    "#ff8c00",
    "#9932cc",
    "#8b0000",
    "#e9967a",
    "#9400d3",
    "#ff00ff",
    "#ffd700",
    "#008000",
    "#4b0082",
    "#f0e68c",
    "#add8e6",
    "#e0ffff",
    "#90ee90",
    "#d3d3d3",
    "#ffb6c1",
    "#ffffe0",
    "#00ff00",
    "#ff00ff",
    "#800000",
    "#000080",
    "#808000",
    "#ffa500",
    "#ffc0cb",
    "#800080",
    "#800080",
    "#ff0000",
    "#c0c0c0",
    "#ffffff",
    "#ffff00"
];
//# sourceMappingURL=colors.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map