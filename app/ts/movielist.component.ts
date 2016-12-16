import {Component , Inject} from 'angular2/core';
import {Movie} from './movie';

@Component({
	selector: 'movielist',
	templateUrl : 'app/ts/movielist.component.html',
	inputs:['movies'], 
})

export class MovielistComponent{}
