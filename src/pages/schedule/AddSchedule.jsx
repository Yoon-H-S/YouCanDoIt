import React, { useState } from 'react';
import Page from 'pages/Page';
import styled from 'styled-components';
import Button from 'components/ui/Button';



function AddSchedule(props) {


    return( 

        
        <div>
            {/* <a href = "https://www.com/" target="_blank"> */}
                <Title> <big><strong> &nbsp; &#10094;
                    </strong></big>  
                </Title>   
            {/* </a> */}
         
			
            <Wrapper>
                <span>일정추가</span> 
            </Wrapper>
            
            
            <p align="left"> 제목: &nbsp; </p>
            {/* <input type = "text"></input>  */}
            <hr color="gray" size="0.1px"></hr>
            
            <br></br> <p> &emsp; &emsp; 🕒&nbsp; &nbsp;  4월 5일(수) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <strong><big>→</big></strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 4월 5일(수) </p> 
            <p> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 08:00 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 09:00 </p><br></br>
            <hr color="gray" size="0.1px"></hr>
            
            
            <p>⏰ 알림 </p> 
        
            &emsp;&emsp;&ensp;&nbsp;<input type="checkbox" name="일정 시작 시간"  ></input> 일정 시작 시간 <br></br> 
            &emsp;&emsp;&ensp;&nbsp;<input type="checkbox" name="1일 전"  ></input> 1일 전 <br></br>
            &emsp;&emsp;&ensp;&nbsp;<input type="checkbox" name="1시간 전"  ></input> 1시간 전 <br></br>
            &emsp;&emsp;&ensp;&nbsp;<input type="checkbox" name="10분 전"  ></input> 10분 전 <br></br>
            &emsp;&emsp;&ensp;&nbsp;<input type="checkbox" name="5분 전"  ></input> 사용자 지정 시간 &ensp;
            {/* <label>  &nbsp; <input type="text"></input></label> */}
            <input type = "time"></input>
            <hr color="gray" size="0.1px"></hr>
            
           
            
            <br></br>
            <p>🔄&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 반복 안함</p>
            <br></br>
            <hr color="gray" size="0.1px"></hr>
            





            {/* 저장,취소 버튼 */}
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp; 
            <button type="button" class="button" backgroundColor="0a0a23">취소</button>
            {/* <input type = "reset" value = "취소"> </input>   */}
            &emsp; 
            <input type = "submit" value = "저장" color = "blue"></input>
            {/* <button>저장</button> */}
             
             
              {/* <Button
                width = "30px"
                height = "25px"
                title = "취소"
                color = "red"
             />  */}
             {/* <Button
                width = "30px"
                height = "25px"
                title = "저장"
                color = "blue"
             />  */}
            
             
            
       
        
        </div>
        
    )
    
}


export default AddSchedule;



//이전버튼
const Title = styled.div`
    height: 0px;
    width: 394px;
    position: relative;
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    line-height: 70px;
    border-radius: 10px 10px 0 0;
    cursor: default;
`

//일정추가
const Wrapper = styled.div`
    height: 60px;
    width: 394px;
    position: relative;
    font-size: 20px;
    font-weight: bold;
    text-decoration: underline;
    text-decoration-color: orange;
    text-decoration-thickness: 3px;
    text-align: center;
    line-height: 70px;
    border-radius: 10px 10px 0 0;
    cursor: default;
`;




    // & > span {
    //    font-size: 16px;
    //  font-weight: 700;
    //  color: black;
    //   cursor: default;
    //   border-bottom: 3px solid #dca600;
    // }


    // const button = styled.div`
    //    background-color: red;
    // `