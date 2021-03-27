import styled from 'styled-components';

import { GoTextSize } from 'react-icons/go';
import { FiPercent } from 'react-icons/fi';

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.8em;
`;

export const Header = styled.header`
    text-transform: uppercase;
    color: grey;
    padding: 0.5em;
    padding-left: 1em;
    font-size: 0.8em;
`;

export const Container = styled.div`
    background-color: white;
    border-radius: 5px;
    height: 500px;
`;

export const ListHeader = styled.header`
    border: 1px solid #F4F4F4;
    border-radius: 5px 0 0 5px;
    padding: 0.5em;
    font-size: 0.8em;
    flex: 1;
    margin: 1em 0 1em 0;
    margin-top: 0.5em;
    padding-top: 0.8em;
    padding-bottom: 0.8em;
    padding-left: 1em;
    cursor: pointer;
    position: relative;
    user-select: none;
`;

export const ListHeaderContainer = styled.div`
    display: flex;
`;

export const ListHeaderText = styled.span`
    flex: 1;
    &:first-letter {
        text-transform: uppercase;
    }
`;

export const ListContentContainer = styled.ul<{ expanded?: boolean }>`
    overflow-y: scroll;
    position: absolute;
    right: 105%;
    padding: 0;
    top: 0;
    width: 200px;
    height: 200px;
    background: white;
    margin: 0;
    border: 1px solid #F4F4F4;
    z-index: 99;
    display: ${props => props.expanded ? 'block' : 'none'};
`;

export const ListContentItem = styled.li<{ selected?: boolean }>`
    padding: 1em;
    display: block;
    background-color: ${props => props.selected ? 'blue' : '#F4F4F4'};
    color: ${props => props.selected ? 'white' : 'black'};
`;

export const FontSearchInput = styled.input`
    box-sizing: border-box;
    height: 30px;
    width: 98%;
    border: none;
    border-bottom: 1px solid grey;
    padding: 1em;
`;

export const FontWeightSelect = styled(ListHeader)`
    width: 70%;
`;

export const FontSizeInputBox = styled.div`
    box-sizing: border-box;
    width: 30%;
    border: 1px solid #F4F4F4;
    border-radius: 0 5px 0 0;
    padding: 0.5em;
    font-size: 0.8em;
    margin-top: 0.5em;
    margin-bottom: 1em;
    padding-left: 2em;
    cursor: pointer;
    position: relative;
    border-left: none;
`;

export const FontSizeInput = styled.input`
    width: 25px;
    border: none;
`;

export const ChangeSizeIcon = styled(GoTextSize)`
    position: absolute;
    top: 19%;
    right: 72%;
    font-size: 1.3em;
`;

export const FormGroupHorizontal = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ColorContainer = styled(ListHeader)`
    padding: 0.5em;
    text-transform: uppercase;
`;

export const ColorPicker = styled.input`
    width: 30px;
`;

export const ColorPickerText = styled(ListHeaderText)`
    margin-left: 2em;
`;

export const TextSpacingControlContainer = styled(FormGroupHorizontal)`
    border: 1px solid #F4F4F4;
`;

export const TextSpacingControl = styled(FontSizeInputBox)`
    &:first-child {
        border-right: 1px solid #F4F4F4;
    }
    flex: 1;
    border: none;
    padding-left: 0.7em;
`;


export const FontControlInput = styled(FontSizeInput)`
    left: 17px;
    position: relative;
`;

export const BuxPixel = styled.span`
    &:before {
        content: "px";
    }

    left: 65px;
    z-index: 99;
    top: 8px;
    position: absolute;
`;

export const PercentSign = styled(FiPercent)`
    left: 65px;
    z-index: 99;
    top: 10px;
    position: absolute;
`;

export const AlignControlContainer = styled(FormGroupHorizontal)`
    align-items: flex-start;
    border: 1px solid #F4F4F4;
    border-radius: 5px;
    margin-top: 1em;
`;

export const AlignControl = styled.div`

    flex: 1;
    align-items: center;
    display: flex;
    justify-content: center;
    text-align: center;
    width: 30px;
    height: 30px;
    margin: 0.5em;
    cursor: pointer;

`;

export const SaveButton = styled.button`
    color: white;
    padding: 1em;
    background-color: #00CF59  ;
    border-radius: 5px;
    margin-top: 1em;
    border: none;
    cursor: pointer;
`;