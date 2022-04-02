import React, { useState } from "react";

import { Modal } from "../../context/Modal";
import LoginForm from "../LoginFormModal/LoginForm";
import SignUpPage from "../SignupFormModal/SignupForm";

function DropdownItem({ text }) {
  const [showModal, setShowModal] = useState(false);
  let content = <p>not working</p>;
  if (text === "Login") {
    content = (
      <>
        <a className="menu-item" onClick={() => setShowModal(true)}>
          {text}
        </a>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <LoginForm />
          </Modal>
        )}
      </>
    );
  }
  if (text === "Sign Up") {
    content = (
      <>
        <a className="menu-item" onClick={() => setShowModal(true)}>
          {text}
        </a>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <SignUpPage />
          </Modal>
        )}
      </>
    );
  }
  if (text === "Demo User") {
    content = (
      <>
        <a className="menu-item" onClick={() => setShowModal(true)}>
          {text}
        </a>
      </>
    );
  }
  return content;
}

export default DropdownItem;
