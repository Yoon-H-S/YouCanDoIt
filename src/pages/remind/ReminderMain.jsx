import React from 'react';
import styled from 'styled-components';

import Reminder from 'assets/reminder.png';

function ReminderMain(props) {
    return (
        <Wrapper>
            <Title>
                <span> 알림 </span>
            </Title>
            <List>
                <Remind>
                    <img src={Reminder} />
                    <span> &nbsp; 4/5 (수) 개발 스터디 일정이 있습니다. </span>
                </Remind>
                <Remind>
                    <img src={Reminder} />
                    <span> &nbsp; 4/5 (수) 물 마시기 챌린지 반대 투표에 참여해 주세요. </span>
                </Remind>
                <Remind>
                    <img src={Reminder} />
                    <span> &nbsp; (한 달) 매일 만보 이상 걷기 챌린지 초대 왔습니다. </span>
                </Remind>
                <Remind>
                    <img src={Reminder} />
                    <span> &nbsp; 4/2 (일) [오전] 친구 약속 일정이 있습니다. </span>
                </Remind>
                <Remind>
                    <img src={Reminder} />
                    <span> &nbsp; 4/2 (일) 개발 스터디 일정이 있습니다. </span>
                </Remind>
                <Remind>
                    <img src={Reminder} />
                    <span> &nbsp; 4/2 (일) [저녁] 가족 외식 일정이 있습니다. </span>
                </Remind>
                <Remind>
                    <img src={Reminder} />
                    <span> &nbsp; (일주일) 매일 이만보 이상 걷기 챌린지 초대 왔습니다. </span>
                </Remind>
            </List>
        </Wrapper>
    );
}

export default ReminderMain;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 257px;
    height: 210px;
    border: 1px solid #9E9E9E;
    border-radius: 5px;
    box-shadow: 5px 5px 10px #CECECE;
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
    border-top: 1px solid #CECECE;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 0px;
}
`;

const Remind = styled.div`
    display: flex;
    align-items: center;
    padding: 9px;
    border-bottom: 1px dotted #E0E0E0;

    img {
        width: 11px;
        height: 11px;
        margin-right: 4px;
    }
`;