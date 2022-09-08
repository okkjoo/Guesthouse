import React from 'react'
import { ShowLoading } from '@/components'
import { timer } from '@/utils'

const CommentList = props => {
  // console.log(props)
  return (
    <div className="comment">
      <h1 className="comment-title">评论</h1>
      <div className="comment-lists">
        {props?.comments?.map(item => (
          <div className="comment-lists_item" key={item?.id}>
            <img
              alt="user"
              className="avatar"
              src={item?.user?.avatar}
            />
            <div className="right">
              <div className="right-top">
                <p>{item?.user?.username}</p>
                <p>{timer(item?.createTime, '')}</p>
              </div>
              <div className="right-bottom">{item?.msg}</div>
            </div>
          </div>
        ))}

        <ShowLoading
          showLoading={props?.showLoading}
          style={{ marginTop: '-10px' }}
        />
      </div>
    </div>
  )
}

export default CommentList
