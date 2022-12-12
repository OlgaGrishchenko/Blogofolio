import { PER_PAGE } from './../../Constants/constants';
import { create } from "apisauce";
import { RegisterUserData, ActivateUserData } from "../Types/auth";

const API = create({ baseURL: "https://studapi.teachmeskills.by" });

const registerUser = (data: RegisterUserData) => {
   return API.post("/auth/users/", data);
};

const getAllPosts = (offset:number, search?: string) => {
   return API.get("/blog/posts/", {limit:PER_PAGE, offset, search});
};

const activateUser = (data: ActivateUserData) => {
   return API.post("/auth/users/activation/", data);
};

const getSinglePost = (id: string) => {
   return API.get(`/blog/posts/${id}/`);
};

export default {
   registerUser,
   getAllPosts,
   activateUser,
   getSinglePost,
};
