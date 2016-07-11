import {ExerciseVideo} from './ExerciseVideo';

export class ExerciseSearchResultDTO {
      id: string;
      name: string;
      bodyParts: string[];
      image: string;
      level: string;
      type: string;
      category: string;
      equipment: string[];
      focus: string[];
      logDistance: boolean;
      logGPSDistance: boolean;
      logPedometerDistance: boolean;
      kShowInTool: boolean;
      videos: ExerciseVideo[];
}