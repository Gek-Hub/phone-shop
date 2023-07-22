import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { SHOP_ROUTE } from "../utils/consts";
export default observer(function AppRouter() {
  const { user } = useContext(Context);
  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map((route) => {
          console.log(route);
          return (
            <Route
              key={route.id}
              path={route.path}
              element={<route.Component />}
            />
          );
        })}
      {publicRoutes.map((route) => (
        <Route key={route.id} path={route.path} element={<route.Component />} />
      ))}
      <Route path='*' element={<Navigate to={SHOP_ROUTE} replace />} />
    </Routes>
  );
});
