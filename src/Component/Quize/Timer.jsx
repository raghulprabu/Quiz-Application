import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Timer (props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" value={(props.value / 30) * 100} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          sx={{ color: 'text.secondary' }}
        >
          {`${Math.round(props.value)}s`}
        </Typography>
      </Box>
    </Box>
  );
}

Timer.propTypes = {
  
  value: PropTypes.number.isRequired,
};

export default function CircularWithValueLabel() {
  const [secondsLeft, setSecondsLeft] = React.useState(30);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prevSeconds) => (prevSeconds <= 0 ? 30 : prevSeconds - 1));
    }, 1000); 
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <Timer value={secondsLeft} />;
}
