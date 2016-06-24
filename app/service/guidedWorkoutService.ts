
// Use Microsoft dashboard to grant acess to the guided workout
// Later we need to host our own endpoint/service to guided workouts
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';

interface MyEvent extends Event {
    url: string;
}

@Injectable()
export class GuidedWorkoutService {
    private DashBoardSigninUrl = "https://dashboard.microsofthealth.com/Home/MobileRedirect";
    private DashBoardEndpointUrl = "https://dashboard.microsofthealth.com/workout/start?orderByField=DIFFICULTY&orderByAscending=true&filtersParam=%5B%5D&query=&pageSize=20";

    constructor(private http: Http) {

    }

    // sign in into dashboard
    public signInDashboard() {
        return new Promise((resolve, reject) => {
            var browserRef = window.open(this.DashBoardSigninUrl, "_blank", "location=no, closebuttoncaption=Done");
            browserRef.addEventListener("loadstart", (event: MyEvent) => {
                if (event.url == "https://dashboard.microsofthealth.com/") {
                    resolve();
                    browserRef.close();
                }
            })
        });
    }

    // get guided workouts
    public queryGuidedWorkout() {
        return new Promise((resolve, reject) => {
            this.http.get(this.DashBoardEndpointUrl).subscribe(Response => {

            }, error => {

            });
        });
    }
}