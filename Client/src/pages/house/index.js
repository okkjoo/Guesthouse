import React, { useEffect } from 'react'
import Banner from './components/Banner'
import CommentList from './components/CommentList'
import Footer from './components/Footer'
import Info from './components/Info'
import { useStoreHook } from 'think-react-store'
import { useObserverHook } from '@/hooks'
import { CommonEnum } from '@/enums'
import { useLocation } from 'react-router-dom'

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
      resetData,
      order,
      hasOrderAsync,
      addOrderAsync,
      delOrderAsync,
    },
  } = useStoreHook()

  const { query } = useLocation()

  const handleBtnClick = id => {
    if (!id) {
      addOrderAsync({
        id: query?.id,
      })
    } else {
      delOrderAsync({
        id: query?.id,
      })
    }
  }

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
    getDetailAsync({
      id: query?.id,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    getCommentsAsync({
      id: query?.id,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reloadCommentsNum]) //监听reloadCommentsNum
  useEffect(() => {
    return () => {
      resetData({
        detail: {},
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    hasOrderAsync({
      id: query?.id,
    })
  }, [hasOrderAsync, query.id])
  return (
    <div className="house-page">
      {/* 顶部 banner */}
      <Banner banner={detail?.banner} />

      {/* 房屋信息 */}
      <Info
        detail={detail?.info}
        order={order}
        btnClick={handleBtnClick}
      />

      {/* 评论列表 */}
      <CommentList comments={comments} showLoading={showLoading} />
      {/* 底部 footer ：悬浮 + 评论弹窗按钮 */}
      <Footer />
    </div>
  )
}

export default House
