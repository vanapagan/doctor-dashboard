import { IPatient } from './patient';

export interface IQuestion {
  id: string;
  questionText: string;
  questionType: string;
  options: string[];
}
