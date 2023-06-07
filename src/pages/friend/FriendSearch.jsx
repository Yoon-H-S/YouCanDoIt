import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 736px;
  margin: 10px auto;
`;

const ID_CHECK = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 16px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 650px;
  height: 40px;
  border-bottom: 1px solid #B1B1B1;
`;

const Input = styled.input`
  width: 660px;
  height: 90%;
  font-size:13px;
  color: #BABABA; 
  background-color: none;
  border: none;
  padding: 10px 0px 3px 8px;
`;

const Button = styled.button`
  width: 80px;
  height: 34px;
  border-radius: 5px;
  color: #FFFFFF;
  background-color: #0077E4;
  cursor: pointer;
`;

const Divider = styled.div`
  width: 740px;
  height: 1px;
  border-bottom: 1px dashed #B1B1B1;
  margin-top: 20px;
`;

const GrayBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  background-color: #F4F4F4;
  border: 1px solid #B1B1B1;
  width: 740px;
  height: 35px;
  padding: 0 10px;
  margin-top: 20px;
  padding: 10px 11px 3px 8px;
`;

const MyIDLabel = styled.div`
  margin-bottom: 10px;
  color: #BABABA; 
`;

function FriendSearch(props) {
  return (
    <Wrapper>
      <ID_CHECK>ID로 추가</ID_CHECK>
      <InputWrapper>
        <Input placeholder="친구 ID" />
        <Button>검색</Button>
      </InputWrapper>
      <Divider />
      <GrayBox>
        <MyIDLabel>내 ID</MyIDLabel>
        <MyIDLabel>aaaa7</MyIDLabel> 
      </GrayBox>
    </Wrapper>
  );
}

export default FriendSearch;