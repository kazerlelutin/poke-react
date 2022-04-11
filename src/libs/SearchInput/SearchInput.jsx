import PropTypes from 'prop-types';
import { useDebounce } from 'use-debounce';
import { useEffect, useState } from 'react';
import classes from './SearchInput.module.css';

SearchInput.propTypes = {
    onSearch: PropTypes.func.isRequired
  };

export default function SearchInput({onSearch}){
    const 
        [value, setValue] = useState(''),
        [debounceValue] = useDebounce(value, 1000);

    useEffect(()=>{
        onSearch(value);
    },[debounceValue]);
        
    return <div className={classes.container}>
        <input 
            type="text" 
            className={classes.input}
            value={value}
            onChange={e=> setValue(e.target.value)}
        />
        <div className={classes.crossContainer} onClick={()=>setValue('')}>
            <div className={classes.cross} />
        </div>
    </div>

}