import React, { useState } from 'react'
import './OuAllezVous.css';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';



const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      
    },
    margin: {
      margin: theme.spacing(1),
      background:'#fff',
      borderRadius: 50,
      border:20,
      
      widht:"100%",
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
  }));


function OuAllezVous() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });

    const handleChange = (prop) => (event) => {
       setValues({ ...values, [prop]: event.target.value });
    };
    const [stickyTop, setStickyTop] = useState(false);
    return (
        <div className="OuAllezVous">
            
             

            {/*<FormControl fullWidth className={classes.margin}>
                
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={values.amount}
                    onChange={handleChange('amount')}
                    startAdornment={<InputAdornment position="start"><SearchIcon /> </InputAdornment>}
                    labelWidth={60}
                />
            </FormControl>*/}
            <input type="text" placeholder="Où allez-vous ?" className="stickyTop" /> <SearchIcon />
        </div>
    )
}

export default OuAllezVous
