import React, {useState} from 'react';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from 'draftjs-to-html';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";



export const WysiwygEditor = (props:any) => {
    const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty());

    const onChange = (content:string) => {
        props.getContent(content);
    } 
    return (
        <Editor
            placeholder="본문을 적어주세요"
            editorState={editorState}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
            onEditorStateChange={newState => {
                setEditorState(newState);
                onChange(
                    draftToHtml(
                        convertToRaw(
                            newState.getCurrentContent()
                        )
                    )
                );
            }}
            toolbar={{
                options: [
                    'inline', 'blockType', 'fontSize', 'list', 'textAlign', 'image',
                    'history', 'embedded', 'emoji', 'image'],
                inline: { inDropdown: true },
                list: { inDropdown: true },
                textAlign: { inDropdown: true },
                link: { inDropdown: true },
                history: { inDropdown: true },
            }}
        />
    )
}