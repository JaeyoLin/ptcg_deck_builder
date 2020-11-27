import React from 'react';
import {
  exportComponentAsJPEG,
} from 'react-component-export-image';
import {
  makeStyles,
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import ShareIcon from '@material-ui/icons/Share';
import GetAppIcon from '@material-ui/icons/GetApp';
import FormControl from '@material-ui/core/FormControl';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';

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
  const [open, setOpen] = React.useState(false);

  const {
    handleClearDecker,
  } = props;

  /**
   * handleClickOpen
   *
   */
  const handleClickOpen = () => {
    setOpen(true);
  };

  /**
   * handleClose
   *
   */
  const handleClose = () => {
    setOpen(false);
  };

  /**
   * handleConfirm
   * 確認
   *
   */
  const handleConfirm = () => {
    handleClearDecker();
    handleClose();
  }

  return (
    <div className={classes.container}>
      <FormControl className={classes.formControl}>
        <Button
          variant="contained"
          color="default"
          startIcon={<DeleteIcon />}
          onClick={handleClickOpen}
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

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">警告</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            是否要清空卡表?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            // color="primary"
            variant="contained"
            startIcon={<ClearIcon />}
          >
            取消
          </Button>
          <Button
            onClick={handleConfirm}
            color="primary"
            variant="contained"
            startIcon={<CheckIcon />}
          >
            確認
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
});

export default ToolBar;
