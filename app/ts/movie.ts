export class Movie {
    title:string;
    year:number; 
    poster:string;
    plot:string;

    /**
     *
     */
    constructor(title:string , year:number , poster:string , plot:string) {
        this.title = title;
        this.year = year;
        this.poster=poster;
        this.plot=plot;
        
    }
}