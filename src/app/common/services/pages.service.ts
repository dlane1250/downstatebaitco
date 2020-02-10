import { Injectable } from '@angular/core';
import { Page } from '../../pages/pages.model';

@Injectable({providedIn: 'root'})

export class PagesService {
    pages: Page[] = [];

}