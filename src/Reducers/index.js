import { combineReducers} from 'redux';
import promocodeReducer from './promocodeReducer';

export default combineReducers({
    promoCode: promocodeReducer
});