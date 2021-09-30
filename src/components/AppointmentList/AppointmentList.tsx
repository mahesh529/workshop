import React, { Suspense } from 'react';
import { useAPIData } from '@athena/fetch-from-athenanet';
import styles from './AppointmentList.module.scss';
import { Heading, Table } from '@athena/forge';
import {
  transformAppointments,
  appointmentColumns,
  getFetchArgs,
} from './appointmentService';

const AppointmentList: React.FC = () => {
  const data: { RESPONSE: { Appointments: RawAppointment[] } } = useAPIData(
    getFetchArgs({
      PROVIDERID: '4',
      DEPARTMENTID: '52',
    }),
    1000
  );
  const appointments: Appointment[] = transformAppointments(
    data.RESPONSE.Appointments.splice(0, 10)
  );
  return (
    <>
      <Heading variant="subsection" headingTag="h4" text="Appointments" />

      <Table rows={appointments} columns={appointmentColumns} />
    </>
  );
};

export default AppointmentList;
