import React from 'react'

const CommentList = () => {
  return (
    <div className="comment">
      <h1 className="comment-title">评论</h1>
      <div className="comment-lists">
        <div className="comment-lists_item">
          <img
            alt="user"
            className="avatar"
            src="https://gitee.com/okkjoo/image-bed/raw/master/imgs/icon00.jpg"
          />
          <div className="right">
            <div className="right-top">
              <p>user</p>
              <p>time</p>
            </div>
            <div className="right-bottom">评论内容</div>
          </div>
        </div>
        <div className="comment-lists_item">
          <img
            alt="user"
            className="avatar"
            src="https://gitee.com/okkjoo/image-bed/raw/master/imgs/icon00.jpg"
          />
          <div className="right">
            <div className="right-top">
              <p>user</p>
              <p>time</p>
            </div>
            <div className="right-bottom">评论内容</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentList
