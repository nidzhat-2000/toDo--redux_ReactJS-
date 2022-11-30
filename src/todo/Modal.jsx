import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import modals from '../modals';
import { closeModal } from '../stores/modal';

function Modal() {
  console.log(modals);

  const { data, name } = useSelector(state => state.modal);
  const modal = modals.find(m => console.log(m));
  const modal2 = modals[0];
  console.log(modal2);

  const dispatch = useDispatch();

  const close = () => {
    dispatch(closeModal());
  };

  return (
    <div className="modal">
      <div className="modal-inner">
        <modal2.element close={close} data={data} />
      </div>
    </div>
  );
}

export default Modal;
