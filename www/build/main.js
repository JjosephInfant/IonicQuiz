webpackJsonp([0],{

/***/ 107:
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
webpackEmptyAsyncContext.id = 107;

/***/ }),

/***/ 148:
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
webpackEmptyAsyncContext.id = 148;

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_questions__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(15);
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
    function HomePage(navCtrl, loadingCtrl, zone) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.zone = zone;
        this.everythingLoaded = false;
        this.quizFinished = false;
        this.isHome = true;
        this.correctAnswers = 0;
        this.questionsAsked = 1;
        this.selectedAnswer = -1;
        this.nextQuestion = "Next Question";
        this.completeQuiz = "Done";
        this.currentAnswer = 0;
        this.batchQuizQuestions = [];
        this.quizQuestionForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({ listOptions: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]() });
        this.questions = __WEBPACK_IMPORTED_MODULE_2__app_questions__["a" /* questionJson */];
        this.getQuizQuestion();
    }
    HomePage.prototype.next = function (currentAnswer) {
        if (currentAnswer === this.currentQuestion.answer) {
            this.correctAnswers++;
        }
        this.questionsAsked++;
        this.getQuizQuestion();
    };
    HomePage.prototype.startQuiz = function () {
        this.questionsAsked = 0;
        this.correctAnswers = 0;
        this.quizFinished = false;
        this.isHome = false;
    };
    HomePage.prototype.getQuizQuestion = function () {
        if (this.questionsAsked === 5) {
            this.quizResult = (this.correctAnswers / this.questionsAsked) * 100;
            this.quizFinished = true;
        }
        else {
            var index = this.getRandomQuizIndex();
            this.currentQuestion = this.questions[index];
            this.batchQuizQuestions.push(index);
            this.everythingLoaded = true;
        }
    };
    HomePage.prototype.landHome = function () {
        this.quizFinished = false;
        this.isHome = true;
        this.batchQuizQuestions = [];
        //this.navCtrl.setRoot(this.navCtrl.getActive().component);
    };
    HomePage.prototype.getRandomQuizIndex = function () {
        var randomIndex = -1;
        // this.zone.run(() => {
        //   this.quizQuestionForm.controls.listOptions.reset();
        // });
        do {
            randomIndex = Math.floor(Math.random() * 17);
        } while (!(this.batchQuizQuestions.indexOf(randomIndex) <= -1));
        {
            return randomIndex;
        }
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/ustuser/Documents/Works/BestOfUs/Quiz/QuizWithC2C/src/pages/home/home.html"*/'<ion-header id="quizHeaderContainer">\n   \n        <img src="./assets/imgs/home-logo.png" id="c2cLogo"/>\n        \n</ion-header>\n\n<ion-content >\n\n    <div *ngIf="everythingLoaded">\n\n        <ion-card *ngIf="isHome && !quizFinished" id="homeCard" class="quizQuestionCard">\n            <!-- <ion-card-header>\n                <ion-card-title>Welcome to C2C Quiz</ion-card-title>\n            </ion-card-header> -->\n            <ion-card-content >\n                <img src="./assets/imgs/Cute-Thinking-Woman-PNG.png" id="thinkingImg"/>\n                <button ion-button  (click)="startQuiz()" id="startQuiz">\n                    <img src="./assets/imgs/globes-start-button.png" />\n                </button>\n            </ion-card-content>\n        </ion-card>\n\n        <ion-card *ngIf="!quizFinished && !isHome" class="quizQuestionCard" >\n            <ion-card-content id="questionContent">\n                <div id="questionText">{{currentQuestion.question}}</div>\n                <button ion-button block (click)="next(1);" class="quizAnswerItem">\n                    <ion-label class="optionText">{{currentQuestion.option1}}</ion-label>\n                </button>\n                <button ion-button block (click)="next(2);" class="quizAnswerItem">\n                    <ion-label class="optionText">{{currentQuestion.option2}}</ion-label>\n                </button>\n                <button ion-button block (click)="next(3);" class="quizAnswerItem">\n                    <ion-label class="optionText">{{currentQuestion.option3}}</ion-label>\n                </button>\n                <!-- <form [formGroup]="quizQuestionForm">\n                    <ion-list radio-group [(ngModel)]="currentAnswer" formControlName="listOptions">\n                        <ion-item class="quizAnswerItem" (click)="next();">\n                            <ion-label class="optionText">{{currentQuestion.option1}}</ion-label>\n                            <ion-radio value="1" ></ion-radio>\n                        </ion-item>\n                        <ion-item class="quizAnswerItem" (click)="next();">\n                            <ion-label class="optionText">{{currentQuestion.option2}}</ion-label>\n                            <ion-radio value="2"></ion-radio>\n                        </ion-item>\n                        <ion-item class="quizAnswerItem" (click)="next();">\n                            <ion-label class="optionText">{{currentQuestion.option3}}</ion-label>\n                            <ion-radio value="3" ></ion-radio>\n                        </ion-item>\n                    </ion-list>\n                </form> -->\n            </ion-card-content>\n            <!-- <div id="nextQuestionContainer">\n                <button ion-button round (click)="next();" *ngIf="questionsAsked !== 4" class="answerButton optionText" >{{nextQuestion}}</button>\n                <button ion-button round (click)="next();" *ngIf="questionsAsked === 4" class="answerButton optionText">{{completeQuiz}}</button>\n            </div>  -->\n        </ion-card> \n\n        <ion-card *ngIf="quizFinished && !isHome" class="resultCardContent" id="resultCardContentSpace">\n            <!-- <ion-card-header>\n                <ion-card-title>Total: {{correctAnswers}} correct out of {{questionsAsked}}</ion-card-title>\n            </ion-card-header> -->\n            <ion-card-content class="resultCardContent">\n                <div class="blink">You scored {{ quizResult }} %</div>\n                <img id="resultImage" *ngIf="correctAnswers === 5" src="./assets/imgs/fireworks.gif"/>\n                <img id="resultImage" *ngIf="correctAnswers === 4" src="./assets/imgs/yahoo.gif"/>\n                <img id="resultImage" *ngIf="correctAnswers < 4" src="./assets/imgs/tryAgain.gif"/>\n                <button ion-button icon-only (click)="landHome()" id="restartQuiz">\n                    <ion-icon name="refresh-circle"></ion-icon>\n                </button>\n            </ion-card-content>\n        </ion-card>\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/ustuser/Documents/Works/BestOfUs/Quiz/QuizWithC2C/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(212);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: []
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(192);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/ustuser/Documents/Works/BestOfUs/Quiz/QuizWithC2C/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/ustuser/Documents/Works/BestOfUs/Quiz/QuizWithC2C/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return questionJson; });
var questionJson = [
    { "question": "Which one of the Application developed by C2C team is to manage projects ?", "option1": "ScriptTracker", "option2": "HitList", "option3": "RollCall", "answer": 1 },
    { "question": "Which cloud computing platform is used by C2C team to deploy the Applications ? ", "option1": "Amazon Web Services", "option2": "Microsoft Azure", "option3": "IBM Cloud", "answer": 1 },
    { "question": "Academy Award for Best Picture for the year 2018 was awarded to  ? ", "option1": "The Shape of Water", "option2": "Darkest Hour", "option3": "Dunkirk", "answer": 1 },
    { "question": "Which one of the below is not a Fantasic Four series movie ? ", "option1": "The Fantastic Four", "option2": "Fantastic Four: Prisoner of Azkaban", "option3": "Fantastic Four: Rise of the Silver Surfer", "answer": 2 },
    { "question": "Number of Harry Potter movies series released so far are ? ", "option1": "6", "option2": "7", "option3": "8", "answer": 3 },
    { "question": "Which one of this movie is not produced by universal pictures ? ", "option1": "Fifty Shades of Grey", "option2": "Wonder Woman", "option3": "Fast & Furious", "answer": 2 },
    { "question": "What is the name of role played by Emma Watson in Harry Potter series? ", "option1": "Hermione Granger", "option2": "Ginny Weasley", "option3": "Hannah Abbott", "answer": 1 },
    { "question": "Who played the leading role in the movie Iron man ?", "option1": "Terrence Howard", "option2": "Robert Downey Jr.", "option3": "Jeff Bridges", "answer": 2 },
    { "question": "Which type of delivery model is being is used in C2C product suite ?", "option1": "SAAS", "option2": "IAAS", "option3": "DAAS", "answer": 1 },
    { "question": "How scripts are Annotated ?", "option1": "Using Mobile App", "option2": "Using Roll Call Application", "option3": "Using DealPoint Application", "answer": 1 },
    { "question": "What is the development Methodology used across C2C ?", "option1": "Kanban", "option2": "Scrum", "option3": "Waterfall", "answer": 2 },
    { "question": "Which development tool is used for UI development across C2C ?", "option1": "ASP.NET", "option2": "Python", "option3": "Angular JS", "answer": 3 },
    { "question": "Which is not a product in C2C product suite ?", "option1": "Script Tracker", "option2": "DealPoint", "option3": "Jira", "answer": 3 },
    { "question": "Which is the Domain C2C Concentrating on ?", "option1": "Healthcare", "option2": "Retail", "option3": "Media and Entertainment", "answer": 3 },
    { "question": "Which is the product in C2C Product suite that deals with Budgeting ?", "option1": "Script Tracker", "option2": "Focus", "option3": "Mobile App", "answer": 2 },
    { "question": "Which is the Build Automation Tool used in C2C ?", "option1": "Jenkin", "option2": "Feature Casting", "option3": "Jira", "answer": 1 },
    { "question": "Where is uploaded scripts maintained in Script Tracker Application ?", "option1": "Watchdox", "option2": "Confluence", "option3": "Alfresco", "answer": 3 },
    { "question": "Contract for Below the Line Performers are managed by which product ?", "option1": "RollCall", "option2": "Feature Casting", "option3": "DealPoint", "answer": 2 }
];
//# sourceMappingURL=questions.js.map

/***/ })

},[193]);
//# sourceMappingURL=main.js.map