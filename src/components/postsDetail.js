import React, { useState } from 'react';
import Comments from './comments';
import Modal from './modal';

function PostsDetail() {
  const [modalOn, setModalOn] = useState(false);

  const onShareModal = () => {
    const current_url = window.location.href;
    navigator.clipboard.writeText(current_url).then(() => {
      setModalOn(true);
      setTimeout(() => {
        setModalOn(false);
      }, 1000);
    });
  };

  return (
    <div className="postsDetail-wrap">
      {modalOn === true ? <Modal></Modal> : null}
      <section className="postsDetail">
        <header>
          <button
            className="postsDetail-share-btn"
            onClick={() => {
              onShareModal();
            }}
          >
            ⋮
          </button>
          <h1 className="postsDetail-title title">title</h1>
          <div className="postsDetail-info-wrap">
            <span className="postsDetail-user-name">user name</span>
            <span className="postsDetail-created-date">2021.01.01</span>
          </div>
          <div className="postsDetail-tag-wrap">
            <span>자바스크립트</span>
            <span>웹개발</span>
            <span>프론트엔드</span>
          </div>
        </header>
        <div className="postsDetail-content">
          본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용
        </div>
      </section>
      <section className="postsDetail-comment">
        <h2 className="postsDetail-comment-title title">댓글</h2>
        <form>
          <textarea
            name="comment"
            className="postsDetail-comment-input"
            type="text"
            placeholder="댓글을 입력하세요"
          />
          <button className="postsDetail-comment-button" type="submit">
            댓글 작성
          </button>
        </form>
      </section>
      <ul className="comments-list">
        <Comments></Comments>
      </ul>
    </div>
  );
}

export default PostsDetail;
