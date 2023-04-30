import styled from 'styled-components';
import { useState } from 'react';
import {Days, range,Months, getDaysInMonth, getSortedDays, areDatesTheSame, getDateObj} from '../data.js'
import ScheduleModal from '../Components/ScheduleModal.jsx';



export const Container = styled.div`
width: 99%;  
height: 100vh;
border:0.5px solid #f3f3f3;
margin: 5px;
-webkit-box-shadow:2px 4px 10px 1px rgba(0,0,0,0.47);
 box-shadow: 2px 4px 10px 1px rgba(201,201,201,0.47);
 border-radius:20px ;
`;
export const CalendarHead = styled.div`
width: 100%;  
height: 40px;
display: flex;
justify-content: space-around;
align-items:center ;
font-size:24px ;
border:0.5px solid #f3f3f3;

`;

export const IconContainer = styled.div`
  cursor: pointer;
`;

export const Desc = styled.div`
  
`;
export const SevenColGrid = styled.div`
  width:100% ;
  display:grid ;
  grid-template-columns:repeat(7,1fr) ;
  height:27px ;
`;
export const HeadDay = styled.span`
  text-align:center ;
  font-size:1.2rem ;
`;
export const CalendarBody = styled.div`
  height: calc(100% - 27px - 40px) ;
  display:grid ;
  grid-template-columns:repeat(7,1fr) ;
  grid-template-rows:repeat(${({fourcol}) => fourcol ? 4 : 5},1fr) ;
`;
export const StyledDay = styled.div`
  border: 1px solid #f3f3f3;
  text-align:right ;
  display: flex;
  ${({active}) => active && 'background: purple'};
  cursor: pointer;
  margin: 2px 2px;
  font-weight: 500;
  font-size: 0.8rem;
  transition: all 0.25s ease;
  :hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px -10px rgba(24, 90, 219, 0.6);
  background: #185adb;
  }
`;

export const StyledEvent = styled.span`
  display:grid;
  padding:10px 5px ;
  text-align:center;
  background:darkblue ;
  width:100% ;
  height:100% ;
  position:relative ;
`;

export const Day = styled.p`
  padding:12px 25px ;
  text-align:left ;
  
`;

const Calender = ({startingDate, eventsObj, addEvent}) => {
    const [currentMonth,setCurrentMonth] =useState(startingDate.getMonth())
    const [currentYear,setCurrentYear] =useState(startingDate.getFullYear())
    const DAYSINMONTH =getDaysInMonth(currentMonth,currentYear)
    
    const previousMonth = () => {
      if(currentMonth > 0) {
      setCurrentMonth((prev) => prev - 1);
    }else{
      setCurrentMonth(11);
      setCurrentYear((prev)=> prev - 1);
    }
  };

    const nextMonth = () => {
      if(currentMonth < 11) {
      setCurrentMonth((prev) => prev + 1);
    }else{
      setCurrentMonth(0);
      setCurrentYear((prev)=> prev + 1);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const viewEvent =()=>{
    
  }

  return (
    <Container>
              <CalendarHead>
                <IconContainer>

              <ion-icon className="icon" onClick={previousMonth} name="arrow-back-circle-outline"></ion-icon>
                </IconContainer>
            <Desc>{Months[currentMonth]} {currentYear}</Desc>
            <ion-icon  name="arrow-forward-circle-outline" onClick={nextMonth}></ion-icon>
        </CalendarHead>
        <SevenColGrid>
           {getSortedDays(currentMonth,currentYear).map((day)=>
            <HeadDay>{day}</HeadDay>
            )}
        </SevenColGrid>
        <CalendarBody fourcol={DAYSINMONTH === 28}>
            {range(DAYSINMONTH).map((day)=>(
                <StyledDay active={areDatesTheSame(new Date(), getDateObj(day, currentMonth, currentYear))} >
                  <Day>{day}</Day>
                  {
                    eventsObj.map((en,index)=>
                    areDatesTheSame(getDateObj(day, currentMonth, currentYear), en.start) 
                    && <StyledEvent   onClick={() => setIsOpen(true) } id={index}>{en.title}
                     {isOpen && <ScheduleModal setIsOpen={setIsOpen} en={en} key={index} />}
                     </StyledEvent> 
                    
                    
                    )
                  }
                  
                  </StyledDay>
                ))}
                {/* {isOpen && <ScheduleModal setIsOpen={setIsOpen} />} */}
        </CalendarBody>
    </Container>
  )
}

export default Calender;