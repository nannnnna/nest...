import { Controller, Get } from '@nestjs/common';
import { ScraperService } from '../scrap/scrap.service';

@Controller('books')
<<<<<<< HEAD
export class BooksController {
    constructor(private readonly scraperService: ScraperService) {}

    @Get('/scrape')
    async scrapeBooks() {
        return this.scraperService.scrapeBooks();
    }
}
=======
export class BooksController {}
>>>>>>> 375e0d37bb9a97a72658222b60b94f260ac7f996
