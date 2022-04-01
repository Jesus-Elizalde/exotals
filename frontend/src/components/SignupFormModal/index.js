import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import SignUpPage from "./SignupForm";

function SignupModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Sign up</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignUpPage />
        </Modal>
      )}
    </>
  );
}

export default SignupModal;
