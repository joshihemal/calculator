import { useState } from 'react';
import Screen from './UI/Screen';
import Buttons from './UI/Buttons';
import { Paper, Box, Grid, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Calculator = () => {
  const btnObj = {
    0: {
      id: 'C',
      color: 'error',
      name: 'C',
    },
    1: {
      id: 'H',
      color: 'secondary',
      name: 'H',
    },
    2: {
      id: 'B',
      color: 'warning',
      name: '←',
    },
    3: {
      id: '/',
      color: 'inherit',
      name: '/',
    },
    4: {
      id: '7',
      color: 'primary',
      name: '7',
    },
    5: {
      id: '8',
      color: 'primary',
      name: '8',
    },
    6: {
      id: '9',
      color: 'primary',
      name: '9',
    },
    7: {
      id: '*',
      color: 'inherit',
      name: '*',
    },
    8: {
      id: '4',
      color: 'primary',
      name: '4',
    },
    9: {
      id: '5',
      color: 'primary',
      name: '5',
    },
    10: {
      id: '6',
      color: 'primary',
      name: '6',
    },
    11: {
      id: '-',
      color: 'inherit',
      name: '-',
    },
    12: {
      id: '1',
      color: 'primary',
      name: '1',
    },
    13: {
      id: '2',
      color: 'primary',
      name: '2',
    },
    14: {
      id: '3',
      color: 'primary',
      name: '3',
    },
    15: {
      id: '+',
      color: 'inherit',
      name: '+',
    },
    16: {
      id: '.',
      color: 'inherit',
      name: '.',
    },
    17: {
      id: '0',
      color: 'primary',
      name: '0',
    },
    18: {
      id: '%',
      color: 'inherit',
      name: '%',
    },
    19: {
      id: '=',
      color: 'inherit',
      name: '=',
    },
  };

  const navigate = useNavigate();
  const [calc, setcalc] = useState('');
  const history = JSON.parse(localStorage.getItem('history')) || [];

  const objBtn = [];
  for (const key in btnObj) {
    objBtn.push({
      id: btnObj[key].id,
      color: btnObj[key].color,
      name: btnObj[key].name,
    });
  }

  const calculate = (id) => {
    switch (id) {
      case 'C':
        return setcalc('');
      case 'H':
        return navigate(`/history`);
      case 'B':
        return setcalc(calc.slice(0, -1));
      case '=': {
        let lhs = calc;
        let rhs = eval(calc).toString();
        setcalc(rhs);
        let getHistory = history;
        getHistory.push(`${lhs} = ${rhs}`);
        localStorage.setItem('history', JSON.stringify(getHistory));
        return;
      }
      default:
        return setcalc(calc.concat(id));
    }
  };

  return (
    <>
      <Container>
        <Grid container direction='row' columns={{ xs: 4, sm: 8, md: 12 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Grid item lg={4} xs={2} sm={4} md={4}>
              <Paper
                elevation={24}
                sx={{
                  padding: 1,
                }}
              >
                <Screen calc={calc} />
                <Buttons objBtn={objBtn} calculate={calculate}></Buttons>
              </Paper>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </>
  );
};

export default Calculator;
