import styled, {keyframes} from "styled-components";

const animateExpenseStyle = keyframes`
    0% {transform: translateY(-100px)}
    100% {transform: translateY(0px)}
`;

export const ExpenseItemStyle = styled.li`
    animation: ${animateExpenseStyle} .2s linear;
`;