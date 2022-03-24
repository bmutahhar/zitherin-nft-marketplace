import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useMediaQuery } from "react-responsive";

const withToast = (Component) => (props) => {
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 768px)" });
  const successToast = (msg) => toast.success(msg);
  const errorToast = (msg) => toast.error(msg);
  const newProps = {
    successToast,
    errorToast,
    ...props,
  };
  const toastStyles = {
    success: {
      style: {
        background: "#3b2a8b",
        color: "#FFFFFF",
      },
    },
    error: {
      style: {
        background: "#d1412e",
        color: "#FFFFFF",
      },
    },
  };
  return (
    <>
      <Component {...newProps} />
      <Toaster
        position={isMobileOrTablet ? "bottom-center" : "bottom-left"}
        containerStyle={{ bottom: "5%" }}
        gutter={8}
        toastOptions={toastStyles}
      />
    </>
  );
};

export default withToast;
