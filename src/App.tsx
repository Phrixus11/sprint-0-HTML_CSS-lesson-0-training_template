import './App.css'
import styled from "styled-components";
import {FrameCard} from "./components/FrameCardStyled.tsx";
import {myTheme} from "./styles/ThemeStyles.tsx";
import {ButtonContainer} from "./components/BtnStyled.tsx";
import {MainImg} from "./components/MainImgStyled.tsx";

function App() {
    return (
        <Container>
            <Card cardContents={myTheme.cardsCollection}></Card>
        </Container>
    )
}

export default App

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    gap: 50px;
    min-height: 100vh;
    padding: 0 100px;
`

type CardPropsType = {
    cardContents:
        {
            img: string;
            titleCard: string;
            textCard: string;
            colorFrameCard: string,
            colorBtnLink: string,
            colorBtn: string,
        } []
}

function Card(props: CardPropsType) {
    return props.cardContents.map(card => {
        return (
            <FrameCard color={card.colorFrameCard}>
                <MainImg src={card.img} alt="mainImg"/>
                <h2>{card.titleCard}</h2>
                <p>{card.textCard}</p>
                <ButtonContainer btnColor={card}/>
            </FrameCard>
        )
    })
}


