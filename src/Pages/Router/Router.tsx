import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import NewPassword from "../NewPassword";
import RegistrationConfirmation from "../RegistrationConfirmation";
import ResetPassword from "../ResetPassword";
import Success from "../Success";
import PagesWrapper from "../PagesWrapper";
import ContentPage from "../ContentPage";
import SearchPage from "../SearchPage";

import AuthSelectors from "../../Redux/Selectors/authSelectors";
import { getUserData } from "../../Redux/Reducers/authReducer";

export enum PathNames {
   Home = "/",
   SignIn = "/sign-in",
   SignUp = "/sign-up",
   AddPost = "/posts/add",
   RegistrationConfirmation = "/sign-up/confirm",
   RegistrationSuccess = "/sign-up/success",
   NewPassword = "/new-password",
   ResetPassword = "/reset-password",
   Search = "/search/:searchString",
   ContentPage = "/content/:id",
   ActivateUser = "/activate/:uid/:token",
}

const MockPage = () => {
   return <div>{"Mock Page"}</div>;
};

const Router = () => {

   const isLoggedIn = useSelector(AuthSelectors.getLoggedIn);
   const dispatch = useDispatch();

   useEffect(() => {
      if (isLoggedIn) {
         dispatch(getUserData());
      }
   }, [isLoggedIn]);

   return (
      <BrowserRouter>
         <Routes>
            <Route path={PathNames.Home} element={<PagesWrapper />}>
               <Route path={PathNames.SignIn} element={<SignIn />} />
               <Route path={PathNames.SignUp} element={<SignUp />} />
               <Route path={PathNames.NewPassword} element={<NewPassword />} />
               <Route path={PathNames.RegistrationConfirmation} element={<RegistrationConfirmation />} />
               <Route path={PathNames.ResetPassword} element={<ResetPassword />} />

               <Route path={PathNames.ActivateUser} element={<Success />} />

               <Route path={PathNames.ContentPage} element={<ContentPage />} />

               <Route
                  path={PathNames.AddPost}
                  element={
                  isLoggedIn ? <MockPage /> : <Navigate to={PathNames.SignIn} />
                  }
               />

               <Route path={PathNames.Search} element={<SearchPage />} />
            </Route>
               <Route path="*" element={<Navigate to={PathNames.SignIn} />} />
               
         </Routes>
      </BrowserRouter>
   );
};

export default Router;

