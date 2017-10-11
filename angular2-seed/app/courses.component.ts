import {Component} from 'angular2/core'; //component from angular core services
import {AutoGrowDirective} from './auto-grow.directive'
import {CourseService} from './course.service'; //import CourseService module from CourseService


@Component({
    selector:'courses', //specifies css selector for the host element
    template: `<h2> Courses </h2>
    {{ title }}<br>
    <input type="text" autoGrow/>
    <ul>
        <li *ngFor="#course of courses">
        {{ course }}
        </li>
    </ul>
    `, //specifes the html that will be inserted into the dom when the html is rendered

    providers:[CourseService], // specifying the dependancies for the project
    directives:[AutoGrowDirective]
})


export class CoursesComponent{
    title: string = "The title of course page";
    courses;

    constructor(courseService: CourseService){ //camel case: pascal case, component and class ( this is a depenancy, dependancy injection)
        this.courses = courseService.getCourses();
    }
}

