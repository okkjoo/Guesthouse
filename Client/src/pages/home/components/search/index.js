import React, { useState, useEffect, memo } from 'react'
import { Picker, Button, Calendar, Toast } from 'antd-mobile/es'
import dayjs from 'dayjs'
import { useHistory } from 'react-router-dom'

function Search(props) {
  const { citys, citysLoading } = props
  const [cityShow, setCityShow] = useState(false)
  const [timeShow, setTimeShow] = useState(false)
  // const [citys] = useState([
  //   [
  //     {
  //       label: '杭州',
  //       value: 'hangzhou',
  //     },
  //     {
  //       label: '深圳',
  //       value: 'shenzhen',
  //     },
  //     {
  //       label: '广州',
  //       value: 'guangzhou',
  //     },
  //   ],
  // ])
  const [selectedCity, setSelectedCity] = useState(['shenzhen'])

  const [times, setTimes] = useState('可选时间')
  const handleCitySelect = value => {
    // console.log(value)
    setSelectedCity(value)
  }
  const handleTimeSelect = value => {
    setTimeShow(false)
    setTimes(
      dayjs(value[0]).format('YYYY-MM-DD') +
        ' ~ ' +
        dayjs(value[1]).format('YYYY-MM-DD'),
    )
    // console.log(value[0])
  }
  const history = useHistory()
  const handleSearchClick = () => {
    if (!times.includes('~')) {
      Toast.show({
        icon: 'fail',
        content: '请选择时间',
      })
      return
    }
    history.push({
      pathname: '/search',
      query: {
        code: selectedCity,
        startTime: times.split('~')[0],
        endTime: times.split('~')[1],
      },
    })
  }
  // console.log(selectedCity.includes('shenzhen'))
  // citys[0].forEach(item => {
  //   console.log(item)
  // })
  // console.log(
  //   citys[0].find(item => selectedCity.includes(item.value)),
  // )
  useEffect(() => {}, [])

  return (
    <div className="search">
      {/* 可选城市 */}
      <div className="search-addr">
        <Button
          onClick={() => {
            setCityShow(true)
          }}
        >
          可选城市
        </Button>
        {
          <Picker
            title="城市"
            columns={!citysLoading ? citys : [[]]}
            value={selectedCity}
            visible={!citysLoading && cityShow}
            onClose={() => {
              setCityShow(false)
            }}
            onConfirm={handleCitySelect}
          />
        }

        <div id="select-addr">
          {citys &&
            citys[0].find(item => selectedCity.includes(item.value))
              .label}
        </div>
      </div>
      {/* 可选时间 */}
      <div
        className="search-time"
        onClick={() => setTimeShow(!timeShow)}
      >
        <p className="search-time_left">住房时间</p>
        <p className="search-time_right">{times}</p>
      </div>
      {/* 点击按钮 */}
      <Button
        color="warning"
        block
        className="search-button"
        onClick={handleSearchClick}
      >
        搜索酒店
      </Button>
      <Calendar
        selectionMode="range"
        onChange={value => handleTimeSelect(value)}
        className={timeShow ? '' : 'hidden'}
      />
    </div>
  )
}
const areaEqual = (preProps, nextProps) => {
  // console.log(preProps, nextProps)
  if (
    preProps === nextProps &&
    preProps.citysLoading === nextProps.citysLoading
  ) {
    return true
  }
  return false
}
export default memo(Search, areaEqual)
