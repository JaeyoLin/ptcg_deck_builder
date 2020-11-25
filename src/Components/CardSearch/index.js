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

  const {
    toogleDialog, // 打開/關閉 Card Detail
    queryCondition, // 搜尋條件
    handleChangeQuery, // 修改條件
    clearQuery, // 清空查詢條件
  } = props;

  const {
    set, // 彈數
    type, // 種類
    searchText, // 關鍵字
  } = queryCondition;

  return (
    <div className={classes.container}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">彈數</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={set}
          onChange={(e) => {
            handleChangeQuery('set', e.target.value);
          }}
        >
          <MenuItem value="">全部</MenuItem>
          {
            Object.keys(Sets).map((set) => {
              return (
                <MenuItem key={Sets[set].key} value={Sets[set].value}>{`${Sets[set].key} - ${Sets[set].text}`}</MenuItem>
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
          value={type}
          onChange={(e) => {
            handleChangeQuery('type', e.target.value);
          }}
        >
          <MenuItem value="">全部</MenuItem>
          {
            Object.keys(CardTypes).map((type) => {
              return (
                <MenuItem key={CardTypes[type].key} value={CardTypes[type].value}>{CardTypes[type].text}</MenuItem>
              );
            })
          }
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <TextField
          id="standard-basic"
          label="關鍵字"
          value={searchText}
          onChange={(e) => {
            handleChangeQuery('searchText', e.target.value);
          }}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <Button variant="contained" color="primary" onClick={toogleDialog}>
          查詢
        </Button>
      </FormControl>
      <FormControl className={classes.formControl}>
        <Button variant="contained" color="primary" onClick={clearQuery}>
          清除條件
        </Button>
      </FormControl>
    </div>
  );
};

export default CardSearch;