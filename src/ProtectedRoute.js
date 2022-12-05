import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";
import { useAuth } from "./auth-context/auth.context";

export const ProtectedRoute = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  return (
    <>
      {!user || !user.token || user.token === "" ? (
        <SweetAlert
          title="You must be signed in!"
          onCancel={() => navigate("/pages/authentication/sign-in")}
          onConfirm={() => navigate("/pages/authentication/sign-in")}
          confirmBtnCssClass={"px-5"}
        />
      ) : (
        <Outlet />
      )}
    </>
  );
};
