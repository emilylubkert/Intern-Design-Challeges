import { useState } from 'react';

import {
  Drawer,
  ListItem,
  ListItemText,
  Button,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
  FormLabel,
  Typography,
} from '@mui/material';

function Settings() {
  const [open, setOpen] = useState(false);

  const data = [
    { label: 'Measurement Unit', radios: ['\u00b0F', '\u00b0C'] },
    { label: 'Calendar View', radios: ['M-F', '7-Day', 'Monthly'] },
  ];

  const locations = ['Los Angeles', 'San Diego', 'Santa Barbara'];

  return (
    <div>
      <div fullWidth className='settings-btn'>
        <Button onClick={() => setOpen(true)}>Settings</Button>
      </div>
      <Drawer open={open} anchor={'right'} onClose={() => setOpen(false)}>
      <Button variant="text" color="secondary" sx={{ maxWidth: '20%' }} onClick={() => setOpen(false)}>x</Button>
        <ListItem>
          <FormControl>
            <FormLabel id='units-group-label'>Measurement Unit</FormLabel>
            <RadioGroup
              aria-labelledby='units-group-label'
              name='units-buttons-group'
            >
              <FormControlLabel
                value='Fahrenheit'
                control={<Radio />}
                label={`\u2109`}
              />
              <FormControlLabel
                value='Celcius'
                control={<Radio />}
                label={`\u00b0C`}
              />
            </RadioGroup>
          </FormControl>
        </ListItem>
        <ListItem>
          <FormControl>
            <FormLabel id='view-group-label'>Calendar View</FormLabel>
            <RadioGroup
              aria-labelledby='view-group-label'
              name='view-buttons-group'
            >
              <FormControlLabel value='M-F' control={<Radio />} label='M-F' />
              <FormControlLabel
                value='7-Day'
                control={<Radio />}
                label='7-Day'
              />
              <FormControlLabel
                value='Monthly'
                control={<Radio />}
                label='Monthly'
              />
            </RadioGroup>
          </FormControl>
        </ListItem>
        <ListItem>
          <FormControl>
            <FormLabel id='locations-group-label'>Saved Locations</FormLabel>
            <RadioGroup
              aria-labelledby='locations-group-label'
              name='locations-buttons-group'
            >
              {locations.map((item) => <FormControlLabel value={item} control={<Radio />} label={item} />)}
            </RadioGroup>
          </FormControl>
        </ListItem>
      </Drawer>
    </div>
  );
}

export default Settings;
