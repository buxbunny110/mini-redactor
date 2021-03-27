import React, { Component } from 'react';
import styled from 'styled-components';
import OptionsBar from './OptionsBar';
import ChangableContent from './ChangableContent';
import { OptionsProvider }  from './context/OptionsContext';

const MainLayout = styled.main`
    display: flex;
`;

const AmendmentArea = styled.section`
    background-color: white;
    flex: 8;
    margin-right: 1em;
    padding: 1.5em;
    width: 55%;
`;

const OptionsArea = styled.section`
    flex: 3;
`;


class MainContainer extends Component {
    constructor(props: any){
        super(props);
        
    }

    render(){
        return (
            <OptionsProvider>
                <MainLayout>
                    <AmendmentArea>
                        <ChangableContent text="Some default text"></ChangableContent>
                    </AmendmentArea>
                    <OptionsArea>
                        <OptionsBar />
                    </OptionsArea>
                </MainLayout>
            </OptionsProvider>
        );
    }
    
}

export default MainContainer;