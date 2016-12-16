import {Component} from 'angular2/core';
import {Movie} from './movie';
import {MovielistComponent} from './movielist.component';
@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives:[MovielistComponent],
})

export class AppComponent {

    mainHeading = "My Movies";
	movies:Array<Movie>;
	public publicMovies = this.movies;
	

	constructor ()
	{
	this.movies = [
			new Movie ("Home Alone", 1990 , encodeURI("https://images-na.ssl-images-amazon.com/images/M/MV5BNmQzYjEzYTQtNzNhZi00NmEwLThiZDMtMWYyNjRmZWY0ZTdkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg") , "An 8-year old troublemaker"),
			//new Movie (2 , "Surving the wilderness" , "Fgwy-UdtyLs", "Bucky goes hiking"),
		    //new Movie (3 , "Learn angular 1" , "Fgwy-UdtyLs", "Learn angular 1"),
			//new Movie (4 , "Learn Python" , "Fgwy-UdtyLs", "Bucky goes hiking"),
			//new Video (5 , "Learn angular 2" , "Fgwy-UdtyLs", "Bucky goes hiking"),
			//new Video (6 , "Learn Java" , "Fgwy-UdtyLs", "Bucky goes hiking"),
			//new Video (7 , "Learn .Net" , "Fgwy-UdtyLs", "Bucky goes hiking"),
			//new Video (8 , "Learn C#" , "Fgwy-UdtyLs", "Bucky goes hiking"),
			//new Video (9 , "Learn Go" , "Fgwy-UdtyLs", "Bucky goes hiking"),


	]
}
}
