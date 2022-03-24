import React from "react";
import toast, { Toaster } from "react-hot-toast";

const withToast = (Component) => (props) => {
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
        position="bottom-left"
        containerStyle={{ bottom: "5%" }}
        gutter={8}
        toastOptions={toastStyles}
      />
    </>
  );
};

export default withToast;
