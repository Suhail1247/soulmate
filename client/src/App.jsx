import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/LoginPage";
import "./App.css";
import Otp from "./components/Otp";
import UserHome from "./components/userHome/UserHome";
import UserInfo from "./components/userInfo/UserInfo";
import UserProfile from "./components/userHome/UserProfile";
import DetailedProfile from "./components/userHome/DetailedProfile";



function App() {



const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,

    },
    {
      path: "/login",
      element: <Otp />,

    },
    {
      path: '/userinfo',
      element:<UserInfo />,
    },
    
    {
      path: "/userhome",
      element: <UserHome  />,

    },
    {
      path: "/profile",
      element: <UserProfile  /> ,

    },
    {
      path: "/user/:userId",
      element: <DetailedProfile  /> ,

    },

  ],
  {
    redirectTo: "/",
  }
);


  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./components/LoginPage";
// import "./App.css";
// import Otp from "./components/Otp";
// import UserHome from "./components/userHome/UserHome";
// import UserInfo from "./components/userInfo/UserInfo";
// import UserProfile from "./components/userHome/UserProfile";
// import { imageUrls } from "./helper/listItems";

// const token = localStorage.getItem("token");
// const router = createBrowserRouter(
//   [
//     {
//       path: "/",
//       element: token ? <UserHome imageUrls={imageUrls} /> : <Home />,

//     },
//     {
//       path: "/login",
//       element: token ? <UserHome imageUrls={imageUrls} /> : <Otp />,

//     },
//     {
//       path: '/userinfo',
//       element: token ? <UserInfo /> : <Home />,
//     },
    
//     {
//       path: "/userhome",
//       element: token ? <UserHome imageUrls={imageUrls} /> : <Home />,

//     },
//     {
//       path: "/profile",
//       element: token ? <UserProfile imageUrls={imageUrls} /> : <Home />,

//     },
//   ],
//   {
//     redirectTo: "/",
//   }
// );

// function App() {
//   return (
//     <>
//       <RouterProvider router={router}></RouterProvider>
//     </>
//   );
// }

// export default App;
