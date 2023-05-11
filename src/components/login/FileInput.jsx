import React, { useState } from 'react';
import { Wrapper } from 'styles/login/InputStyled';

function FileInput(props) {
    const [file, setFile] = useState();

    return(
        <Wrapper required={props.required}>
            <span>프로필사진</span>
            <input type="file" id="file" onChange={(e) => setFile(e.target.files)} />
            <input type="text" value={file ? file[0].name : ""} readOnly />
            <label htmlFor="file">업로드</label>
        </Wrapper>
    );
}

export default FileInput;