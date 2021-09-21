import React, {useState} from 'react';

import MDEditor from '@uiw/react-md-editor';


export const MarkDownEditor = ({setContent, content}: any) => {
    return (
        <MDEditor
            value={content}
            onChange={(val) => setContent(val!)}  
            preview={'edit'} 
        />
    )
}