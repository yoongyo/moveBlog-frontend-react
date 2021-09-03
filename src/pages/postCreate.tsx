import React, {useState} from 'react';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from 'draftjs-to-html';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Link } from 'react-router-dom';
import  '../styles/editorStyle.css'
import { BACKEND_URL } from '../api/backendURL';
import { useHistory } from 'react-router-dom';


export const PostCreate = () => {

    const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty());
    const [content, setContent] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    let history = useHistory();

    
    const onClick = () => {
        fetch(BACKEND_URL + 'posts/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({title: title, content: content})
        })
        .then(res => {
            console.log(res)
            history.push('/')
        })
    }

    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }


    return (
        <div className="max-w-4xl mx-auto py-12 px-6">
            <form>
                <div className="py-12">
                    <input 
                        className="w-full h-9 outline-none border-b focus:border-secondary hover:border-secondary" 
                        placeholder="제목" 
                        onChange={onChangeTitle}
                    />
                </div>
                <div>
                    <Editor
                        placeholder="본문을 적어주세요"
                        editorState={editorState}
                        wrapperClassName="wrapper-class"
                        editorClassName="editor-class"
                        toolbarClassName="toolbar-class"
                        onEditorStateChange={newState => {
                            setEditorState(newState);
                            setContent(
                                draftToHtml(
                                    convertToRaw(
                                        newState.getCurrentContent()
                                    )
                                )
                            );
                            console.log(content);
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
                </div>
                <div className="buttons flex my-1 py-12">
                    <button className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto"><Link to="/">Cancel</Link></button>
                    <button className="btn border border-secondary p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-secondary" type="button" onClick={onClick}>Post</button>
                </div>
            </form>
        </div>
    )
}