import React from 'react';


export const DateTimeFormat = ({datetime, text}:any) => {
    const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
    const dateTime = new Date(datetime);    
    const dt = new Date(dateTime.getTime() + KR_TIME_DIFF)
    const year = dt.getFullYear();
    const month = dt.getMonth() + 1 > 10 ? dt.getMonth()+1: '0'+(dt.getMonth()+1);
    const date = dt.getDate() > 10 ? dt.getDate(): '0'+(dt.getDate());
    const hour = dt.getHours() > 10 ? dt.getHours(): '0' + (dt.getHours());
    const minute = dt.getMinutes() > 10 ? + dt.getMinutes(): '0' + (dt.getMinutes());

    return (
        <h1>{year}.{month}.{date} {hour}:{minute} {text}</h1>
    )
}