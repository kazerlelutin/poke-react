import classes from './Preview.module.css';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';

Preview.propTypes = {
    pokemon: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        sprites: PropTypes.shape({
            front_default: PropTypes.string.isRequired
        })
    }),
    isLoading: PropTypes.bool
  };

export default function Preview({pokemon,isLoading}){

    return <div className={classes.container}>
        {isLoading &&  <Loader/>} 
        {pokemon &&
            <div className={classes.imgContainer}>
                <img 
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    width={200} 
                    height={200}
                />
            </div>
        }
    </div>

}