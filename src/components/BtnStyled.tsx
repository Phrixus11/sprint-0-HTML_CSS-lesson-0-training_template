import styled from "styled-components";
import {MyAnimation} from "./Animations/Animations.tsx";


// type btnColorStyle = {
//     colorStyle: {},
// }

type StyleBtnPropsType = {
    btnColor: {
        colorFrameCard: string,
        colorBtnLink: string,
        colorBtn: string,
    }
}

export function ButtonContainer(props: StyleBtnPropsType) {

    return (
        <ButtonWrapper>
            <Link color={props.btnColor.colorBtnLink}>See more</Link>
            <Button as='button' color={props.btnColor.colorBtn} borderColor={props.btnColor.colorBtnLink}>Save</Button>
        </ButtonWrapper>

    )
}

const ButtonWrapper = styled.div`
    display: flex;
    gap: 12px;
    margin: 0 10px;
`

type StyleLinkPropsType = {
    color: string;
}

const Link = styled.a<StyleLinkPropsType>`
    border-radius: 5px;
    width: 86px;
    height: 30px;
    background-color: ${props => props.color};
    color: #fff;
    border: none;
    font-weight: 700;
    font-size: 10px;
    line-height: 2;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        cursor: pointer;
        animation: ${MyAnimation} 2000ms ease-in-out infinite;
    }

    &:active {
        transform: translateY(-2px);
    }
`

type StyleButtonPropsType = {
    color: string;
    borderColor: string;
}

const Button = styled(Link)<StyleButtonPropsType>`
    color: #4e71fe;
    background-color: ${props => props.color};
    border: 2px solid ${props => props.borderColor};
`