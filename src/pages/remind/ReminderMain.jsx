import React from 'react';
import styled from 'styled-components';

import Reminder from 'assets/reminder.png';

function ReminderMain(props) {
    const reminderList = props.reminderList;

    return (
        <Wrapper>
            <Title>
                <span> 알림 </span>
            </Title>
            <List>
                {reminderList.length > 0 && reminderList.map((value, index) => {
                    return(
                        <Remind key={index}>
                            <img src={Reminder} />
                            <span>{value}</span>
                        </Remind>
                    );
                })}
            </List>
        </Wrapper>
    );
}

export default ReminderMain;

const Wrapper = styled.div`
    position: absolute;
    right: 0;
    top: 32px;
    display: flex;
    flex-direction: column;
    width: 270px;
    height: 210px;
    border: 1px solid #9E9E9E;
    border-radius: 5px;
    box-shadow: 5px 5px 10px #CECECE;
    background-color: white;
    z-index: 1;
`;

const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 35px;
    font-size: 13px;
    padding-top: 8px;
`;

const List = styled.div`
    display: flex;
    flex-direction: column;
    height: 175px;
    font-size: 10px;
    font-weight: 400;
    border-top: 1px solid #CECECE;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 0px;
}
`;

const Remind = styled.div`
    width: 268px;
    display: flex;
    align-items: center;
    padding: 9px;
    border-bottom: 1px dotted #E0E0E0;

    img {
        width: 11px;
        height: 11px;
        margin-right: 10px;
    }

    span {
        width: 229px;
    }
`;