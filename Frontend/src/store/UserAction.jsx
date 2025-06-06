import axios from '../api/axiosconfig';
import { loaduser } from './UserSlice';

 export const asyncGetUsers = ()=> async (dispatch, getState)=> {
    try {
        console.log(getState());
        const res = await axios.get('/user')
        dispatch(loaduser(res.data));
        console.log(res.data);
    }
    catch(err){
        console.log(err);
    }
}
