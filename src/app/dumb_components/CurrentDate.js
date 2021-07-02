import dayjs from 'dayjs'

export default () => <div style={{ fontSize: '12px' }}>{dayjs().format('dddd MMM D, YYYY')}</div>
