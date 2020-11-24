import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {
  Sets,
  CardTypes,
} from '../../Config';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
    boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',
  },
  formControl: {
    margin: theme.spacing(1),
    width: '95%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const CardSearch = (props) => {
  const classes = useStyles();

  const { openDialog } = props;

  return (
    <div className={classes.container}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">彈數</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          // onChange={handleChange}
        >
          {
            Sets.map((set) => {
              return (
                <MenuItem value={set.value}>{set.key}</MenuItem>
              );
            })
          }
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">種類</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          // onChange={handleChange}
        >
          {
            CardTypes.map((type) => {
              return (
                <MenuItem value={type.value}>{type.key}</MenuItem>
              );
            })
          }
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <TextField id="standard-basic" label="關鍵字" />
      </FormControl>
      <FormControl className={classes.formControl}>
        <Button variant="contained" color="primary" onClick={openDialog}>
          查詢
        </Button>
      </FormControl>
      <FormControl className={classes.formControl}>
        <Button variant="contained" color="primary">
          清除條件
        </Button>
      </FormControl>
    </div>
  );
};

export default CardSearch;