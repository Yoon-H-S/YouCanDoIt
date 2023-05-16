// 외부 import
import React, { useState, useEffect } from 'react';
// 내부 import
import { Wrapper } from 'styles/login/InputStyled';

function FileInput(props) {
    const [file, setFile] = useState();

    // 부모에게 state값 전달
    useEffect(() => {
        props.fileChange(file);
    }, [file])
    
    const onChange = (e) => {
        setFile(e.target.files[0]);
    };
    
    return(
        <Wrapper required={props.required}>
            <span>프로필사진</span>
            <input type="file" id="file" name="profilePicture" onChange={onChange} />
            <input type="text" value={file ? file.name : ""} readOnly />
            <label htmlFor="file">업로드</label>
        </Wrapper>
    );
}

export default FileInput;