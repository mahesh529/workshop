import { setEndpoint } from '@athena/fetch-from-athenanet';
import { Loader, Root } from '@athena/forge';
import { Suspense } from 'react';
import { forgeTheme } from '../../nimbus-config';
import AppointmentList from '../AppointmentList';
import ErrorBoundary from '../ErrorBoundary';
import Header from '../Header';

setEndpoint();

export interface AppProps {
  // These props can be passed in to your app from athenaNet
}

const App: React.FC = (props: AppProps) => {
  return (
    /* This theme must be applied in order for Nimbus CSS namespacing to work */
    <Root theme={forgeTheme}>
      <h1>Welcome to Workshop</h1>
      <Header />
      <ErrorBoundary
        fallback={<h1>Failed to load Appointment calendar application</h1>}
      >
        <Suspense
          fallback={
            <Loader loading={true} text="Loading appointment list..." />
          }
        >
          <AppointmentList />
        </Suspense>
      </ErrorBoundary>
    </Root>
  );
};

export default App;
