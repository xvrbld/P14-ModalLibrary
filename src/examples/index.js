import React, { useState } from "react";
import { MyModal } from "../lib";

const App = () => {
  const [open, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Modal Library</h1>
      <button onClick={openModal}>Open Modal</button>
      <MyModal
        open={open} // Whether the modal is open or closed
        title="Custom Title" // The title or heading of the modal
        text="custom text" // The main content or body text of the modal
        onClose={closeModal} // Callback function to be called when the modal is closed
        onOpen={() => console.log("Modal opened")} // Callback function to be called when the modal is opened
        onConfirm={() => console.log("Confirmation action")} // Callback function to be called when a confirmation action is performed within the modal
        onCancel={() => console.log("Cancellation action")} // Callback function to be called when a cancellation action is performed within the modal
        closeOnOverlayClick={true} // Specifies whether the modal should close when the overlay (outside the modal) is clicked
        closeOnEscape={true} // Specifies whether the modal should close when the Escape key is pressed
        customClass="custom-modal" // Custom CSS class name to be added to the modal for additional styling or customization
        showCloseButton={true} // Specifies whether to display a close button in the modal header
        showFooter={true} // Specifies whether to display a footer section in the modal
        footerContent={null} // Additional content to be displayed in the footer section of the modal
        disableCloseButton={false} // Specifies whether to disable the close button in the modal header
        disableOverlayClick={false} // Specifies whether to disable closing the modal when clicking outside the modal
      />
    </div>
  );
};

export default App;