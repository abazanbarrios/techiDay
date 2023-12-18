import {StatusEnum} from "./status.enum";

export interface ITask {
  id: number;
  description: string;
  date: string;
  status: StatusEnum;
}