import React from 'react';


export const DateTimeFormat = ({datetime}:any) => {
    const dt = new Date(datetime);
    const year = dt.getFullYear();
    const month = dt.getMonth()+1 > 10 ? dt.getMonth()+1: '0'+(dt.getMonth()+1);
    const date = dt.getDate() > 10 ? dt.getDate(): '0'+(dt.getDate());
    const hour = dt.getHours() > 10 ? dt.getHours(): '0' + (dt.getHours());
    const minute = dt.getMinutes() > 10 ? + dt.getMinutes(): '0' + (dt.getMinutes());

    return (
        <h1>{year}.{month}.{date} {hour}:{minute}</h1>
    )
}