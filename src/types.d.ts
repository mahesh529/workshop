interface RawAppointment {
  ID: string;
  FullAppointmentDate: { Date: string };
  AppointmentType: { Name: string; Notes: string };
  PatientFirstName: string;
  PatientLastName: string;
}

interface Appointment {
  id: string;
  date: string;
  type: string;
  patientName: string;
  notes: string;
}
