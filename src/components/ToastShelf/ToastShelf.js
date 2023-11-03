import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider";

function ToastShelf() {
  const { toasts, deleteToast } = React.useContext(ToastContext);
  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {Boolean(toasts?.length > 0) &&
        toasts?.map((toast, index) => {
          return (
            <li className={styles.toastWrapper} key={toast.id}>
              <Toast
                variant={toast.variant}
                handleDismiss={() => deleteToast(index)}
                message={toast.message}
              />
            </li>
          );
        })}
    </ol>
  );
}

export default ToastShelf;
