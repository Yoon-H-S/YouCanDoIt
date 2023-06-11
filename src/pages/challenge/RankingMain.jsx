import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Button from 'components/ui/Button';

function RankingMain(props) {
    const {isDaily} = props;
    const [rankingList, setRankingList] = useState([]);

    useEffect(() => {
        if(isDaily) {
            axios.get('/api/challenge-api/daily-ranking')
            .then(function (response) {
                setRankingList(response.data);
            }).catch(
                (error) => console.log(error)
            );
        } else {
            axios.get('/api/challenge-api/godlife-ranking')
            .then(function (response) {
                setRankingList(response.data);
            }).catch(
                (error) => console.log(error)
            );
        }
    },[isDaily])

    return (
        <Wrapper>
            <RankTitle>
                <span> 챌린지 랭킹 </span>
            </RankTitle>
            <RankType>
                <RankMenu select={true}> 갓생 챌린지 </RankMenu>
                <RankMenu> D.I.Y 챌린지 </RankMenu>
                <RankMenu> 종료된 챌린지 </RankMenu>
            </RankType>
            <RankDetail>
                <Official>
                    <TwoRank>
                        <Button
                            width="66px"
                            height="23px"
                            color={isDaily ? "#0077E4" : ""}
                            title="일일 랭킹"
                            onClick = {() => {
                                props.dailyChange(true);
                            }}
                        />
                        <Button
                            width="66px"
                            height="23px"
                            color={!isDaily ? "#0077E4" : ""}
                            title="누적 랭킹"
                            onClick = {() => {
                                props.dailyChange(false);
                            }}
                        />
                    </TwoRank>
                    <RankingList>
                    {rankingList.length > 0 ? rankingList.map((value, index) => {
                        return(
                            <RankingWrap key={index}>
                                <One id={value[0]} onClick={props.handleChange}>
                                    <Title> {value[1]} </Title>
                                    <Graph>
                                        {value[2].map((result, index) => {
                                            return(
                                                <GraphOne key={index} width={value[2][0][1] !== 0 ? result[1]/value[2][0][1] : 1}>
                                                    <img src={result[0]} alt="" />
                                                </GraphOne>
                                            );
                                        })}
                                    </Graph>
                                </One>
                                {(index % 3 === 0) && <OneList />}
                            </RankingWrap>
                        );
                    }) : 
                        <None>진행중인 갓생 챌린지가 없습니다.</None>
                    }  
                    </RankingList>
                </Official>
            </RankDetail>
        </Wrapper>
    );
}

export default RankingMain;

// 챌린지 랭킹 페이지 틀
const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
`;

// 챌린지 랭킹
const RankTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 65px;
    padding-right: 387.5px;
    padding-top: 10px;

    & > span {
        font-size: 16px;
        font-weight: bold;
        border-bottom: 3px solid #DCA600;
    }
`;

// 세 가지 종류의 챌린지 틀
const RankType = styled.div`
    position: relative;
    display:flex;
    width: 468px;
    height: 42px;
    border: 1px solid #B1B1B1;
    border-radius: 10px 10px 0 0;
    overflow: hidden;
`;

// 챌린지 랭킹 메뉴
const RankMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33.3%;
    height: 40px;
    font-size: 12px;
    cursor: pointer;

    :not(:last-child) {
        border-right: 1px solid #B1B1B1;
    }

    ${(props) => (props.select && `
        background-color: #FFF6A7;
    `)}
`;

// 랭킹
const RankDetail = styled.div`
    position: relative;
    display:flex;
    width: 468px;
    height: 272px;
    border: 1px solid #B1B1B1;
    border-top: none;
    border-radius: 0 0 10px 10px;
`;

// 갓생 챌린지 랭킹 틀
const Official = styled.div`
    width: 468px;
    height: 262px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 0px;
    }
`;

// 두 개의 갓생 챌린지 랭킹 버튼 틀
const TwoRank = styled.div`
    display:flex;
    margin: 10px 25.5px 10px 0;
    float: right;

    & > Button{
        margin-right:5px;
        cursor: pointer;
    }
`;

// 진행중인 챌린지가 없을 때
const None = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 200px;
    font-size: 15px;
    color: #A4A4A4;
`;

// 랭킹 리스트
const RankingList = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 415px;
    margin-left: 25px;
`;

// 세 개의 랭킹 틀
const OneList = styled.div`
    position: absolute;
    bottom: -20px;
    display: flex;
    width: 415px;
    height: 0px;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px dashed #B1B1B1;
`;

const RankingWrap = styled.div`
    position: relative;
    margin-bottom: 20px;
    :not(:nth-child(3n)) {
        margin-right: 8px;
    }
`;

// 랭킹 1
const One = styled.div`
    width: 133px;
    height: 100px;
    border-radius: 5px;
    background-color: #FFF9BF;
    cursor: pointer;
`;

// 랭킹 제목
const Title = styled.div`
    display: flex;
    justify-content: center;
    font-size: 10px;
    padding-top: 12px;
`;

// 그래프 틀
const Graph = styled.div`
    margin: 10px 0 0 17px;
`;

// 그래프 1
const GraphOne = styled.div`
    display: flex;
    align-items: center;
    width: ${(props) => props.width * 100}px;
    min-width: 15px;
    height: 15px;
    background-color: #4F3B00;
    margin-bottom: 1px;

    & > img {
        margin-left: 5px;
        width: 5px;
        height: 5px;
        border: 0.1px solid #595959;
    }
`;

// // D.I.Y 챌린지 랭킹 틀
// const UnOfficial = styled.div`
// `;

// // 종료된 챌린지 랭킹 틀
// const End = styled.div`
// `;