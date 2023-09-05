import { useState } from "react";
import Modal from "./Modal";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <h1>My App</h1>
      <button onClick={openModal}>Open Modal</button>

      {/* Render the Modal component with its props */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div>
          <h2>Modal Content</h2>
          <p>This is the content of the modal.</p>
        </div>
      </Modal>
    </div>
  );
}

export default App;
