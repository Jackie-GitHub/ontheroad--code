import React from 'react';
import './Header.scss';
import logoImage from '../../resources/img/logo.png'; 
import logoImageWhite from '../../resources/img/logoWhite.png'; 

import SearchBar from '../SearchBar';
import SearchBarDarkBack from '../SearchBarDarkBack';
import SideBar from '../SideBar';

class Header extends React.Component {
    componentDidMount() {
        window.addEventListener('scroll', this.headerStyleChange)
    }

    headerStyleChange = () => {
        //https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY
        let supportPageOffset = window.pageXOffset !== undefined;
        let isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
        let scroll = {
        x: supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
        y: supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
        };
        if (scroll.y > 750) {
            document.getElementById("nav").classList.add('hide');
            document.getElementById("nav-dark").classList.remove('hide'); 
        } else {
            document.getElementById("nav").classList.remove('hide');
            document.getElementById("nav-dark").classList.add('hide');
        }
    }
  
    render() {
        return (
            <div>

            <SideBar onMenuClick={this.props.sideBar} onclick={()=>{this.props.hideSideBar()}} >
                <div className="navTextwrapV" >
                    <div className="navItemsV">
                        <div onClick={()=> {this.props.onclickToCenter('mainDescription');this.props.hideSideBar() }} className="navItemV" >About </div>
                        <div onClick={()=> {this.props.onclickToTop('bigCities');this.props.hideSideBar()}} className="navItemV" >Big Cities</div>
                        <div onClick={()=> {this.props.onclickToTop('smallTowns');this.props.hideSideBar()}} className="navItemV" >Small Towns</div>
                        <div onClick={()=> {this.props.onclickToTop('nature');this.props.hideSideBar()}} className="navItemV" >Nature</div>
                        <div onClick={()=> {this.props.onclickToTop('submitForm');this.props.hideSideBar()}} className="navItemV" >Contact</div>
                    </div>
                    <SearchBar onSubmit={this.props.searchTerm}/>                    
                </div>
            </SideBar>
              
                
            
            <nav id="nav" className="header-navbar header-navbar-white">
                <div className="navLogo" onClick={()=>{window.scrollTo({top: 0,left:0,behavior: 'smooth'})}}><img src={logoImage} alt="OnTheRoad logo"/></div>

                <div className="navRight" >
                    <div className="navMenu" onClick={()=>{this.props.showSideBar()}} >
                        <div className="navMenuIcon">
                            <ion-icon name="menu-outline" size="large"></ion-icon>
                        </div>                        
                    </div>          

                    <div className="navText">
                        <div className="navTextwrap" >
                            <div className="navItems">
                                <div onClick={()=> {this.props.onclickToCenter('mainDescription')}} className="navItem" >About </div>
                                <div onClick={()=> {this.props.onclickToTop('bigCities')}} className="navItem" >Big Cities</div>
                                <div onClick={()=> {this.props.onclickToTop('smallTowns')}} className="navItem" >Small Towns</div>
                                <div onClick={()=> {this.props.onclickToTop('nature')}} className="navItem" >Nature</div>
                                <div onClick={()=> {this.props.onclickToTop('submitForm')}} className="navItem" >Contact</div>
                            </div>
                            <SearchBar onSubmit={this.props.searchTerm} />                    
                        </div> 
                    </div>
                </div>    
            </nav>
            <nav id="nav-dark" className="header-navbar header-navbar-dark hide">
                <div className="navLogo" onClick={()=>{window.scrollTo({top: 0,left:0,behavior: 'smooth'})}}><img src={logoImageWhite} alt="OnTheRoad logo white"/></div>

                <div className="navRight" >
                    <div className="navMenu navMenu-dark" onClick={()=>{this.props.showSideBar()}} >
                        <div className="navMenuIcon">
                            <ion-icon name="menu-outline" size="large"></ion-icon>
                        </div>                        
                    </div>          

                    <div className="navText">
                        <div className="navTextwrap" >
                            <div className="navItems">
                                <div onClick={()=> {this.props.onclickToCenter('mainDescription')}} className="navItem navItem-dark" >About </div>
                                <div onClick={()=> {this.props.onclickToTop('bigCities')}} className="navItem navItem-dark" >Big Cities</div>
                                <div onClick={()=> {this.props.onclickToTop('smallTowns')}} className="navItem navItem-dark" >Small Towns</div>
                                <div onClick={()=> {this.props.onclickToTop('nature')}} className="navItem navItem-dark" >Nature</div>
                                <div onClick={()=> {this.props.onclickToTop('submitForm')}} className="navItem navItem-dark" >Contact</div>
                            </div>
                            <SearchBarDarkBack onSubmittt={this.onSearchSubmit} />                    
                        </div> 
                    </div>
                </div>    
            </nav>    
            </div>      
        );
    }
    
};

export default Header;