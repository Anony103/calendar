export const Schedule=[
    {
        id:1,
        title:"Big meeting",
        desc: "Monday is for work day",
        status: false,
        start: new Date(2023,1,5),
        end: new Date(2023,1,5),
    },
    {
        id:2,
        title:"Birthday",
        desc: "Program presentation",
        status: false,
        start: new Date(2023,1,1),
        end: new Date(2023,1,1),
    },
    {
        id:3,
        title:"Conference",
        desc: "web development progress",
        status: false,
        start: new Date(2023,1,28),
        end: new Date(2023,1,28),
    },
    {
        id:4,
        title:"Vacation",
        desc: "relax",
        status: false,
        start: new Date(2023,0,1),
        end: new Date(2023,0,20),
    }


];  

export const Days=["Sun","Mon","Tue","Wed","Thur","Friday","sat"];

export const Months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];


export const range =(end)=>{
    const {result} = Array.from({length:end}).reduce(({result,current})=>({
        result:[...result,current],
        current:current + 1
    }),{result:[],current:1}
    )
    return result;
};

export const getDaysInMonth = (month,year)=>{
return new Date(year,month + 1,0).getDate();
};

export const getSortedDays = (month,year) =>{
    const dayIndex = new Date(year, month, 1).getDay();
    return [...Days.slice(dayIndex), ...Days.slice(0, dayIndex)];
};

export const getDateObj = (day, month, year)=>{
    return new Date(year,month , day);
    };

    export const areDatesTheSame = (first, second)=>{
        return (
            first.getFullYear() === second.getFullYear() &&
            first.getMonth()  === second.getMonth() &&
            first.getDate() === second.getDate()
        );
        };

        