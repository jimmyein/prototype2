import {IUser} from "../model/IUser";

export class User  {

    // private _podHostEndPoint: string;
    // private _firstName: string;
    // private _lastName: string;
    // private _profilePictureUrl: string;
    // private _gender: string;
    // private _height: number;
    // private _weight: number;
    // private _fitnessLevelString: string;
    // private _wellnessActivityLevel: number;

    constructor() {
    }

    public static get FTU(): string {
        return window.localStorage.getItem("FTU");
    }

    public static set FTU(value: string) {
        window.localStorage.setItem(this.FTU, value);
    }

    public static get MSAToken(): string {
        return window.localStorage.getItem("MSAToken");
    }

    public static set MSAToken(value: string) {
        window.localStorage.setItem(this.MSAToken, value);
    }

    public static get KatToken(): string {
        return window.localStorage.getItem("KatToken");
    }

    public static set KatToken(value: string) {
        window.localStorage.setItem(this.KatToken, value);
    }

    // public get PodHostEndPoint(): string {
    //     return this._podHostEndPoint;
    // }

    // public get FirstName(): string {
    //     return this._firstName;
    // }

    // public get LastName(): string {
    //     return this._lastName;
    // }

    // public get ProfilePictureUrl(): string {
    //     return this._profilePictureUrl;
    // }

    // public get Gender(): string {
    //     return this._gender;
    // }

    // public get Height(): number {
    //     return this._height;
    // }

    // public get Weight(): number {
    //     return this._weight;
    // }

    // public get FitnessLevelString(): string {
    //     return this._fitnessLevelString;
    // }

    // public get WellnessActivityLevel(): number {
    //     return this._wellnessActivityLevel;
    // }
}