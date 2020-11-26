import React from 'react';
import {
  exportComponentAsJPEG,
} from 'react-component-export-image';
import {
  makeStyles,
  withStyles,
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import ShareIcon from '@material-ui/icons/Share';
import GetAppIcon from '@material-ui/icons/GetApp';
import FormControl from '@material-ui/core/FormControl';

/**
 * useStyles
 *
 */
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '10px',
    marginBottom: '10px',
    height: '160px',
    boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',
  },
  formControl: {
    margin: theme.spacing(1),
    width: '95%',
  },
}));

/**
 * ToolBar
 *
 */
const ToolBar = React.forwardRef((props, ref) => {
  const classes = useStyles();

  const {
    handleClearDecker,
  } = props;

  return (
    <div className={classes.container}>
      <FormControl className={classes.formControl}>
        <Button
          variant="contained"
          color="default"
          startIcon={<DeleteIcon />}
          onClick={handleClearDecker}
        >
          清空卡表
        </Button>
      </FormControl>
      <FormControl className={classes.formControl}>
        <Button
          variant="contained"
          color="default"
          startIcon={<ShareIcon />}
        >
          分享連結
        </Button>
      </FormControl>
      <FormControl className={classes.formControl}>
        <Button
          variant="contained"
          color="default"
          startIcon={<GetAppIcon />}
          onClick={() => exportComponentAsJPEG(ref)}
        >
          下載卡表
        </Button>
      </FormControl>
    </div>
  );
});

export default ToolBar;
