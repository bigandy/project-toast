import React from "react";

export const ToastContext = React.createContext({});

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key !== "Escape") {
        return;
      }

      setToasts([]);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
