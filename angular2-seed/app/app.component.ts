import {Component} from 'angular2/core'; //import component decorator from angular core
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'

@Component({ // this decorator adds data and meta data about the class
    selector: 'my-app',
    template: '<h1>Hello Angular</h1><courses></courses><authors></authors>',
    directives: [CoursesComponent,AuthorsComponent] // defining 
})
export class AppComponent { } // this is a rootcomponent - plain typescript class


