import React, { useState, useEffect } from 'react'
import { Picker, Button, Calendar } from 'antd-mobile/es'
import dayjs from 'dayjs'

export default function(props) {
  const [cityShow, setCityShow] = useState(false)
  const [timeShow, setTimeShow] = useState(false)
  const [citys] = useState([
    [
      {
        label: '杭州',
        value: 'hangzhou',
      },
      {
        label: '深圳',
        value: 'shenzhen',
      },
      {
        label: '广州',
        value: 'guangzhou',
      },
    ],
  ])
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
    console.log(value[0])
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
        <Picker
          title="城市"
          columns={citys}
          value={selectedCity}
          visible={cityShow}
          onClose={() => {
            setCityShow(false)
          }}
          onConfirm={handleCitySelect}
        />
        <div id="select-addr">
          {
            citys[0].find(item => selectedCity.includes(item.value))
              .label
          }
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
      <Button color="warning" block className="search-button">
        搜索民宿
      </Button>
      <Calendar
        selectionMode="range"
        onChange={value => handleTimeSelect(value)}
        className={timeShow ? '' : 'hidden'}
      />
    </div>
  )
}
