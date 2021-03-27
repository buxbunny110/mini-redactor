import React from 'react';

class TextSelection extends React.Component<{ getValue: Function }, { selection: string, anchor: string }> {
    constructor(props: any){
        super(props);

        this.selectExtent = this.selectExtent.bind(this);
        this.readAnchorInput = this.readAnchorInput.bind(this);

        this.state = {
            selection: '',
            anchor: ''
        };

        document.addEventListener('selectionchange', () => {
            this.selectExtent();
        });
    }

    selectExtent() {
            let selection:any = window.getSelection();
            let startOffset = selection.anchorOffset;
            let endOffset = selection.extentOffset;
            let final = '';

            if(selection.anchorNode.textContent) {
                final = selection.anchorNode.textContent.slice(startOffset, endOffset);
            }
        

            if(final.length > 0) {
                this.setState({ selection: final });
            } 
    }

    readAnchorInput(event:any) {
        this.setState({...this.state, anchor: event.target.value });
        if(this.state.selection.length >= 0) this.props.getValue(this.state.selection, this.state.anchor);
    }

    render() {
        return <>   
                    {
                        (this.state.selection.length > 0 
                            ? 
                                <div>
                                    <label htmlFor='anchorText'> Anchor for: { this.state.selection } </label>
                                    <input onChange={ this.readAnchorInput }  id='anchorText' type='text'></input>
                                </div>
                            :
                                null
                            ) 

                    }                       
               </>
    }
}

export default TextSelection;