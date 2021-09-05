import React from 'react';


export const DateFormat = ({datetime}:any) => {
    const dt = new Date(datetime);
    const year = dt.getFullYear();
    const month = dt.getMonth()+1 > 10 ? dt.getMonth()+1: '0'+(dt.getMonth()+1);
    const date = dt.getDate() > 10 ? dt.getDate(): '0'+(dt.getDate());

    return (
        <h1>{year}.{month}.{date}</h1>
    )
}