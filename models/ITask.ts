export interface ITask {
  pid?:string,
  createdBy?: string;
  assignedTo?: string;
  taskId?: string;
  taskDesc?: string;
  estimate?: number;
  status?: string;
  startDate?: Date;
  endDate?: Date;
  /* bbb */
}