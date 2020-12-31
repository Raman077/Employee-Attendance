import {injectable, /* inject, */ BindingScope, Provider} from '@loopback/core';

/*
 * Fix the service type. Possible options can be:
 * - import {Employee} from 'your-module';
 * - export type Employee = string;
 * - export interface Employee {}
 */
export type Employee = unknown;

@injectable({scope: BindingScope.TRANSIENT})
export class EmployeeProvider implements Provider<Employee> {
  constructor(/* Add @inject to inject parameters */) {}

  value() {
    // Add your implementation here
    throw new Error('To be implemented');
  }
}
