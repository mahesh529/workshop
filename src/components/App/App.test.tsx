import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App';
import AppointmentList from '../AppointmentList';

jest.mock('@athena/fetch-from-athenanet', () => {
  const { Appointments } = require('../AppointmentList/AppointmentList.mock');

  return {
    setEndpoint: () => null,
    useAPIData: (data: any) => {
      return { RESPONSE: { Appointments: Appointments } };
    },
  };
});

describe('Component: App', () => {
  afterEach(cleanup);
  it('renders without crashing', () => {
    const { queryByText } = render(<App />);
    expect(queryByText('Welcome to Workshop')).toBeInTheDocument();
  });
});

describe('Component: AppointmentList', () => {
  //Snapshot checks for abnormal changes in HTML.
  it('renders without crashing', () => {
    const { getByText } = render(<AppointmentList />);
    expect(getByText('Appointments')).toBeInTheDocument();
  });
});
//npm  test -- --coverage
