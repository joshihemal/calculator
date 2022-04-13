import { Button } from '@mui/material';
import { Grid } from '@mui/material';

const Buttons = (props) => {
  const objBtn = props.objBtn;

  const calculate = (id) => {
    return props.calculate(id);
  };

  return (
    <>
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        direction='row'
        spacing={0.5}
      >
        {objBtn?.map((row) => (
          <Grid item lg={3} sx={{ marginY: 0.6 }} key={row.id}>
            <Button
              variant='contained'
              color={row.color}
              id={row.id}
              onClick={() => calculate(row.id)}
              size='large'
              sx={{ marginX: 0 }}
            >
              {row.name}
            </Button>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Buttons;
