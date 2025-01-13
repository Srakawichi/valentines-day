import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import dayjs from 'dayjs';

export default function LocationPage() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div>
                <h1>Wann möchtest du dich am 14.02. treffen?</h1>
                <MobileTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
            </div>
        </LocalizationProvider>
    );
}
