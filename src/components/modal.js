import React from 'react';

function Modal() {
  const SUCCESS_TEXT = '복사가 완료 되었습니다 😜';

  return (
    <aside className="modal">
      <h2 className="modal-title">{SUCCESS_TEXT}</h2>
    </aside>
  );
}

export default Modal;
