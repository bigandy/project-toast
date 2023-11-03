import React from "react";

function useEscape(callback) {
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key !== "Escape") {
        return;
      }

      callback();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [callback]);
}

export default useEscape;
