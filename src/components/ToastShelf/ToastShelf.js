import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, onDeleteToast }) {
  return (
    <ol className={styles.wrapper}>
      {Boolean(toasts.length > 0) &&
        toasts.map((toast, index) => {
          return (
            <li className={styles.toastWrapper} key={toast.id}>
              <Toast
                variant={toast.variant}
                handleDismiss={() => onDeleteToast(index)}
                message={toast.message}
              />
            </li>
          );
        })}
    </ol>
  );
}

export default ToastShelf;
