//this imports into courses

import {Component} from 'angular2/core'; //component from angular core services
import {AuthorService} from './author.service'

@Component({
    selector: 'authors',
    template: `<h2> Authors </h2>
    {{ title }}
    <ul>
        <li *ngFor="#author of authors">
        {{ author }}
        </li>
    </ul>
    `,
    providers:[AuthorService]
})

export class AuthorsComponent{
    title: string = "These are the authors";
    authors: string[];
    
    constructor(authorService: AuthorService){
        this.authors = authorService.getAuthors();
    }
}