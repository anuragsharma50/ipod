import React from "react";
import Buttons from "./Buttons.js";
import Screen from "./Screen.js";
import Settings from "./Settings.js";
import Games from "./Games.js";
import Coverflow from "./Coverflow.js";
import Music from "./Music.js";

class Ipod extends React.Component {

    constructor() {
        super();
        this.state = {
            showMenu: true,
            activeNav: 1,
            curr: -1, 
            nav: {
                title: 'ipod.js',
                menuItems: [
                    {
                        title: 'Coverflow',
                        submenu: [],
                        component: <Coverflow />
                    },
                    {
                        title: 'Music',
                        submenu: ['All Songs','Artist','Album'],
                        component: <Music />
                    },
                    {
                        title: 'Games',
                        submenu: [],
                        component: <Games />
                    },
                    {
                        title: 'Settings',
                        submenu: [],
                        component: <Settings />
                    },
                ]
            }
        }
    }

    changeActiveNav = (val) => {
        let temp = 3;
        if(this.state.curr === -1){
            temp = 4;
        }
        if(!this.state.showMenu){
            return;
        }else{
            if(this.state.activeNav === 0){
                val += temp;
            }
            this.setState((prevState) => ({activeNav:(prevState.activeNav+val)%temp}));
        }
    }

    clickedOk = () => {
        if(this.state.nav.menuItems[this.state.activeNav].submenu.length > 0 && this.state.activeNav !== this.state.curr){
            this.setState({curr:this.state.activeNav});
        }
        else{
            if(this.state.curr !== 1){
                this.setState({curr:this.state.activeNav});
            }
            this.toggleMenu(false);
        }
    }

    clickedMenu = () => {
        if(this.state.curr === 1 && !this.state.showMenu){
            this.toggleMenu(true);
        }
        else{
            this.toggleMenu(true);
            this.setState({curr:-1});
        }
    }

    toggleMenu = (showMenu) => {
        this.setState({showMenu});
    }

    render() {
        return (
            <div className="ipod">
                <Screen {...this.state} />
                <Buttons changeActiveNav={this.changeActiveNav} toggleMenu={this.toggleMenu} clickedOk={this.clickedOk} clickedMenu={this.clickedMenu} {...this.state} />
            </div>
        )
    }
}

export default Ipod;