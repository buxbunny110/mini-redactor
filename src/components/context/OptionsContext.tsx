import React, { Component, CSSProperties } from 'react';
import { FontSearchInput } from '../options/OptionsComponents';

interface AppContextInterface {
    text: string,
    selectedText: string,
    textOptions: any,
    changeTextLayout: Function,
    changeLineHeight: Function,
    changeLetterSpacing: Function,
    changeTextColor?: Function,
    preserveSelectedText: any,
    applyStylesToSelectedText: any,
    changeColor: any,
    changeFontSize: any,
    switchFont: any,
    changeFontWeight: any,
    filterFontsByIndexOf: any,
    storeInLocalStorage: any
  }

interface TextOptionsInterface {
    text: string;
    textOptions: {
        textAlign: string;
        lineHeight: string;
        letterSpacing: string;
        color: string;
        fontSize: string;
        fonts: object [];
        filteredFonts: object [];
        fontWeight: string;
    }
}

const OptionsContext = React.createContext<AppContextInterface>({
    text: '',
    selectedText: '',
    textOptions: {
        textAlign: 'inherit',
        lineHeight: 'inherit',
        letterSpacing: 'inherit',
        color: 'black',
        fontSize: '1em',
        fonts: [],
        fontWeight: 'normal'
    },
    changeTextLayout: () => {},
    changeLineHeight: () => {},
    changeLetterSpacing: () => {},
    preserveSelectedText: () => {},
    applyStylesToSelectedText: () => {},
    changeColor: () => {},
    changeFontSize: () => {},
    switchFont: () => {},
    changeFontWeight: () => {},
    filterFontsByIndexOf: () => {},
    storeInLocalStorage: () => {}
});

class OptionsProvider extends Component<{}, { text: string, selectedText: string, textOptions: any }>{
    constructor(props: any){
        super(props);

        this.state = {
            text: `<p>Bugs Bunny is an animated cartoon character, created in the late 1930s by Leon Schlesinger Productions (later Warner Bros. Cartoons) and voiced originally by Mel Blanc.[4] Bugs is best known for his starring roles in the Looney Tunes and Merrie Melodies series of animated short films, produced by Warner Bros. Though a similar character first appeared in the WB cartoon Porky's Hare Hunt (1938) and a few subsequent shorts, the definitive characterization of Bugs Bunny is widely credited to have debuted in director Tex Avery's Oscar-nominated film A Wild Hare (1940).[1] Bugs is an anthropomorphic gray and white rabbit or hare who is famous for his flippant, insouciant personality. He is also characterized by a Brooklyn accent, his portrayal as a trickster, and his catch phrase "Eh...What's up, doc?". Due to Bugs' popularity during the golden age of American animation, he became not only an American cultural icon and the official mascot of Warner Bros. Entertainment, but also one of the most recognizable characters in the world. He can thus be seen in the older Warner Bros. company logos. Bugs starred in more than 160 cartoon shorts produced between 1940 and 1964.[6] He has since appeared in feature films, compilation films, TV series, music records, comics, video games, award shows, amusement park rides, and commercials. He has also appeared in more films than any other cartoon character,[7] is the 9th most-portrayed film personality in the world,[7] and has his own star on the Hollywood Walk of Fame.[8]</p>`,
            selectedText: '',
            textOptions: {
                textAlign: 'left',
                lineHeight: 'inherit',
                letterSpacing: 'inherit',
                color: 'black',
                fontSize: '1em',
                fonts: [
                        {
                            font: 'Roboto',
                            weights: [400, '400i'],
                            selected: false
                        },
                        {
                            font: 'Roboto Mono',
                            weights: [400, 700],
                            selected: false
                        },
                        {
                            font: 'New Tegomin',
                            weights: [400, 700],
                            selected: false
                        },
                        {
                            font: 'Train One',
                            weights: [400, 700],
                            selected: false
                        },
                        {
                            font: 'Oswald',
                            weights: [400, 700],
                            selected: false
                        },
                        {
                            font: 'Source Sans Pro',
                            weights: [400, 700],
                            selected: false
                        },
                        {
                            font: 'Lato',
                            weights: [400, 700],
                            selected: false
                        },
                        {
                            font: 'Lexend',
                            weights: [400, 700],
                            selected: false
                        },
                        {
                            font: 'Poppins',
                            weights: [400, 700],
                            selected: false
                        },
                        {
                            font: 'Noto Sans',
                            weights: [400, 700],
                            selected: false
                        },
                        {
                            font: 'PT Sans',
                            weights: [400, 700],
                            selected: false
                        },
                        {
                            font: 'Merriweather',
                            weights: [400, 700],
                            selected: false
                        },
                        {
                            font: 'Ubuntu',
                            weights: [400, 700],
                            selected: false
                        },
                        {
                            font: 'Nunito',
                            weights: [400, 700],
                            selected: false
                        },
                ],
                filteredFonts: [
                    {
                        font: 'Roboto',
                        weights: [400, '400i'],
                        selected: false
                    },
                    {
                        font: 'Roboto Mono',
                        weights: [400, 700],
                        selected: false
                    },
                    {
                        font: 'New Tegomin',
                        weights: [400, 700],
                        selected: false
                    },
                    {
                        font: 'Train One',
                        weights: [400, 700],
                        selected: false
                    },
                    {
                        font: 'Oswald',
                        weights: [400, 700],
                        selected: false
                    },
                    {
                        font: 'Source Sans Pro',
                        weights: [400, 700],
                        selected: false
                    },
                    {
                        font: 'Lato',
                        weights: [400, 700],
                        selected: false
                    },
                    {
                        font: 'Lexend',
                        weights: [400, 700],
                        selected: false
                    },
                    {
                        font: 'Poppins',
                        weights: [400, 700],
                        selected: false
                    },
                    {
                        font: 'Noto Sans',
                        weights: [400, 700],
                        selected: false
                    },
                    {
                        font: 'PT Sans',
                        weights: [400, 700],
                        selected: false
                    },
                    {
                        font: 'Merriweather',
                        weights: [400, 700],
                        selected: false
                    },
                    {
                        font: 'Ubuntu',
                        weights: [400, 700],
                        selected: false
                    },
                    {
                        font: 'Nunito',
                        weights: [400, 700],
                        selected: false
                    }
                ],
                fontWeight: 'normal'
            } 
        };

        this.changeTextLayout = this.changeTextLayout.bind(this);
        this.changeLineHeight = this.changeLineHeight.bind(this);
        this.changeLetterSpacing = this.changeLetterSpacing.bind(this);
        this.preserveSelectedText = this.preserveSelectedText.bind(this);
        this.applyStylesToSelectedText = this.applyStylesToSelectedText.bind(this);
        this.changeColor = this.changeColor.bind(this);
        this.changeFontSize = this.changeFontSize.bind(this);
        this.switchFont = this.switchFont.bind(this);
        this.changeFontWeight = this.changeFontWeight.bind(this);
        this.filterFontsByIndexOf = this.filterFontsByIndexOf.bind(this);
        this.storeInLocalStorage = this.storeInLocalStorage.bind(this);
    }

