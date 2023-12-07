"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
<<<<<<< HEAD
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksController = void 0;
const common_1 = require("@nestjs/common");
const scrap_service_1 = require("../scrap/scrap.service");
let BooksController = class BooksController {
    constructor(scraperService) {
        this.scraperService = scraperService;
    }
    async scrapeBooks() {
        return this.scraperService.scrapeBooks();
    }
};
exports.BooksController = BooksController;
__decorate([
    (0, common_1.Get)('/scrape'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "scrapeBooks", null);
exports.BooksController = BooksController = __decorate([
    (0, common_1.Controller)('books'),
    __metadata("design:paramtypes", [scrap_service_1.ScraperService])
=======
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksController = void 0;
const common_1 = require("@nestjs/common");
let BooksController = class BooksController {
};
exports.BooksController = BooksController;
exports.BooksController = BooksController = __decorate([
    (0, common_1.Controller)('books')
>>>>>>> 375e0d37bb9a97a72658222b60b94f260ac7f996
], BooksController);
//# sourceMappingURL=books.controller.js.map