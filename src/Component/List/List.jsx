import React from 'react'
import './List.css'
import detail from '../../assets/detail'
import Card from '../Card/Card'



const List = () => {
  return (
    <div className="list">
        <h1>Event</h1>
        <hr/>
        <div className="list-item">
            {detail.map((item,i) => {
                return < Card key={i} id={item.event_id} image={item.event_image} name={item.event_name} coordinator={item.event_coordinator} teacher={item.event_teacher_coordinator} date={item.event_date} time={item.event_time} contact={item.contact_event.phone} about={item.event_about}
   
                />
            })}
        </div>

    </div>
  )
}

export default List