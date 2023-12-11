import { Controller, Get } from '@nestjs/common';
import { ScraperService } from '../scrap/scrap.service';

@Controller('books')
export class BooksController {
    constructor(private readonly scraperService: ScraperService) {}

    @Get('/scrape')
    async scrapeBooks() {
        return this.scraperService.scrapeBooks();
    }
}