import Logo from  '../Logo';
import OpcaoesHeader from '../OpcaoesHeader';
import IconesHeader from '../IconesHeader';  
import "./style.css";

function Header(){

    return(
        <header className = "App-header"> 
            <Logo/>
            <OpcaoesHeader/>
            <IconesHeader/>
        </header>
    )

}


export default Header