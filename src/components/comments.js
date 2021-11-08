import React from 'react';

function Comments() {
  return (
    <li className="comment">
      <h2 className="comment-user-name">김철수</h2>
      <span className="comment-created-date">2021.01.01</span>
      <p className="comment-contents">댓글내용</p>
    </li>
  );
}

export default Comments;
