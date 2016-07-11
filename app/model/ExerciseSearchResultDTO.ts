import {ExerciseVideo} from './ExerciseVideo';

export class ExerciseSearchResultDTO {
      Id: string;
      Name: string;
      BodyParts: string[];
      image: string;
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