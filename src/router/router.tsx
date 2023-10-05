import React, { lazy } from "react";
import Layout from "../Layout/Layout.tsx";
import LoginPage from "../view/LoginPage.tsx";
const HomePage = lazy(() => import("../view/Home/HomePage.tsx"));
const OrdersPage = lazy(() => import("../view/OrdersPage.tsx"));
const DishPage = lazy(() => import("../view/Dish/DishPage.tsx"));
const DishFormPage = lazy(() => import("../view/Dish/DishFormPage.tsx"));
const EmployeePage = lazy(() => import("../view/Employee/EmployeePage.tsx"));

export interface IRotuer {
  caseSensitive?: boolean;
  children?: Array<IRotuer>;
  element?: React.ReactNode | null;
  index?: false;
  path: string;
  key?: any;
  title?: string;
  [name: string]: any;
}

//懒加载
const withLoadingComponent = (comp: JSX.Element) => (
  <React.Suspense fallback={<div>Loading...</div>}>{comp}</React.Suspense>
);

const baseRouter: Array<IRotuer> = [
  { path: "/", element: <LoginPage /> },
  {
    path: "/home",
    element: <Layout />,
    children: [
      {
        path: "index",
        element: withLoadingComponent(<HomePage />),
      },
      {
        path: "orders",
        element: withLoadingComponent(<OrdersPage />),
      },
      {
        path: "dishes",
        children: [
          {
            path: "list",
            element: withLoadingComponent(<DishPage />),
          },
          {
            path: "save",
            element: withLoadingComponent(<DishFormPage />),
          },
        ],
      },
      {
        path: "employees",
        element: withLoadingComponent(<EmployeePage />),
      },
    ],
  },
];

export default baseRouter;
