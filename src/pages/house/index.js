import React, { useEffect } from 'react'
import Banner from './components/Banner'
import CommentList from './components/CommentList'
import Footer from './components/Footer'
import Info from './components/Info'
import { useStoreHook } from 'think-react-store'
import { useObserverHook } from '@/hooks'
import { CommonEnum } from '@/enums'

import './index.less'

const House = () => {
  const {
    house: {
      detail,
      comments,
      showLoading,
      reloadCommentsNum,
      getDetailAsync,
      getCommentsAsync,
      reloadComments,
    },
  } = useStoreHook()

  useObserverHook(
    `#${CommonEnum.LOADING_ID}`,
    entries => {
      // console.log(`#${CommonEnum.LOADING_ID}`)
      // console.log(entries)
      //最后一个元素显示出来时调用reloadComments
      if (
        comments &&
        comments.length &&
        showLoading &&
        entries[0].isIntersecting
      ) {
        reloadComments()
        // console.log('reloadCommentsNum', reloadCommentsNum)
      }
    },
    [comments, showLoading],
  )

  useEffect(() => {
    getDetailAsync({})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    getCommentsAsync({})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reloadCommentsNum]) //监听reloadCommentsNum

  return (
    <div className="house-page">
      {/* 顶部 banner */}
      <Banner banner={detail?.banner} />

      {/* 房屋信息 */}
      <Info detail={detail?.info} />

      {/* 评论列表 */}
      <CommentList comments={comments} showLoading={showLoading} />
      {/* 底部 footer ：悬浮 + 评论弹窗按钮 */}
      <Footer />
    </div>
  )
}

export default House
