import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Form = styled.div`
    background-color: #fff;
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 20px;
`
export const Button = styled.button`
    background-color: #3D88E2;
    width: 80%;
    margin: 0 auto;
    padding: 15px;
    border: none;
    color: #fff;
    font-weight: 700;
    margin-top: 30px;
`
export const Title = styled.h4`
    margin: 0;
    padding: 0;
    font-size: 20px;
    color: #3D88E2;
`
export const Input = styled.input`
    border: none;
    border-bottom: 1px solid #3D88E2;
    padding: 15px;
    margin: 5px auto;
    width: 90%;
`
export const Span = styled.span`
    font-size: ${({ size }) => size ? size : '15px'};
    color: ${({ colorF }) => colorF ? colorF : '#012754'};
    font-weight: ${({ fontWeight }) => fontWeight && '600'};
`
export const FlexChecks = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`
export const Section = styled.div`
    width: 100%;
    margin: ${({ margin }) => margin && margin};
    margin-bottom: ${({ marginB }) => marginB && marginB}
`