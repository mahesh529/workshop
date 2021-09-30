import { Heading, GridRow, GridCol } from '@athena/forge';
const SearchBox = (): JSX.Element => {
  return (
    <GridRow>
      <GridCol width={{ large: 6 }}>
        <Heading
          headingTag="h2"
          variant="page"
          text="Reference Implementation – Pattern 2"
        />
        <Heading
          headingTag="h3"
          variant="section"
          text="Appointment Calendar Application"
          headingDescription="The Appointment calendar application showcases pattern 2 implementation. Through this sample app, a user can search for appointments for a specific provider, view patient details and cancel the appointment."
        />
      </GridCol>
    </GridRow>
  );
};
export default SearchBox;
