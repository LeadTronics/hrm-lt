import React from 'react'
// import { EVENTS } from '../../../../endpoint'
// import axios from 'axios'

const Day = ({ day, onClick }) => {

  // const user = JSON.parse(localStorage.getItem('token'));
  // const [events, setEvents] = useState([]);
  //   useEffect(() => {
  //           axios.get(EVENTS ,{ headers: {"Authorization" : `Bearer ${user}`}}).then(res => {
  //               setEvents(res.data);
  //               console.log(res.data)
  //           })
         
  //   }, [])
  const className = `day ${day.value === 'padding' ? 'padding' : ''} ${day.isCurrentDay ? 'currentDay' : ''}`;
  return (
    <div onClick={onClick} className={className}>
      {day.value === 'padding' ? '' : day.value}
      <div>
         {/* {day.date && <div className='event'>{day.eventTitle}<br></br><span>{day.eventDesc}</span></div>}  */}
         {/* {day.value && <div className='event'>{day.eventTitle}<br></br><span>{day.eventDesc}</span></div>}  */}
        {/* {events.map((d, index) => (
          <>
            {d.eventDate && <div className='event'>{d.eventTitle}<br></br><span>{d.eventDesc}</span></div>}
          </>
        ))} */}
      </div>
    </div>
  )
}
export default Day
