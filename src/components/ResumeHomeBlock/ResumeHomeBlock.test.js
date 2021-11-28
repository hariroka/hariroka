import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import ResumeHomeBlock from './ResumeHomeBlock';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <IntlProvider locale="en">
      <MemoryRouter location="someLocation" context={{}}>
        <ResumeHomeBlock
          headline="FrontEnd Developer"
          shortFullName="ICT"
          snAccounts={[]}
          styles={{}}
        />
      </MemoryRouter>
    </IntlProvider>,
    div,
  );
});
