import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

/**
 * Copyright
 *
 */
const Copyright = () => {
  return (
    <Typography
      variant="body2"
      // color="initial"
      align="center"
      style={{ height: '50px', color: '#000000' }}
    >
      { `${new Date().getFullYear() } © ` }
      { `Aaron Lin All Right Reserved.` }
    </Typography>
  );
}

export default Copyright;
