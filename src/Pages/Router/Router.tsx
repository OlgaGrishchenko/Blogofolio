import React from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import NewPassword from "../NewPassword";
import RegistrationConfirmation from "../RegistrationConfirmation";
import ResetPassword from "../ResetPassword";
import Success from "../Success";
import PagesWrapper from "../PagesWrapper";
import ContentPage from "../ContentPage";

export enum PathNames {
   Home = "/",
   SignIn = "/sign-in",
   SignUp = "/sign-up",
   AddPost = "/posts/add",
   RegistrationConfirmation = "/sign-up/confirm",
   RegistrationSuccess = "/sign-up/success",
   NewPassword = "/new-password",
   ResetPassword = "/reset-password",
   Search = "/search",
   ContentPage = "/content-page",
}

const MOCK_CARD = {
   id: 0,
   image: "https://pibig.info/uploads/posts/2022-03/1648204988_5-pibig-info-p-kvadratnaya-priroda-priroda-krasivo-foto-6.jpg",
   text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
   date: "2022-11-01",
   lesson_num: 0,
   title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
   author: 0,
};
 
const Router = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path={PathNames.Home} element={<PagesWrapper />}>
               <Route path={PathNames.SignIn} element={<SignIn />} />
               <Route path={PathNames.SignUp} element={<SignUp />} />
               <Route path={PathNames.NewPassword} element={<NewPassword />} />
               <Route path={PathNames.RegistrationConfirmation} element={<RegistrationConfirmation />} />
               <Route path={PathNames.ResetPassword} element={<ResetPassword />} />
               <Route path={PathNames.RegistrationSuccess} element={<Success />} />
               {<Route path={PathNames.ContentPage} element={<ContentPage card={MOCK_CARD}/>} />}
            </Route>
               <Route path="*" element={<Navigate to={PathNames.SignIn} />} />
         </Routes>
      </BrowserRouter>
   );
};

export default Router;

