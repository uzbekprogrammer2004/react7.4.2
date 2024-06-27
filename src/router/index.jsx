import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
  } from "react-router-dom";
  import App from "../App";
  import SignIn from "../pages/sign-in/index.jsx";
  import SignUp from "../pages/sign-up/index.jsx";
  import ForgotPassword from "../pages/forgot-password/index.jsx"
  import ResetPassword from "../pages/reset-password/index.jsx"
  const Index = () => {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<SignIn/>}/>
            <Route path="sign-up" element={<SignUp/>}/>
            <Route path="forgot-password" element={<ForgotPassword/>}/>
            <Route path="reset-password/:token" element={<ResetPassword/>}/>
        </Route>
      )
    );
    return <RouterProvider router={router}/>;
  };
  
  export default Index;
  