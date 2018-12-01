import { IQuestion } from './question';

export interface IQuestionAnswer {
  id: string;
  question: IQuestion;
  lastName: string;
  answer: string;
}
