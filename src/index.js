import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './Components/ErrorPage';
import Body from './Components/Body';
import JobMainPage from './Components/JobMainPage';
import ContestMainPage from './Components/ContestMainPage';
import ResumeBuilderPage from './Components/ResumeBuilderPage';
import NewsPage from './Components/NewsPage';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,

    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/jobmainpage",
        element: <JobMainPage/>,
      },
      {
        path: "contestmainpage",
        element: <ContestMainPage/>,
      },
      {
        path: "/resumebuilder",
        element: <ResumeBuilderPage/>,
      },
      {
        path: "/newspage",
        element: <NewsPage/>,
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={appRouter}/>
);


