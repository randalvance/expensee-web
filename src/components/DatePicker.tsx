/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback } from 'react';
import { Form } from 'react-bootstrap';
import ReactDayPickerInput from 'react-day-picker/DayPickerInput';

import '../styles/react-date-picker.scss';

type Props = {
  value?: Date;
  onChange?: (date: Date) => void;
};

const DatePicker: React.FC<Props> = ({ value, onChange }, ref) => {
  const handleDayChanged = useCallback((date) => {
    if (onChange !== undefined) {
      onChange(date);
    }
  }, [onChange]);
  return (
    <ReactDayPickerInput
      ref={ref}
      value={value as any}
      onDayChange={handleDayChanged}
      classNames={{
        container: 'DayPickerInput w-100',
        overlayWrapper: 'DayPickerInput-OverlayWrapper',
        overlay: 'DayPickerInput-Overlay',
      }}
      component={(componentProps: any) => (
        <Form.Control type="text" {...componentProps} placeholder="Date" />
      )}
    />
  );
};

export default React.forwardRef(DatePicker);
