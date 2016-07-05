export interface QueryDto {
    Brands: string;
    Count: number;
    DifficultyLevels: string;
    Durations: Durations;
    HasMore: boolean;
    PageSize: number;
    Query: string;
    Results: string;
    Types: any[];
    Workouts: WorkoutDto[];
}

export class WorkoutDto {
    BodyParts: string;
    Brand: Brand;
    DifficultyLevel: DifficultyLevels;
    DifficultyLevelDisplayValue: DifficultyLevels;
    DifficultyLevelId: number;
    Duration: number;
    DurationString: string;
    Gender: string;
    HasVideo: boolean;
    Id: string;
    Image: string;
    KPartnerLogoUrl: string;
    Name: string;
    PublishDate: Date;
    PublishDateString: string;
    WorkoutType: Types;
    WorkoutTypeId: number;
}

export class ExerciseSearchResultDTO {
      Id: string;
      Name: string;
      BodyParts: string[];
      Image: string;
      Level: string;
      Type: string;
      Category: string;
      Equipment: string[];
      Focus: string[];
      LogDistance: boolean;
      LogGPSDistance: boolean;
      LogPedometerDistance: boolean;
      KShowInTool: boolean;
      Videos: ExerciseVideo[];
}

export class ExerciseVideo {
    Angle: string;
    VideoId: string;
    VideoTitle: string;
}

export enum Brand {
    BenchmarkWOD,
    GoldsGym,
    MensFitness,
    Microsoft,
    MuscleFitness,
    SHAPE,
    StartingStrength
}

export enum DifficultyLevels {
    Beginner,
    Intermediate,
    Advanced
}

export enum Durations {
    // < 20 mins
    short,
    // 20 - 40 mins
    medium,
    // > 40 mins
    long
}

export enum Types {
    Strength,
    Bodyweight,
    Running,
    Biking,
    Golfing
}

export enum OrderBy {
    DIFFICULTY,
    DURATION,
    TYPES
}