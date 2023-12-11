import { ScraperService } from '../scrap/scrap.service';
export declare class BooksController {
    private readonly scraperService;
    constructor(scraperService: ScraperService);
    scrapeBooks(): Promise<any[]>;
}
