import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'components/ui/Button';

function RankingMain(props) {
    const [ visible, setVisible ] = useState(false);
    return (
        <Wrapper>
            <RankTitle>
                <span> 챌린지 랭킹 </span>
            </RankTitle>
            <RankType>
                <OfficialRank> 갓생 챌린지 </OfficialRank>
                <UnOfficialRank> D.I.Y 챌린지 </UnOfficialRank>
                <EndRank> 종료된 챌린지 </EndRank>
            </RankType>
            <RankDetail>
                <Official>
                    <TwoRank>
                        <Button
                            width="66px"
                            height="23px"
                            color="#0077E4"
                            title="일일 랭킹"
                        />
                        <Button
                            width="66px"
                            height="23px"
                            title="누적 랭킹"
                            onClick = {() => {
                                setVisible(!visible);
                            }}
                        />
                    </TwoRank>
                    {visible && (
                        <RankingList>
                            <OneList>
                                <One>
                                    <Title> 하루 5,000보 걷기 </Title>
                                    <Graph>
                                        <GraphOne />
                                        <GraphTwo />
                                        <GraphThree />
                                    </Graph>
                                </One>
                                <Two>
                                    <Title> 7,000보 걷기 </Title>
                                    <Graph>
                                        <GraphOne />
                                        <GraphTwo />
                                        <GraphThree />
                                    </Graph>
                                </Two>
                                <Three>
                                    <Title> 20,000보 걷기 </Title>
                                    <Graph>
                                        <GraphOne />
                                        <GraphTwo />
                                        <GraphThree />
                                    </Graph>
                                </Three>
                            </OneList>
                            <TwoList>
                                <One>
                                    <Title> 만보 걷기 </Title>
                                    <Graph>
                                        <GraphOne />
                                        <GraphTwo />
                                        <GraphThree />
                                    </Graph>
                                </One>
                                <Two>
                                    <Title> 18,000보 걷기 </Title>
                                    <Graph>
                                        <GraphOne />
                                        <GraphTwo />
                                        <GraphThree />
                                    </Graph>
                                </Two>
                                <Three>
                                    <Title> 이만보 걷기 </Title>
                                    <Graph>
                                        <GraphOne />
                                        <GraphTwo />
                                        <GraphThree />
                                    </Graph>
                                </Three>
                            </TwoList>
                            <OneList>
                                <One>
                                    <Title> 하루 5,000보 걷기 </Title>
                                    <Graph>
                                        <GraphOne />
                                        <GraphTwo />
                                        <GraphThree />
                                    </Graph>
                                </One>
                                <Two>
                                    <Title> 7,000보 걷기 </Title>
                                    <Graph>
                                        <GraphOne />
                                        <GraphTwo />
                                        <GraphThree />
                                    </Graph>
                                </Two>
                                <Three>
                                    <Title> 20,000보 걷기 </Title>
                                    <Graph>
                                        <GraphOne />
                                        <GraphTwo />
                                        <GraphThree />
                                    </Graph>
                                </Three>
                            </OneList>
                        </RankingList>
                    )}
                </Official>
                <UnOfficial>

                </UnOfficial>
                <End>

                </End>
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
`;

// 갓생 챌린지
const OfficialRank = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 155.3px;
    height: 40px;
    font-size: 12px;
    border-right: 1px solid #B1B1B1;
    border-radius: 10px 0 0 0;
    background-color: #FFF6A7;
    cursor: pointer;
`;

// D.I.Y 챌린지
const UnOfficialRank = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 155.3px;
    height: 40px;
    font-size: 12px;
    border-right: 1px solid #B1B1B1;
    cursor: pointer;
`;

// 종료된 챌린지
const EndRank = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 155.3px;
    height: 40px;
    font-size: 12px;
    border-radius: 0 10px 0 0;
    cursor: pointer;
`;

// 랭킹
const RankDetail = styled.div`
    position: relative;
    display:flex;
    width: 468px;
    height: 272px;
    border: 1px solid #B1B1B1;
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
    margin: 10px 25.5px 0 0;
    float: right;

    & > Button{
        margin-right:5px;
        cursor: pointer;
    }
`;

// 랭킹 리스트
const RankingList = styled.div`
    display: flex;
    flex-direction: column;
    width: 415px;
    height: 220px;
    margin-left: 25px;
`;

// 세 개의 랭킹 틀
const OneList = styled.div`
    display: flex;
    padding: 10px 0 10px 0;
    border-bottom: 1px dashed #B1B1B1;
`;

// 또 다른 세 개의 랭킹 틀
const TwoList = styled.div`
    display: flex;
    padding: 10px 0 10px 0;
    border-bottom: 1px dashed #B1B1B1;
`;

// 랭킹 1
const One = styled.div`
    width: 133px;
    height: 100px;
    border-radius: 5px;
    background-color: #FFF9BF;
    margin-right: 8px;
`;

// 랭킹 2
const Two = styled.div`
    width: 133px;
    height: 100px;
    border-radius: 5px;
    background-color: #FFF9BF;
    margin-right: 8px;
`;

// 랭킹 3
const Three = styled.div`
    width: 133px;
    height: 100px;
    border-radius: 5px;
    background-color: #FFF9BF;
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
    width: 100px;
    height: 15px;
    background-color: #4F3B00;
    margin-bottom: 1px;
`;

// 그래프 2
const GraphTwo = styled.div`
    width: 76px;
    height: 15px;
    background-color: #4F3B00;
    margin-bottom: 1px;
`;

// 그래프 3
const GraphThree = styled.div`
    width: 63px;
    height: 15px;
    background-color: #4F3B00;
`;

// D.I.Y 챌린지 랭킹 틀
const UnOfficial = styled.div`
`;

// 종료된 챌린지 랭킹 틀
const End = styled.div`
`;