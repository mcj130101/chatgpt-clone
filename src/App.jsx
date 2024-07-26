import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/rootLayout/RootLayout";
import HomePage from "./components/homePage/HomePage";
import DashBoardLayout from "./layouts/dashboardLayout/DashBoardLayout";
import DashBoardPage from "./components/dashBoardPage/DashBoardPage";
import ChatPage from "./components/chatPage/ChatPage";
import LoginPage from "./components/loginPage/LoginPage";
import SignInPage from "./components/signinPage/SignInPage";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/log-in/*",
        element: <LoginPage />
      },
      {
        path: "/sign-up/*",
        element: <SignInPage />
      },
      {
        path: "/dashboard",
        element: <DashBoardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashBoardPage />
          },
          {
            path: '/dashboard/chats/:id',
            element: <ChatPage />
          }
        ]
      }
    ]
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App