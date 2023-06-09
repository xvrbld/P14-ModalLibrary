import React, { useEffect } from "react";
import "./Modal.css";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const MyModal = ({
  open,
  // Whether the modal is open or closed
  title,
  // The title or heading of the modal
  text,
  // The main content or body text of the modal
  onClose,
  // Callback function to be called when the modal is closed
  onOpen,
  // Callback function to be called when the modal is opened
  onConfirm,
  // Callback function to be called when a confirmation action is performed within the modal
  onCancel,
  // Callback function to be called when a cancellation action is performed within the modal
  confirmText,
  // Default text for the Confirm button
  cancelText,
  // Default text for the Cancel button
  closeOnOverlayClick,
  // Specifies whether the modal should close when the overlay (outside the modal) is clicked
  closeOnEscape,
  // Specifies whether the modal should close when the Escape key is pressed
  customClass,
  // Custom CSS class name to be added to the modal for additional styling or customization
  showCloseButton,
  // Specifies whether to display a close button in the modal header
  showFooter,
  // Specifies whether to display a footer section in the modal
  footerContent,
  // Additional content to be displayed in the footer section of the modal
  disableCloseButton,
  // Specifies whether to disable the close button in the modal header
  disableOverlayClick // Specifies whether to disable closing the modal when clicking outside the modal
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
  const handleKeyDown = event => {
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
  return /*#__PURE__*/_jsx("div", {
    className: `modal ${open ? "active" : ""}`,
    onClick: disableOverlayClick ? undefined : handleOverlayClick,
    onKeyDown: handleKeyDown,
    tabIndex: 0,
    children: /*#__PURE__*/_jsxs("div", {
      className: `modal-content ${customClass}`,
      children: [showCloseButton && !disableCloseButton && /*#__PURE__*/_jsx("button", {
        className: "modal-cross",
        onClick: onClose,
        children: "X"
      }), title && /*#__PURE__*/_jsx("h1", {
        children: title
      }), text && /*#__PURE__*/_jsx("p", {
        children: text
      }), showFooter && /*#__PURE__*/_jsxs("div", {
        className: "modal-footer",
        children: [footerContent, onConfirm && /*#__PURE__*/_jsx("button", {
          className: "modal-confirm",
          onClick: handleConfirm,
          children: confirmText
        }), onCancel && /*#__PURE__*/_jsx("button", {
          className: "modal-cancel",
          onClick: handleCancel,
          children: cancelText
        })]
      })]
    })
  });
};
export default MyModal;