import Logo from  '../Logo';
import OpcaoesHeader from '../OpcaoesHeader';
import IconesHeader from '../IconesHeader';  
import styled from 'styled-components'

const HeaderContainer = styled.header`

    background-color: rgb(236, 239, 243);
    display: flex;
    justify-content: center;

`

function Header(){

    return(
        <HeaderContainer> 
            <Logo/>
            <OpcaoesHeader/>
            <IconesHeader/>
        </HeaderContainer>
    )

}


export default Header