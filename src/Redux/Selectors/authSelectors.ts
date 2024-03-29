import { RootState } from "../store";

export default {
   getLoggedIn: (state: RootState) => state.authReducer.isLoggedIn,
   getUserName: (state: RootState) => state.authReducer.userName,
   getUserId: (state: RootState) => state.authReducer.userId,
};