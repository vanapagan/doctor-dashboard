import { IPatient } from './patient';
import { IQuestionAnswer } from './question-answer';

export interface ICase {
  id: string;
  startedAt: string;
  questionAnswers: IQuestionAnswer[];
  patient: IPatient;
}
