import React, { createContext, useContext, useState } from "react";

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);

  const showToast = (message, action) => {
    setToast({ message, action });

    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {toast && (
        <div className="fixed bottom-6 right-6 bg-white dark:bg-neutral-800 shadow-lg rounded-lg p-4 border border-yellow-300 z-50 animate-slide-up">
          <p className="text-yellow-900 dark:text-yellow-300 font-medium">
            {toast.message}
          </p>

          {toast.action && (
            <button
              onClick={toast.action}
              className="mt-2 bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition"
            >
              Go to Cart
            </button>
          )}
        </div>
      )}
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
