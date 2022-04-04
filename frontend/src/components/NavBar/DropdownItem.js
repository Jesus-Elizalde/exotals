import React, { useState } from "react";

import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";

import { Modal } from "../../context/Modal";
import LoginForm from "../LoginFormModal/LoginForm";
import SignUpPage from "../SignupFormModal/SignupForm";

function DropdownItem({ text }) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

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
  } else if (text === "Sign Up") {
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
  } else if (text === "Sign Out") {
    content = (
      <>
        <a
          className="menu-item"
          onClick={() => dispatch(sessionActions.logout())}
        >
          {text}
        </a>
      </>
    );
  } else if (text === "Demo Login") {
    content = (
      <>
        <a
          className="menu-item"
          onClick={() =>
            dispatch(
              sessionActions.login({
                credential: "Demo-User",
                password: "password",
              })
            )
          }
        >
          {text}
        </a>
      </>
    );
  } else if (text === "Rent Your Car") {
    content = (
      <>
        <a href="/mycars" className="menu-item">
          {text}
        </a>
      </>
    );
  } else {
    content = <a className="menu-item nonfuction">{text}</a>;
  }

  return content;
}

export default DropdownItem;
