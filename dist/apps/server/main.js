/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const app_controller_1 = __webpack_require__(5);
const app_service_1 = __webpack_require__(6);
const feature_team_1 = __webpack_require__(7);
const feature_player_1 = __webpack_require__(16);
const feature_manager_1 = __webpack_require__(20);
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [feature_team_1.FeatureTeamModule, feature_player_1.FeaturePlayerModule, feature_manager_1.FeatureManagerModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);


/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const app_service_1 = __webpack_require__(6);
let AppController = exports.AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "getData", null);
exports.AppController = AppController = tslib_1.__decorate([
    (0, common_1.Controller)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
let AppService = exports.AppService = class AppService {
    getData() {
        return { message: 'Hello API' };
    }
};
exports.AppService = AppService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], AppService);


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(8), exports);
tslib_1.__exportStar(__webpack_require__(9), exports);
tslib_1.__exportStar(__webpack_require__(15), exports);


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FeatureTeamController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const feature_team_service_1 = __webpack_require__(9);
const domain_1 = __webpack_require__(11);
let FeatureTeamController = exports.FeatureTeamController = class FeatureTeamController {
    constructor(featureTeamService) {
        this.featureTeamService = featureTeamService;
    }
    getAll() {
        return this.featureTeamService.getAll();
    }
    getOne(id) {
        return this.featureTeamService.getOne(id);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(''),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Array !== "undefined" && Array) === "function" ? _b : Object)
], FeatureTeamController.prototype, "getAll", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof domain_1.ITeam !== "undefined" && domain_1.ITeam) === "function" ? _c : Object)
], FeatureTeamController.prototype, "getOne", null);
exports.FeatureTeamController = FeatureTeamController = tslib_1.__decorate([
    (0, common_1.Controller)('teams'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof feature_team_service_1.FeatureTeamService !== "undefined" && feature_team_service_1.FeatureTeamService) === "function" ? _a : Object])
], FeatureTeamController);


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FeatureTeamService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const rxjs_1 = __webpack_require__(10);
let FeatureTeamService = exports.FeatureTeamService = class FeatureTeamService {
    constructor() {
        this.teams$$ = new rxjs_1.BehaviorSubject([
            {
                id: "1",
                manager: "1",
                name: "Old Guns",
                players: ['1', '2']
            },
            {
                id: "2",
                manager: "2",
                name: "Young Bloods",
                players: ['3', '4']
            }
        ]);
    }
    getAll() {
        return this.teams$$.value;
    }
    getOne(id) {
        const team = this.teams$$.value.find(team => team.id === id);
        if (!team) {
            throw new common_1.NotFoundException(`Team with id: ${id} could not be found!`);
        }
        return team;
    }
};
exports.FeatureTeamService = FeatureTeamService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], FeatureTeamService);


