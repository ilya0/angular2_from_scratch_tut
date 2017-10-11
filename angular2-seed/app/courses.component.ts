import {Component} from 'angular2/core'; //component from angular core services

import {CourseService} from './course.service'; //import CourseService module from CourseService
import {AuthorComponent} from './authors.component'
import {AuthorService} from './authors.service'; // this is importing authorservice


@Component({
    selector:'courses', //specifies css selector for the host element
    template: `<h2> Courses </h2>
    {{ title }}
    <ul>
        <li *ngFor="#course of courses">
        {{ course }}
        </li>
    </ul>
    `, //specifes the html that will be inserted into the dom when the html is rendered

    providers:[CourseService] // specifying the dependancies for the project
})


export class CoursesComponent{
    title: string = "The title of course page";
    courses;

    constructor(courseService: CourseService){ //camel case: pascal case, component and class ( this is a depenancy, dependancy injection)
        this.courses = courseService.getCourses();
    }
}

