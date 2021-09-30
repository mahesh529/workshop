import { format } from 'date-fns';
import { FetchArgs } from '@athena/fetch-from-athenanet';
export const appointmentColumns = [
  {
    key: 'id',
    displayName: 'ID',
    sortable: true,
  },
  {
    key: 'date',
    displayName: 'Date/Time',
    sortable: true,
  },
  {
    key: 'type',
    displayName: 'Type',
  },
  {
    key: 'patientName',
    displayName: 'Patient',
    sortable: true,
  },
  {
    key: 'notes',
    displayName: 'Notes',
  },
];

export const getFetchArgs = (obj: {
  PROVIDERID?: string;
  DEPARTMENTID?: string;
  DATE?: Date;
  PATIENTID?: number;
}): FetchArgs => {
  return {
    route: 'hidden_exposed.esp',
    method: 'GET',
    args: {
      SUB: 'BusCall::AppointmentCalendar::FindAppointments',
      ARGS: JSON.stringify({
        ...obj,
        PATIENTINFOYN: 'Y',
      }),
    },
  };
};
// A transformation function to map subsystem appointment list format to required format in UI
export const transformAppointments = (
  appointments: RawAppointment[]
): Appointment[] =>
  appointments.map((appointment: RawAppointment) => {
    //Mapping Response with required fields.
    const data: Appointment = {
      id: appointment.ID,
      date: format(
        new Date(appointment.FullAppointmentDate.Date),
        'MM-dd-yyyy hh:mm:ss a'
      ),
      type: appointment.AppointmentType.Name,
      patientName: `${appointment.PatientFirstName} ${appointment.PatientLastName}`,
      notes: appointment.AppointmentType.Notes || 'NA',
    };
    return { ...data };
  });
