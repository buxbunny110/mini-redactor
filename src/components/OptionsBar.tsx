import React, { Component } from 'react';
import { OptionsContext } from './context/OptionsContext';
import {
    FormGroup,
    Header,
    Container,
    ListHeader,
    ListHeaderContainer,
    ListHeaderText,
    ListContentContainer,
    ListContentItem,
    FontSearchInput,
    FontWeightSelect,
    FontSizeInputBox,
    FontSizeInput,
    ChangeSizeIcon,
    FormGroupHorizontal,
    ColorContainer,
    ColorPicker,
    ColorPickerText,
    TextSpacingControlContainer,
    TextSpacingControl,
    FontControlInput,
    BuxPixel,
    PercentSign,
    AlignControlContainer,
    AlignControl,
    SaveButton
} from './options/OptionsComponents';

import { FiChevronDown } from 'react-icons/fi';
import { FaTextHeight, FaTextWidth } from 'react-icons/fa';
import { FiPercent, 
         FiAlignLeft, 
         FiAlignCenter, 
         FiAlignJustify, 
         FiAlignRight 
} from 'react-icons/fi';


class OptionsBar extends Component<{}, { expanded: boolean, fontWeightDropdownExpanded: boolean }>  {

    constructor(props: any) {
        super(props);
        this.expandFontSelect = this.expandFontSelect.bind(this);
        this.expandFontWeightSelect = this.expandFontWeightSelect.bind(this);

        this.state = {
            expanded: false,
            fontWeightDropdownExpanded: false
        };

    }

    expandFontSelect(event: any) {
        this.setState({ expanded: !this.state.expanded });
    }

    expandFontWeightSelect(event: any) {
        this.setState({ fontWeightDropdownExpanded: !this.state.fontWeightDropdownExpanded });
    }

    selectFont(fontName: any, context: any, event?: any){
        //console.log('fontname',  fontName);
        //console.log('context', context);
        let selectedFont = context.textOptions.fonts.find((el: any) => {
            return el.font === fontName;
        });

        if(selectedFont) {
            context.switchFont(fontName);
        }
    }

    render() {
        return (
            <OptionsContext.Consumer>
                { (context) => (
                    <Container>
                    <Header>Text</Header>
                    <FormGroup>
                        <ListHeader>
                            <ListHeaderContainer onClick={this.expandFontSelect}>
                                <ListHeaderText>
                                    Fira Sans
                                </ListHeaderText>
                                <FiChevronDown />
                            </ListHeaderContainer>
    
                            <ListContentContainer expanded={this.state.expanded}>
                                <FontSearchInput type='text' placeholder='Search' onChange={ (event) => {context.filterFontsByIndexOf(event.target.value) }  } />
                                {
                                    (context.textOptions.fonts 
                                        ? 
                                        context.textOptions.filteredFonts.map((font: any) => {
                                            return (font.selected 
                                                ? 
                                                <ListContentItem selected 
                                                                 onClick={ this.selectFont.bind(this, font.font, context)  } >                
                                                    {font.font}
                                                </ListContentItem>
                                                 :
                                                <ListContentItem onClick={ this.selectFont.bind(this, font.font, context) } >               
                                                    {font.font}
                                                </ListContentItem> );
                                        })
                                        : 
                                        null
                                        )
                                    
                                }
                                
                            </ListContentContainer>
                        </ListHeader>
    
                        <FormGroupHorizontal>
                            <FontWeightSelect onClick={ this.expandFontWeightSelect }>
                                <ListHeaderContainer>
                                    <ListHeaderText>
                                        { context.textOptions.fontWeight }
                                    </ListHeaderText>
                                    <FiChevronDown />
                                </ListHeaderContainer>
    
                                <ListContentContainer expanded={this.state.fontWeightDropdownExpanded}>
                                    <ListContentItem onClick={ () => { context.changeFontWeight('normal') } } >
                                        Normal
                                    </ListContentItem>
                                    <ListContentItem onClick={ () => { context.changeFontWeight('bold') } }>
                                        Bold
                                    </ListContentItem>
                                    <ListContentItem onClick={ () => { context.changeFontWeight('bolder') } }>
                                        Bolder
                                    </ListContentItem>
                                    <ListContentItem onClick={ () => { context.changeFontWeight('lighter') } }>
                                        Lighter
                                    </ListContentItem>
                                </ListContentContainer>
    
                            </FontWeightSelect>
    
                            <FontSizeInputBox>
                                <ChangeSizeIcon />
                                <FontSizeInput placeholder='10' type='text' onChange={(e) => { context.changeFontSize(e.target.value) } }  />
                            </FontSizeInputBox>
                        </FormGroupHorizontal>
    
                        <ColorContainer>
                            <ColorPicker type='color' onChange={(e) => { context.changeColor(e.target.value) } }  />
                            <ColorPickerText>
                                { context.textOptions.color }
                            </ColorPickerText>
                        </ColorContainer>
    
                        <TextSpacingControlContainer>
                            <TextSpacingControl>
                                <PercentSign />
                                <FaTextHeight />
                                <FontControlInput type='text' placeholder='16' onChange={ (e) => { context.changeLineHeight(e.target.value) } }  />
                            </TextSpacingControl>
    
                            <TextSpacingControl>
                                <BuxPixel />
                                <FaTextWidth />
                                <FontControlInput type='text' placeholder='2' onChange={ (e) => { context.changeLetterSpacing(e.target.value) } } />
                            </TextSpacingControl>
                        </TextSpacingControlContainer>
    
                        <AlignControlContainer>
                            <AlignControl onClick={ (e) => { context.changeTextLayout('left') }}>
                                <FiAlignLeft />
                            </AlignControl>
                            <AlignControl onClick={ (e) => { context.changeTextLayout('center')}}>
                                <FiAlignCenter />
                            </AlignControl>
                            <AlignControl onClick={ (e) => { context.changeTextLayout('right')}}>
                                <FiAlignRight />
                            </AlignControl>
                            <AlignControl onClick={ (e) => { context.changeTextLayout('inherit')}}>
                                <FiAlignJustify />
                            </AlignControl>
                        </AlignControlContainer>
                        
                        <SaveButton onClick={ () => { context.storeInLocalStorage() } } >Save Changes</SaveButton>
                    </FormGroup>
    
    
    
                </Container>
                ) }
            </OptionsContext.Consumer>
        );
    }
};
export default OptionsBar;