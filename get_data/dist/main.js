"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
<<<<<<< HEAD
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    await app.listen(3001);
=======
const scrap_service_1 = require("./scrap/scrap.service");
async function bootstrap() {
    const app = await core_1.NestFactory.createApplicationContext(app_module_1.AppModule);
    const scraper = app.get(scrap_service_1.ScraperService);
    const books = await scraper.scrapeBooks();
    console.log(books);
    await app.close();
>>>>>>> 375e0d37bb9a97a72658222b60b94f260ac7f996
}
bootstrap();
//# sourceMappingURL=main.js.map