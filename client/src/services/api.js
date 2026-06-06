import axios from "axios";
import { serverUrl } from "../App";
import { setUserData } from "../redux/userSlice";

export const getCurrentUser = async (dispatch) => {
    try {
        const res = await axios.get(serverUrl + "/api/user/currentUser", { withCredentials: true });
        console.log(res?.data);
        dispatch(setUserData(res?.data));
    } catch (error) {
        console.log(error);
    }
}