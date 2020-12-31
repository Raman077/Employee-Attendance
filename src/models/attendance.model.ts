import {Entity, model, property} from '@loopback/repository';

@model()
export class Attendance extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  id: number;

  @property({
    type: 'boolean',
    required: true,
  })
  present: boolean;

  @property({
    type: 'date',
    required: true,
  })
  date: string;


  constructor(data?: Partial<Attendance>) {
    super(data);
  }
}

export interface AttendanceRelations {
  // describe navigational properties here
}

export type AttendanceWithRelations = Attendance & AttendanceRelations;
