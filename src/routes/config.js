import Home from "pages/home/Index";
import Login from "pages/Login";
import Signup from "pages/Signup";
import PageNotFound from "pages/PageNotFound";

export const publicRoutes = [
  {
    path: "/login",
    name: "LoginPage",
    component: Login,
  },
  {
    path: "/signup",
    name: "SignupPage",
    component: Signup,
  },
];

export const protectedRoutes = [

  { path: "/", name: "HomePage", component: Home },
];

export const pageNotFoundRoute = [
  {
    path: "*",
    name: "PageNotFound",
    component: PageNotFound,
  },
];
