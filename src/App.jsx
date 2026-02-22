import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { ToastContainer } from "react-toastify";
import { HeroUIProvider } from "@heroui/react";
import ProtectedRoute from "./pages/ProtectedRoute";
import PostDetails from "./pages/PostDetails";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Test from "./memoization/Test";
import Parent from "./memoization/Parent";
export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        { index: true, element: <Login></Login> },
        { path: "/register", element: <Register></Register> },
        {
          path: "/profile",
          element: (
            <ProtectedRoute>
              <Profile></Profile>
            </ProtectedRoute>
          ),
        },
        {
          path: "/postdetails/:id",
          element: (
            <ProtectedRoute>
              <PostDetails></PostDetails>
            </ProtectedRoute>
          ),
        },
        {
          path: "/home",
          element: (
            <ProtectedRoute>
              <Home></Home>
            </ProtectedRoute>
          ),
        },
        { path: "*", element: <NotFound></NotFound> },
      ],
    },
  ]);

  const queryClient = new QueryClient();
  
  return (
    <div>
    
      <QueryClientProvider client={queryClient}>
        <HeroUIProvider>
          <RouterProvider router={routes} />
        </HeroUIProvider>

        <ToastContainer theme="colored" autoClose={3000}></ToastContainer>
      </QueryClientProvider>
      {/* <Parent  /> */}
    </div>
  );
}