    componentDidMount(){
        const storage = localStorage.getItem('state');

        if(storage) this.setState(JSON.parse(storage));
    }

    filterFontsByIndexOf(searchKey: string){
        console.log(searchKey);
        if(searchKey !== ''){
            this.setState({...this.state, textOptions : {
                                        ...this.state.textOptions,
                                        filteredFonts: this.state.textOptions.fonts.filter((el: any) => {
                                            return el.font.toLowerCase().indexOf(searchKey) > -1;
                                        })
                                        }
                        });
        } else {
            this.setState({...this.state, textOptions : {
                ...this.state.textOptions,
                filteredFonts: this.state.textOptions.fonts
                }
            });
        }
    }

    storeInLocalStorage() {
        localStorage.setItem('state', JSON.stringify(this.state));
        alert('Options are saved...');
    }

    changeFontWeight(newWeight: string) {
        this.setState({...this.state, 
                            textOptions: 
                                {...this.state.textOptions, fontWeight: newWeight  }});
    } 

    switchFont(fontName: string){
        //deactivate all selected fonts

        //Choose a font then disable others + copy new instance

        let fontsState = Object.assign({}, this.state);

        let fontsArray = fontsState.textOptions.fonts.map((font: any) => {
            if(font.font === fontName)
                return {
                    ...font,
                    selected: !font.selected
                };
            else 
                return {
                    ...font,
                    selected: false
                };
        });

        //now select particular 

        fontsState.textOptions.fonts = fontsArray;
        
        //change state

        this.setState(fontsState);
        
    }

    applyStylesToSelectedText(text: any, anchor: any){

        console.log(text, anchor);
        let current = text;
        let content = this.state.text.slice();

        console.log(text, anchor);

        content = content.replace(current, `<a href='${anchor}'>${current}</a>`);                          
                                
        this.setState({...this.state, text: content}, () => {
            //console.log(this.state);
        }); 

        //console.log('current', current, 'content', content);
    }

    preserveSelectedText(selected: any){
        this.setState({...this.state, text: selected.target.value});
    }

    changeFontSize(newValue: any) {
        this.setState({...this.state, textOptions: { ...this.state.textOptions, fontSize: `${newValue}px` }});
    }

    changeColor(newValue: string) {
        this.setState({...this.state, textOptions: { ...this.state.textOptions, color: newValue }});
    }

    changeLetterSpacing(newValue: string) {
        this.setState({ ...this.state, textOptions: { ...this.state.textOptions, letterSpacing: `${newValue}px` } });
    }

    changeTextLayout(direction: string) {
        // left right middle, flat
        this.setState({ ...this.state, textOptions: { ...this.state.textOptions, textAlign: direction } });
    }

    changeLineHeight(newValue: string){
        this.setState({ ...this.state, textOptions: { ...this.state.textOptions, lineHeight: `${newValue}%` } });
        console.log(newValue);
    }

    render(){
        return (
            <OptionsContext.Provider value={ { text: this.state.text,
                                               selectedText: this.state.selectedText,
                                               textOptions: this.state.textOptions,
                                               changeTextLayout: this.changeTextLayout,
                                               changeLineHeight: this.changeLineHeight,
                                               changeLetterSpacing: this.changeLetterSpacing,
                                               preserveSelectedText: this.preserveSelectedText,
                                               applyStylesToSelectedText: this.applyStylesToSelectedText,
                                               changeColor: this.changeColor,
                                               changeFontSize: this.changeFontSize,
                                               switchFont: this.switchFont,
                                               changeFontWeight: this.changeFontWeight,
                                               filterFontsByIndexOf: this.filterFontsByIndexOf,
                                               storeInLocalStorage: this.storeInLocalStorage
                                            } }>
                { this.props.children }
            </OptionsContext.Provider>
        );
    }

}

export { OptionsContext, OptionsProvider };