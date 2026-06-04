import axios from "axios";
import { serverUrl } from "../App";

export const getCurrentUser = async () => {
    try {
        const res = await axios.get(serverUrl + "/api/user/currentUser", { withCredentials: true });
        console.log(res?.data);
    } catch (error) {
        console.log(error);
    }
}