import styled from 'styled-components';

import Profile1 from 'assets/testImg/profile1.png';

function GroupProfile(props) {
    return(
        <Wrapper>
            <Background />
            <FriendProfilePicture>
                <img src={Profile1} alt="" />
            </FriendProfilePicture>
            <Name> 김시은 </Name>
            <Groupparticipate height={50+(26*7)}>
                <AllGroupList>
                    <span> 같이 있는 그룹 </span>
                </AllGroupList>
                <GroupList>
                    <Group>
                        <span> • 갓생살조 </span>
                    </Group>
                    <Group>
                        <span> • 아침형 그룹 </span>
                    </Group>
                    <Group>
                        <span> • G_T_F </span>
                    </Group>
                    <Group>
                        <span> • 건강 바사삭 </span>
                    </Group>
                    <Group>
                        <span> • Y.C.D.I </span>
                    </Group>
                    <Group>
                        <span> • 그룹 1 </span>
                    </Group>
                    <Group>
                        <span> • 그룹 2 </span>
                    </Group>
                    <Group>
                        <span> • 그룹 3 </span>
                    </Group>
                    <Group>
                        <span> • 그룹 4 </span>
                    </Group>
                </GroupList>
            </Groupparticipate>
        </Wrapper>
    );
}

export default GroupProfile;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 422px;
`;

// 노란 배경 영역
const Background = styled.div`
    width: 287px;
    height: 122px;
    background-color: #FFF066;
    border-bottom: 1px solid #B1B1B1;
`;

// 친구 프로필 사진
const FriendProfilePicture = styled.div`
    position: absolute;
    left: 38px;
    top: 103px;

    & > img {
        position: absolute;
        width: 38px;
        height: 38px;
        border: 1px solid #B1B1B1;
        border-radius: 20px;
    }
`;

// 친구 이름
const Name = styled.div`
    width: 239px;
    padding-left: 13px;
    margin: 29px 0 13px;
    font-size: 15px;
    font-weight: bold;
`;

const Groupparticipate = styled.div`
    width: 239px;
    height: 212px;
    border: 1px solid #B1B1B1;
    border-radius: 10px;
`;

// 같이 있는 그룹 상단틀
const AllGroupList = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 34px;
    padding: 0 18px;
    border-bottom: 1px solid #B1B1B1;
    font-size: 11px;
`;

// 참여 그룹 리스트
const GroupList = styled.div`
    width: 100%;
    height: 158px;
    margin: 13px 26px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 0px;
    }
`;

// 각 그룹명
const Group = styled.div`
    display: flex;
    align-items: center;

    & > img {
        width: 18px;
        height: 18px;
        border: 1px solid #999999;
        border-radius: 18px;
        margin-right: 8px;
    }

    & > span {
        position : relative;
        top: -1px;
        font-size: 10px;
    }

    :not(:last-child) {
        margin-bottom: 8px;
    }
`;