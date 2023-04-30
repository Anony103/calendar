
import React, {useState,} from 'react';
import styled from 'styled-components';
import { Schedule } from './data';
import Calender from './Pages/Calender';
import CalenderDemo from './Pages/CalenderDemo'; 

export const Container = styled.div`
  text-align:center ;
  `;

function App() {
  
  return (
    <Container>
      
    <Calender startingDate={new Date()} eventsObj={Schedule}/>
    {/* <CalenderDemo/> */}
  </Container>
  );
}

export default App;

// import React, { useState, useContext, useEffect } from "react";
// import "./App.css";
// import { getMonth } from "./util";
// import Month from "./components/Month";
// import GlobalContext from "./context/GlobalContext";
// import EventModal from "./components/EventModal";
// function App() {
//   const [currenMonth, setCurrentMonth] = useState(getMonth());
//   const { monthIndex, showEventModal } = useContext(GlobalContext);

//   useEffect(() => {
//     setCurrentMonth(getMonth(monthIndex));
//   }, [monthIndex]);

//   return (
//     <React.Fragment>
//       {showEventModal && <EventModal />}

//       <div className="h-screen flex flex-col">
//         <CalendarHeader />
//         <div className="flex flex-1">
//           <Sidebar />
//           <Month month={currenMonth} />
//         </div>
//       </div>
//     </React.Fragment>
//   );
// }

// export default App;
