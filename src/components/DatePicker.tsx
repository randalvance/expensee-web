/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Form } from 'react-bootstrap';
import ReactDayPickerInput from 'react-day-picker/DayPickerInput';

import '../styles/react-date-picker.scss';

export const DatePicker: React.FC = () => (
  <ReactDayPickerInput
    classNames={{
      container: 'DayPickerInput w-100',
      overlayWrapper: 'DayPickerInput-OverlayWrapper',
      overlay: 'DayPickerInput-Overlay',
    }}
    component={(props: any) => <Form.Control type="text" {...props} placeholder="Date" />}
  />
);
