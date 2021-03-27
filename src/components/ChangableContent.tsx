import React, { Component } from 'react';
import { OptionsContext } from './context/OptionsContext';
import ContentEditable from 'react-contenteditable';
import GoogleFontLoader from 'react-google-font-loader';
import TextSelection from './TextSelection';

class ChangebleContent extends Component <{ text: string }>{

    contentEditable: any;

    constructor(props: any) {
        super(props);
        this.contentEditable = React.createRef();
        
        
    }

    switchFontHelper(context: any){
        
        let isSelectedFont = context.textOptions.fonts.find((el: any) => {
            return el.selected;
        });

        return isSelectedFont ? isSelectedFont.font : 'sans-serif'; 
    }

    render(){
        return (
            <OptionsContext.Consumer>
                { context => (
                    <>      
                        <GoogleFontLoader
                            fonts={
                                (context.textOptions.fonts 
                                    ?
                                    context.textOptions.fonts.map((font: any) => {
                                        return font;
                                        console.log(font);
                                    }) 
                                    : 
                                    []) 
                                
                            }
                        />
        
                        <ContentEditable
                            style=
                            { 
                                { 
                                    textAlign: context.textOptions.textAlign ,
                                    lineHeight: context.textOptions.lineHeight,
                                    letterSpacing: context.textOptions.letterSpacing,
                                    color: context.textOptions.color,
                                    fontSize: context.textOptions.fontSize,
                                    fontFamily: this.switchFontHelper(context),
                                    fontWeight: context.textOptions.fontWeight
                            } }
                            innerRef={this.contentEditable}
                            html={context.text} // innerHTML of the editable div
                            disabled={false}       // use true to disable editing
                            //onChange={this.handleChange} // handle innerHTML change
                            tagName='div' // Use a custom HTML tag (uses a div by default)
                            onChange={ context.preserveSelectedText }
                        />
                        <TextSelection getValue={ (selected: string, anchor: string) => { context.applyStylesToSelectedText(selected, anchor) } } />
                    </>
                ) }
            </OptionsContext.Consumer>
        );
    }
}

export default ChangebleContent;