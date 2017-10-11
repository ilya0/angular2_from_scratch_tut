import {Component} from 'angular2/core';

@Component({
    selector:'courses', //specifies css selector for the host element
    template: `<h2> Courses </h2>
    {{ title }}
    <ul>
        <li *ngFor="#course of courses">
        {{ course }}
        </li>
    </ul>
    ` //specifes the html that will be inserted into the dom when the html is rendered
})
export class CoursesComponent{
    title: string = "The title of course page";
    courses = ["Course1", "Course2", "Course3"];
}