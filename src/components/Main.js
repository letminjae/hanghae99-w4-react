import React from 'react'
import styled from 'styled-components';
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';

import Word from './Word'

import { useNavigate } from 'react-router';

const Main = () => {
    const nav = useNavigate();

    function toAddPage() {
        nav('/add')
    }

    return (
        <WordContainer>
            <Header>나의 영어 단어장</Header>

            <WordCard>
                <Word />
            </WordCard>
            
            <div onClick={() => {toAddPage()}} >
            <Icon sx={{ fontSize: 50, color: green[500] }}
            style={{position: 'absolute', right:0, bottom: 0, padding: '30px', cursor: 'pointer'}}>
                add_circle</Icon>
            </div>
        </WordContainer>
    )
}

const WordContainer = styled.div`
    margin: auto;
`;

const WordCard = styled.div`
    margin: 20px 230px;
`;

const Header = styled.div`
    position: sticky;
    top:0;
    left:0;
    padding: 10px;
    background: #fff;
    font-size: xx-large;
    width: 100vw;
    border-bottom: 1px solid #888;
`;

export default Main;