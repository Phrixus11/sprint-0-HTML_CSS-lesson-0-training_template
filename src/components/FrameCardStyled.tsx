import styled from "styled-components";

type StyleFrameCardProps = {
    color?: string;
}

export const FrameCard = styled.div<StyleFrameCardProps>`
    border-radius: 15px;
    width: 300px;
    height: 350px;
    box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
    background: ${props => props.color || '#FFFFFF'};
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;

    h2 {
        font-weight: 700;
        font-size: 16px;
        color: #000;
        margin: 0 10px;
    }

    p {
        font-weight: 500;
        font-size: 12px;
        line-height: 1.66667;
        color: #abb3ba;
        margin: 0 10px;
    }
}
`