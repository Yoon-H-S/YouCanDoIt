import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faImage } from '@fortawesome/free-solid-svg-icons';

import "react-datepicker/dist/react-datepicker.css";

import SelectedCalender from './SelectedCalender';
import DiyGalleryList from './DiyGalleryList';
import DiyGalleryDetails from './DiyGalleryDetails';

function RankingDetails(props) {
    const {groupNumber, rankingType, close} = props;
    const [detailsType, setDetailsType] = useState(1); // 1: 랭킹상세, 2: 그룹 갤러리, 3: 개인 갤러리

    // 랭킹 공통부분
    const [maxResult, setMaxResult] = useState(0);
    const [groupInfo, setGroupInfo] = useState(null);
    const [groupRanking, setGroupRanking] = useState([]);

    // 갓생챌린지 관련
    const [selectDate, setSelectDate] = useState(new Date()); // 갓생챌린지 일일랭킹 날짜선택

    // 갤러리 관련
    const [galleryInfo, setGalleryInfo] = useState([]); // 갤러리의 정보
	const [galleryMem, setGalleryMem] = useState({
        "memId": "",
        "nickname": "",
    }); // Diy 갤러리의 주인(없다면 null)
    const [isSelect, setIsSelect] = useState(false); // 갤러리 상세보기 여부
    const [imageIndex, setImageIndex] = useState(); // 상세보기 사진의 index

    const {memId, nickname} = galleryMem;

    useEffect(() => {
        var sendDate = null;
        if(rankingType === 1) {
            const year = selectDate.getFullYear(); // 현재 년도 구하기
            const month = selectDate.getMonth() + 1; // 현재 달 구하기
            const date = selectDate.getDate(); // 현재 날짜 구하기
            sendDate = year + "-" + month + "-" + date;
        }
        axios.get('/api/challenge-api/ranking-detail/' + rankingType, {
            params: {
                groupNumber: groupNumber,
                date: sendDate
            }
        }).then(function (response) {
            setGroupInfo(response.data[0]); // 그룹정보
            setGroupRanking(response.data[1]); // 랭킹정보
            setMaxResult(response.data[1][0][2]); // 1등의 값
        }).catch(
            (error) => console.log(error)
        );
    },[groupNumber, selectDate]);

    /** 뒤로가기 동작 변경 */
    const closeChange = () => {
        if(detailsType === 1) { // 상세랭킹 화면이라면
            close();
        } else {
            if(!isSelect) // 갤러리 화면이라면
                setDetailsType(1);
            else // 갤러리 상세 화면이라면
                setIsSelect(false);
        }
    }

    /** 갓생챌린지 일일랭킹 날짜 변경 */
    const dateChange = (date) => {
        setSelectDate(date);
    }

    /** DIY 챌린지 갤러리 열기 */
	const detailsTypeChange = (memId, nickname) => {
        axios.get('/api/challenge-api/diy-gallery', {
            params: {
                groupNumber: groupInfo["groupNumber"],
                memId: memId
            }
        }).then(function (response) {
            setGalleryInfo(response.data);
            if(!isSelect) {
                setDetailsType(memId === null ? 2 : 3);
                setGalleryMem({
                    ...galleryMem,
                    "memId": memId,
                    "nickname": nickname,
                });
            }
        }).catch(
            (error) => console.log(error)
        );
	}

    /** 갤러리 상세 열기 */
    const imageSelect = (index) => {
        setImageIndex(index);
        setIsSelect(true);
    }

    /** 인증사진 반대 */
    const opposite = () => {
        if(!galleryInfo[imageIndex][1]) {
            axios.post('/api/challenge-api/diy-opposite', {
                "certifyDate": galleryInfo[imageIndex][0]["certifyDate"],
                "groupNumber": galleryInfo[imageIndex][0]["groupNumber"],
                "memId": galleryInfo[imageIndex][0]["memId"]
            }).then(function (response) {
                if(response.data > 7) {
                    alert("반대기간이 지났습니다.");
                } else if(response.data > 0) {
                    alert("반대하였습니다.");
                    detailsTypeChange(memId, nickname);
                }
            }).catch(
                (error) => console.log(error)
            );
        }
    }

    if(groupInfo !== null) {
        return(
            <Wrapper>
                <Title>
                    <FontAwesomeIcon className='back' icon={faChevronLeft} onClick={closeChange}/>
                    {{
                        1 : <>
                                <span>{groupInfo["groupSubject"]}</span>
                                {groupInfo["groupClass"] === "2" && <FontAwesomeIcon className='gallery' icon={faImage} onClick={() => detailsTypeChange(null, null)} />}
                            </>,
                        2 : <span>갤러리 <span>(최신순)</span></span>,
                        3 : <span>{nickname}</span>
                    }[detailsType]}
                </Title>
                <InfoArea>
                    {!isSelect ? 
                        <>
                            <GroupBar>
                                <GroupName>{groupInfo["groupName"]}</GroupName>
                                {rankingType === 1 && 
                                    <SelectedCalender 
                                        startDate={new Date(groupInfo["groupStartdate"])} 
                                        selectDate={selectDate} 
                                        dateChange={dateChange} 
                                        type={1} 
                                    />
                                }
                            </GroupBar>
                            {{
                                1 : <RankingList>
                                        {groupRanking.length > 0 && groupRanking.map((value, index) => {
                                            return(
                                                <Rank 
                                                    key={index} 
                                                    result={value[2]/maxResult} 
                                                    rank={value[3]} 
                                                    onClick={() => groupInfo["groupClass"] === "2" && detailsTypeChange(value[4], value[0])}
                                                >
                                                    <div>
                                                        <img src={value[1]} alt="" />
                                                        <span>{value[0]}</span>
                                                    </div>
                                                    <span>{value[2]}</span>
                                                </Rank>
                                            );
                                        })}
                                    </RankingList>,
                                2 : <DiyGalleryList galleryInfo={galleryInfo} imageSelect={imageSelect} />
                            }[detailsType === 3 ? 2 : detailsType]}
                        </>
                        : 
                            <DiyGalleryDetails imageInfo={galleryInfo[imageIndex]} opposite={opposite} />
                        }
                </InfoArea>
            </Wrapper>
        );
    }
}

