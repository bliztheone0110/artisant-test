import React from "react";
import styled from "styled-components";

const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
`;

const Icon = styled.svg`
    fill: none;
    stroke: white;
    stroke-width: 2px;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
    border: 0;
    clip: rect(0 0 0 0);
    clippath: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
    display: inline-block;
    position: relative;
    top: 2px;
    width: 16px;
    height: 16px;
    background: ${(props) => props.checked ? props.theme.colors.blue : props.theme.colors.black};
    border-radius: 3px;
    transition: all 150ms;

    ${HiddenCheckbox}:focus + & {
        box-shadow: 0 0 0 1x black;
    }

    ${Icon} {
        opacity: ${(props) => (props.checked ? "1" : "0")};
        transition: 150ms;
    }

    &:hover {
        cursor: pointer;
    }
`;

const LabelText = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.normal + 'px'};
    color: ${({ theme }) => theme.colors.black};
    padding-left: 10px;
    user-select: none;
  
    &:hover {
        cursor: pointer;
    }
`;

interface IProps {
    className?: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
}

const Checkbox: React.FC<IProps> = ({
    className,
    checked,
    ...props
}) => {
    const content = (
        <CheckboxContainer className={className}>
            <HiddenCheckbox checked={checked} {...props} />
            <StyledCheckbox checked={checked}>
                <Icon viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                </Icon>
            </StyledCheckbox>
        </CheckboxContainer>
    );

    return props.label
        ?
        <label>
            {content}
            <LabelText>{props.label}</LabelText>
        </label>
        :
        <>{content}</>;
};

export default Checkbox;