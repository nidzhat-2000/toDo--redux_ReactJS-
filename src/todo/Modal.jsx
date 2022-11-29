import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import modals from '../modals';

function Modal() {
  const { data, name } = useSelector(state => state.modal);
  console.log(data);
  const modal = modals.find(m => m.name === name);
  console.log(modals);
  console.log(modal);
  // console.log(JSON.stringify(modal));

  return <div>
    {/* <modal.element /> */}
    </div>;
}

export default Modal;
