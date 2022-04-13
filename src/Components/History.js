import { Typography, Button, Grid, Paper, Box, Container } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
// import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const History = () => {
  // let { history, setHistory, isHistory, setisHistory } = props;

  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem('history')) || []
  );
  // let location = useLocation();

  const onClickDeleteHistory = () => {
    localStorage.clear();
    setHistory([]);
  };

  return (
    <>
      <Container>
        <Grid container direction='row' columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item lg={12} xs={6} sm={12} md={12}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 5,
              }}
            >
              <Paper
                elevation={24}
                sx={{
                  padding: 1.5,
                }}
              >
                <Box sx={{ minWidth: '51vh' }}>
                  <Typography
                    variant='h6'
                    component='h3'
                    color='primary'
                    sx={{ borderBottom: 2 }}
                  >
                    History
                  </Typography>

                  {history?.length > 0 ? (
                    history?.map((row) => {
                      return <p key={uuidv4()}>{row}</p>;
                    })
                  ) : (
                    <p>No History Present</p>
                  )}

                  {history?.length > 0 && (
                    <Button
                      color='error'
                      variant='contained'
                      onClick={onClickDeleteHistory}
                      sx={{ marginX: 1 }}
                    >
                      Delete History
                    </Button>
                  )}
                  <Link to='/' style={{ textDecoration: 'none' }}>
                    <Button
                      color='primary'
                      variant='contained'
                      sx={{ marginX: 1 }}
                    >
                      Calculator
                    </Button>
                  </Link>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default History;
