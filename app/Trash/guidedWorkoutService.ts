
// Use Microsoft dashboard to grant acess to the guided workout
// Later we need to host our own endpoint/service to guided workouts
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import {WorkoutDto, QueryDto, OrderBy} from '../model/guidedWorkouts';

interface MyEvent extends Event {
    url: string;
}

@Injectable()
export class GuidedWorkoutService {
    private DashBoardSigninUrl = "https://dashboard.microsofthealth.com/Home/MobileRedirect";
    private json: QueryDto;
    private workouts: WorkoutDto[];

    constructor(private http: Http) {

    }

    // sign in into dashboard
    public signInDashboard() {
        return new Promise((resolve, reject) => {
            var browserRef = window.open(this.DashBoardSigninUrl, "_blank", "location=no, closebuttoncaption=Done");
            browserRef.addEventListener("loadstart", (event: MyEvent) => {
                if (event.url.indexOf("https://dashboard.microsofthealth.com/#") != -1) {
                    resolve();
                    browserRef.close();
                }
            })
        });
    }

    // get guided workouts
    public queryGuidedWorkout(orderBy: OrderBy, orderByAscending: boolean, pageSize: number, filtersParam?: string, query?: string) {
        return new Promise((resolve, reject) => {
            this.http.get(this.query(orderBy, orderByAscending, pageSize, filtersParam, query))
                .map((response: Response) => {
                    this.json = response.json();
                }).subscribe(Response => {
                    resolve();
                }, error => {
                    reject("Failed to query guided workouts");
                });
        });
    }

    public getGuidedWorkouts() {
        return this.json.Workouts;
    }

    private query(orderBy: OrderBy, orderByAscending: boolean, pageSize: number, filtersParam?: string, query?: string) {
        var order: string = OrderBy[orderBy];
        return "https://dashboard.microsofthealth.com/workout/start?orderByField="
            + order + "&orderByAscending=" + orderByAscending + "&filtersParam=%5B"
            + filtersParam + "%5D&" + "query=" + query + "&pageSize=" + pageSize;
    }
}