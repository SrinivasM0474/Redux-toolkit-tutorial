import React from "react";
import { closeModal } from "../features/modal/modalSlice";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside>
      <div className="modal-container">
        <div className="modal">
          <h4>remove all items</h4>
          <div className="btn-container">
            <button
              type="button"
              className="btn confirm-btn"
              onClick={() => {
                dispatch(clearCart());
                dispatch(closeModal());
              }}
            >
              Confirm
            </button>
            <button
              type="button"
              className="btn clear-btn"
              onClick={() => {
                dispatch(closeModal());
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
