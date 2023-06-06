# Xavier Modal Library

[![npm version](https://badge.fury.io/js/xavier-modal-library.svg)](https://badge.fury.io/js/xavier-modal-library)

Xavier Modal Library is a lightweight and customizable npm package for creating modal dialogs in React applications. With this library, you can easily add modal functionality to your projects, allowing users to display important information, confirm actions, or gather user input in a modal overlay.

## Features

- Simple and intuitive API for creating modals
- Customizable modal title, content, and footer
- Callback functions for handling modal events such as opening, closing, confirming, and canceling
- Configurable options for closing the modal on overlay click and Escape key press
- Ability to disable the close button and overlay click functionality
- Extensible with custom CSS classes for easy styling and customization

## Installation

You can install the Xavier Modal Library via npm. Make sure you have npm installed, then run the following command:

```bash
npm install xavier-modal-library
```

## Usage

To use the Xavier Modal Library in your React project, follow these steps:

* Import the MyModal component from the library:

Example :

```jsx
import MyModal from 'xavier-modal-library';
```

* Render the MyModal component in your React component, providing the necessary props:

Example :

```jsx
import React, { useState } from 'react';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>

      <MyModal
        open={modalOpen}
        title="Sample Modal"
        text="This is the content of the modal."
        onClose={handleCloseModal}
        // Add more props as needed
      />
    </div>
  );
};

export default App;
```

* Customize the MyModal component by passing additional props:

Example :

```jsx
<MyModal
  open={modalOpen}
  title="Sample Modal"
  text="This is the content of the modal."
  onClose={handleCloseModal}
  onConfirm={handleConfirmAction}
  onCancel={handleCancelAction}
  showCloseButton={true}
  showFooter={true}
  footerContent={<p>Additional footer content goes here.</p>}
  // Add more props as needed
/>
```

For a complete list of available props and their descriptions, refer to the Props section.

## Props

The `MyModal` component accepts the following props:

- `open` (boolean, required): Whether the modal is open or closed.
- `title` (string): The title or heading of the modal.
- `text` (string): The main content or body text of the modal.
- `onClose` (function): Callback function to be called when the modal is closed.
- `onOpen` (function): Callback function to be called when the modal is opened.
- `onConfirm` (function): Callback function to be called when a confirmation action is performed within the modal.
- `onCancel` (function): Callback function to be called when a cancellation action is performed within the modal.
- `closeOnOverlayClick` (boolean): Specifies whether the modal should close when the overlay (outside the modal) is clicked.
- `closeOnEscape` (boolean): Specifies whether the modal should close when the Escape key is pressed.
- `customClass` (string): Custom CSS class name to be added to the modal for additional styling or customization.
- `showCloseButton` (boolean): Specifies whether to display a close button in the modal header.
- `showFooter` (boolean): Specifies whether to display a footer section in the modal.
- `footerContent` (node): Additional content to be displayed in the footer section of the modal.
- `disableCloseButton` (boolean): Specifies whether to disable the close button in the modal header.
- `disableOverlayClick` (boolean): Specifies whether to disable closing the modal when clicking outside the modal.