/***/ }),
/* 10 */
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(12), exports);
tslib_1.__exportStar(__webpack_require__(13), exports);
tslib_1.__exportStar(__webpack_require__(14), exports);


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FeatureTeamModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const feature_team_controller_1 = __webpack_require__(8);
const feature_team_service_1 = __webpack_require__(9);
let FeatureTeamModule = exports.FeatureTeamModule = class FeatureTeamModule {
};
exports.FeatureTeamModule = FeatureTeamModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [feature_team_controller_1.FeatureTeamController],
        providers: [feature_team_service_1.FeatureTeamService],
        exports: [feature_team_service_1.FeatureTeamService],
    })
], FeatureTeamModule);


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(17), exports);
tslib_1.__exportStar(__webpack_require__(18), exports);
tslib_1.__exportStar(__webpack_require__(19), exports);


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FeaturePlayerController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const feature_player_service_1 = __webpack_require__(18);
const domain_1 = __webpack_require__(11);
let FeaturePlayerController = exports.FeaturePlayerController = class FeaturePlayerController {
    constructor(featurePlayerService) {
        this.featurePlayerService = featurePlayerService;
    }
    getAll() {
        return this.featurePlayerService.getAll();
    }
    getOne(id) {
        return this.featurePlayerService.getOne(id);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(''),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Array !== "undefined" && Array) === "function" ? _b : Object)
], FeaturePlayerController.prototype, "getAll", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof domain_1.IPlayer !== "undefined" && domain_1.IPlayer) === "function" ? _c : Object)
], FeaturePlayerController.prototype, "getOne", null);
exports.FeaturePlayerController = FeaturePlayerController = tslib_1.__decorate([
    (0, common_1.Controller)('feature-player'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof feature_player_service_1.FeaturePlayerService !== "undefined" && feature_player_service_1.FeaturePlayerService) === "function" ? _a : Object])
], FeaturePlayerController);


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FeaturePlayerService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const rxjs_1 = __webpack_require__(10);
let FeaturePlayerService = exports.FeaturePlayerService = class FeaturePlayerService {
    constructor() {
        this.players$$ = new rxjs_1.BehaviorSubject([
            {
                id: "1",
                firstName: "Sidney",
                lastName: "Crosby",
                owner: "1",
                age: 36
            },
            {
                id: "2",
                firstName: "Alexander",
                lastName: "Ovechkin",
                owner: "1",
                age: 38
            },
            {
                id: "3",
                firstName: "Auston",
                lastName: "Matthews",
                owner: "2",
                age: 26
            },
            {
                id: "4",
                firstName: "Connor",
                lastName: "McDavid",
                owner: "2",
                age: 27
            }
        ]);
    }
    getAll() {
        return this.players$$.value;
    }
    getOne(id) {
        const players = this.players$$.value.find(players => players.id === id);
        if (!players) {
            throw new common_1.NotFoundException(`players with id: ${id} could not be found!`);
        }
        return players;
    }
};
exports.FeaturePlayerService = FeaturePlayerService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], FeaturePlayerService);


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FeaturePlayerModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const feature_player_controller_1 = __webpack_require__(17);
const feature_player_service_1 = __webpack_require__(18);
let FeaturePlayerModule = exports.FeaturePlayerModule = class FeaturePlayerModule {
};
exports.FeaturePlayerModule = FeaturePlayerModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [feature_player_controller_1.FeaturePlayerController],
        providers: [feature_player_service_1.FeaturePlayerService],
        exports: [feature_player_service_1.FeaturePlayerService],
    })
], FeaturePlayerModule);


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(21), exports);
tslib_1.__exportStar(__webpack_require__(22), exports);
tslib_1.__exportStar(__webpack_require__(23), exports);


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FeatureManagerController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const feature_manager_service_1 = __webpack_require__(22);
const domain_1 = __webpack_require__(11);
let FeatureManagerController = exports.FeatureManagerController = class FeatureManagerController {
    constructor(featureManagerService) {
        this.featureManagerService = featureManagerService;
    }
    getAll() {
        return this.featureManagerService.getAll();
    }
    getOne(id) {
        return this.featureManagerService.getOne(id);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(''),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Array !== "undefined" && Array) === "function" ? _b : Object)
], FeatureManagerController.prototype, "getAll", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof domain_1.IManager !== "undefined" && domain_1.IManager) === "function" ? _c : Object)
], FeatureManagerController.prototype, "getOne", null);
exports.FeatureManagerController = FeatureManagerController = tslib_1.__decorate([
    (0, common_1.Controller)('feature-manager'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof feature_manager_service_1.FeatureManagerService !== "undefined" && feature_manager_service_1.FeatureManagerService) === "function" ? _a : Object])
], FeatureManagerController);


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FeatureManagerService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const rxjs_1 = __webpack_require__(10);
let FeatureManagerService = exports.FeatureManagerService = class FeatureManagerService {
    constructor() {
        this.managers$$ = new rxjs_1.BehaviorSubject([
            {
                id: "1",
                email: "manager1@example.com",
                firstName: "John",
                lastName: "Doe",
                active: true
            },
            {
                id: "2",
                email: "manager2@example.com",
                firstName: "Jane",
                lastName: "Doe",
                active: false
            }
        ]);
    }
    getAll() {
        return this.managers$$.value;
    }
    getOne(id) {
        const manager = this.managers$$.value.find(manager => manager.id === id);
        if (!manager) {
            throw new common_1.NotFoundException(`manager with id: ${id} could not be found!`);
        }
        return manager;
    }
};
exports.FeatureManagerService = FeatureManagerService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], FeatureManagerService);


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FeatureManagerModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const feature_manager_controller_1 = __webpack_require__(21);
const feature_manager_service_1 = __webpack_require__(22);
let FeatureManagerModule = exports.FeatureManagerModule = class FeatureManagerModule {
};
exports.FeatureManagerModule = FeatureManagerModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [feature_manager_controller_1.FeatureManagerController],
        providers: [feature_manager_service_1.FeatureManagerService],
        exports: [feature_manager_service_1.FeatureManagerService],
    })
], FeatureManagerModule);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(2);
const app_module_1 = __webpack_require__(3);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
    const port = process.env.PORT || 3000;
    await app.listen(port);
    common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map