export default RankingDetails;

// 랭킹 상세페이지의 틀
const Wrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

// 상단 챌린지 주제 영역
const Title = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    background-color: #DCA600;
    z-index: 2;

    & > span {
        font-size: 16px;
        font-weight: 500;
        color: white;
        cursor: default;

        & > span {
            font-size: 10px;
            font-weight: 300;
        }
    }

    & > .back {
        position: absolute;
        left: 45px;
        color: white;
        cursor: pointer;
    }

    & > .gallery {
        position: absolute;
        right: 45px;
        color: white;
        cursor: pointer;
    }
`;

// 본문 영역. 스크롤되는 영역
const InfoArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 28px 0;
    width: 100%;
    height: 372px; 
    background-color: #FFF9BF;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 0px;
    }
`;

// 그룹 이름과 캘린더가 들어가는 영역
const GroupBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 465px;
    height: 24px;
    margin-bottom: 13px;
`;

// 그룹 이름
const GroupName = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: max-content;
    height: 100%;
    padding: 0 12px;
    border-radius: 5px;
    background-color: #FFCB65;
    font-size: 10px;
`;

// 랭킹 리스트
const RankingList = styled.div`
    width: 465px;
    display: flex;
    flex-direction: column;
    align-items: start;
`;

// 각 랭킹
const Rank = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${(props) => props.result*100}%;
    min-width: 150px;
    height: 40px;
    padding: 0 20px;
    background-color: hsl(45,100%,${(props) => props.rank*2+15}%);
    overflow: hidden;

    :not(:last-child) {
        margin-bottom: 3px;
    }

    // 프로필사진과 닉네임
    & > div {
        display: flex;
        align-items: center;

        & > img {
            width: 18px;
            height: 18px;
            border: 0.5px solid #999999;
            border-radius: 18px;
        }

        & > span {
            margin-left: 10px;
            font-size: 11px;
            color: white;
        }
    }

    // 만보기 수
    & > span {
        font-size: 10px;
        color: white;
    }
`;