import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Title = styled.h1`
  
`;

export const Desc = styled.h2`
  
`;
export const ScheduleContainer = styled.div`
display: flex;
width: 80%;

`;
export const EventText = styled.input`
  width: 60%;
  margin-left:280px ;
  margin-right:10px ;
  
  
`;

export const Appointment = styled.button`
  width:40% ;
  
`;

const locales = {
  'en-US': require("date-fns/locale/en-US"),
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})


export const schedule=[
  {
      title:"Big meeting",
      allDay: true,
      start: new Date(2023,1,5),
      end: new Date(2023,1,5),
  },
  {
      title:"Vacation",
      allDay: false,
      start: new Date(2023,1,1),
      end: new Date(2023,1,1),
  },
  {
      title:"Conference",
      allDay: false,
      start: new Date(2023,1,28),
      end: new Date(2023,1,28),
  }

]


const CalenderDemo = () => {
  const [newSchedule, setNewSchedule] = useState({title:"",Start:"",end:""})
  const [allSchedule, setAllSchedule] = useState(schedule)
  
  function handleAddSchedule(){
    for (let i=0; i<allSchedule.length; i++){

const d1 = new Date (allSchedule[i].start);
const d2 = new Date(newSchedule.start);
const d3 = new Date(allSchedule[i].end);
const d4 = new Date(newSchedule.end);

 if (
  ( (d1  <= d2) && (d2 <= d3) ) || ( (d1  <= d4) &&
    (d4 <= d3) )
  )
{   
    alert("CLASH"); 
    break;
 }

}
    setAllSchedule([...allSchedule,newSchedule])
  }
  return (
    <Container>
      <Title>Calender</Title>
      <Desc>Add New Schedule</Desc>
      <ScheduleContainer>
        <EventText type="text" placeholder='Add Title' 
        value={newSchedule.title} onChange={(e) => setNewSchedule({...newSchedule, title:e.target.value})}
        />
        <DatePicker className='datepicker' placeholderText='"start Date'
        selected={newSchedule.start} onChange={(start)=> setNewSchedule({...newSchedule,start})}/>
        <DatePicker  placeholderText='"End Date'
        selected={newSchedule.end} onChange={(end)=> setNewSchedule({...newSchedule,end})}/>
        <Appointment onClick={handleAddSchedule}>Add Schedule</Appointment>
      </ScheduleContainer>
    <Calendar
      localizer={localizer}
      events={allSchedule}
      startAccessor="start"
      endAccessor="end"
      style={{  height: 500, margin: "50px" }}
  />
    </Container>
  )
}

export default CalenderDemo
