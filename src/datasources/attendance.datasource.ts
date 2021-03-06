import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'attendance',
  connector: 'postgresql',
  url: 'postgres://postgres:raman123@localhost/employee-attendance',
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'raman123',
  database: 'employee-attendance'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class AttendanceDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'attendance';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.attendance', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
