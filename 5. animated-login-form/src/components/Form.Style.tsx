import styled, { keyframes } from "styled-components";
import pic from "./img/pic.png";

const animateContainer = keyframes`
    0% {
        transform: rotate(0deg);
        transform: scale(0.8);
    } 
    25% {
        transform: rotate(45deg);
        transform: scale(0.8);
    } 
    50% {
        transform: rotate(90deg);
        transform: scale(0.8);
    } 
    75% {
        transform: rotate(180deg);
        transform: scale(0.8);
    } 
    100% {
        transform: scale(0);
    }
`;

export const LoginContainer = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    &.animate {
        animation: ${animateContainer} 1s linear;
        transform: rotate(180deg) translateY(1000px);
        transition: 1s linear;
    }
`;

const animateLogo = keyframes`
    0% {
        border-radius: 0 0 0 0;
        transform: rotate(0deg);
    } 
    25% {
        border-radius: 25%;
        transform: rotate(45deg);
    } 
    50% {
        border-radius: 25%;
        transform: rotate(90deg);
    } 
    75% {
        border-radius: 75%;
        transform: rotate(180deg);
    } 
    100% {
        transform: scale(0);
    }
`;

type CustomForm = {
    background?: string;
    borderColor?: string;
};
  
export const FormAnimation = styled.div<CustomForm>`
    width: 250px;
    height: 250px;
    background: ${(props) => props.background || `URL(${pic}) center/cover`};
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    margin-top: 75px;
    border: 7px solid ${(props) => props.borderColor || "#0d6efd"};
    border-radius: 5px;
    box-shadow: 5px 5px 5px rgba(0,0,0,.1);
    &.animate {
        animation: ${animateLogo} 1s linear;
        transform: rotate(180deg);
        border-radius: 50%;
        transform: scale(0);
        transition: 1s linear;
    }
`;
 