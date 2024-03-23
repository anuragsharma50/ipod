import React from "react";
import styled from "styled-components";

const ScreenContainer = styled.div`
    width: 260px;
    height: 220px;
    position: relative;
    border: 2px solid black;
    margin-bottom: 20px;
    /* background-color: indianred; */
    background: url("https://th.bing.com/th/id/R.9c7b6f78d2ced7f9a0868968c98858cf?rik=f7YMUsIZwC3pTA&riu=http%3a%2f%2f2.bp.blogspot.com%2f_PMmje156oN4%2fTOe1lwuaqoI%2fAAAAAAAAAc8%2fkRMgtMkO3H8%2fs1600%2f621ip9.jpg&ehk=6Or0LgPyzTlAnrHN5JMPIMrlk4ZA8tgRc14XkmwOxt8%3d&risl=&pid=ImgRaw&r=0");
    background-size: cover;
    background-position: center;
`;

const MenuComp = styled.ul`
    background-color: white;
    width: 65%;
    height: 100%;
    line-height: 2;
    list-style: none;
    text-align: left;
    padding: 20px 5px 5px 10px;
    font-weight: 500;
`;

const MenuHeading = styled.h3`
    font-weight: 600;
    font-size: 24px;
`;

const LI = styled.li`
    padding-left: 5px;
    background-color: ${(props) => props.active?'#369ec9':'white' };
    color: ${(props) => props.active?'white':'' };
`;

class Screen extends React.Component {

    render() {      
        const {activeNav,curr,nav} = this.props;
        return (
            <ScreenContainer>
                {
                    this.props.showMenu 
                    ? 
                    <MenuComp>
                        <MenuHeading>{curr === -1 ? nav.title : nav.menuItems[curr].title}</MenuHeading>
                        {
                            curr === -1 ? nav.menuItems.map((item,index) => {
                                return (<LI key={index} active={activeNav===index?true:false}>{item.title}</LI>)
                            })
                            : nav.menuItems[curr].submenu.map((item,index) => {
                                return (<LI key={index} active={activeNav===index?true:false}>{item}</LI>)
                            })
                        }
                    </MenuComp>
                    :
                    // <Games />
                    nav.menuItems[curr].component
                }
            </ScreenContainer>
        )
    }
}

export default Screen;