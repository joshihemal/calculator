import React from 'react';
import { TextField, Stack, Grid } from '@mui/material';

const Screen = (props) => {
  return (
    <Grid item lg={12} xs={12} sm={12} md={12}>
      <Stack
        direction='column-reverse'
        justifyContent='space-evenly'
        alignItems='stretch'
        spacing={0}
        margin={0.7}
      >
        <TextField
          autoComplete='off'
          value={props.calc}
          sx={{ input: { textAlign: 'right' } }}
          InputProps={{ readOnly: true }}
        ></TextField>
      </Stack>
    </Grid>
  );
};

export default Screen;
