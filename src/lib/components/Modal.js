import React, { useEffect } from "react";
import "./Modal.css";

const MyModal = ({
  open, // Whether the modal is open or closed
  title, // The title or heading of the modal
  text, // The main content or body text of the modal
  onClose, // Callback function to be called when the modal is closed
  onOpen, // Callback function to be called when the modal is opened
  onConfirm, // Callback function to be called when a confirmation action is performed within the modal
  onCancel, // Callback function to be called when a cancellation action is performed within the modal
  confirmText, // Default text for the Confirm button
  cancelText, // Default text for the Cancel button
  closeOnOverlayClick, // Specifies whether the modal should close when the overlay (outside the modal) is clicked
  closeOnEscape, // Specifies whether the modal should close when the Escape key is pressed
  customClass, // Custom CSS class name to be added to the modal for additional styling or customization
  showCloseButton, // Specifies whether to display a close button in the modal header
  showFooter, // Specifies whether to display a footer section in the modal
  footerContent, // Additional content to be displayed in the footer section of the modal
  disableCloseButton, // Specifies whether to disable the close button in the modal header
  disableOverlayClick, // Specifies whether to disable closing the modal when clicking outside the modal
}) => {
  useEffect(() => {
    if (open && onOpen) {
      onOpen();
    }
  }, [open, onOpen]);
  
  const handleOverlayClick = () => {
    if (closeOnOverlayClick && onClose) {
      onClose();
    }
  };

  const handleKeyDown = (event) => {
    if (closeOnEscape && event.key === "Escape" && onClose) {
      onClose();
    }
  };

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <div
      className={`modal ${open ? "active" : ""}`}
      onClick={disableOverlayClick ? undefined : handleOverlayClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className={`modal-content ${customClass}`}>
        {/* Close button */}
        {showCloseButton && !disableCloseButton && (
          <button className="modal-cross" onClick={onClose}>
            X
          </button>
        )}

        {/* Modal title */}
        {title && <h1>{title}</h1>}

        {/* Modal text/content */}
        {text && <p>{text}</p>}

        {/* Footer section */}
        {showFooter && (
          <div className="modal-footer">
            {/* Additional footer content */}
            {footerContent}

            {/* Confirm button */}
            {onConfirm && (
              <button className="modal-confirm" onClick={handleConfirm}>
                {confirmText}
              </button>
            )}

            {/* Cancel button */}
            {onCancel && (
              <button className="modal-cancel" onClick={handleCancel}>
                {cancelText}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyModal;