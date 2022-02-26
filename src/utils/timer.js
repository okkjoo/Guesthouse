import dayjs from 'dayjs'

export default function timer(time, type = 'all') {
  return dayjs(time).format(
    type === 'all' ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD',
  )
}
