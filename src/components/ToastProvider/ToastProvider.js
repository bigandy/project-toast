import React from "react";

export const ToastContext = React.createContext(null);

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState("");

  const deleteToast = React.useCallback((index) => {
    setToasts((prevToasts) => {
      const nextToasts = [...prevToasts];
      nextToasts.splice(index, 1);
      return nextToasts;
    });
  }, []);

  const addToast = React.useCallback((message, variant) => {
    setToasts((prevToasts) => {
      return [
        ...prevToasts,
        {
          message,
          variant,
          id: crypto.randomUUID(),
        },
      ];
    });
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, deleteToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
