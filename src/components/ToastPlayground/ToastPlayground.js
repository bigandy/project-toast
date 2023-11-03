import React from "react";

import Button from "../Button";
import ToastShelf from "../ToastShelf";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];
const defaultVariant = VARIANT_OPTIONS[0];

function ToastPlayground() {
  const [toasts, setToasts] = React.useState("");
  const [selectedVariant, setSelectedVariant] = React.useState(defaultVariant);
  const [message, setMessage] = React.useState("");

  const handleDeleteToast = React.useCallback((index) => {
    // setShowMessage(false);

    console.log("delete this one from the state", index);

    // delete the item with index from the array

    setToasts((prevToasts) => {
      const nextToasts = [...prevToasts];
      nextToasts.splice(index, 1);
      return nextToasts;
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setToasts((prevToasts) => {
      return [
        ...prevToasts,
        {
          message,
          variant: selectedVariant,
          id: crypto.randomUUID(),
        },
      ];
    });
    setMessage("");
    // setSelectedVariant(defaultVariant);
  };

  const handleKeyDown = (e) => {
    if (e.code === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf onDeleteToast={handleDeleteToast} toasts={toasts} />
      <form onSubmit={handleSubmit}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                className={styles.messageInput}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((variant) => {
                return (
                  <label htmlFor={`variant-${variant}`} key={variant}>
                    <input
                      id={`variant-${variant}`}
                      type="radio"
                      name="variant"
                      value={variant}
                      checked={variant === selectedVariant}
                      onChange={(e) => setSelectedVariant(e.target.value)}
                    />
                    {variant}
                  </label>
                );
              })}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button disabled={message === ""}>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
