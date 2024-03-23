import React from "react";
import ZingTouch from 'zingtouch';
import styled from "styled-components";

const ButtonsContainer = styled.div`
    width: 200px;
    height: 200px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: white;
`;

const Prev = styled.img`
    position: absolute;
    left: 10%;
`;

const MenuText = styled.p`
    position: absolute;
    top: 15%;
    color: #b9b9b9;
    font-weight: 600;
    cursor: default;
`;

const Next = styled.img`
    position: absolute;
    right: 10%;
`;

const PlayPause = styled.div`
    position: absolute;
    bottom: 10%;
`;

const Play = styled.img`
    width: 18px;
`;

const Pause = styled.img`
    width: 16px;
`;

const Ok = styled.div`
    width: 80px;
    height: 80px;
    background: #c9c9c9;
    border-radius: 50%;
`;

class Buttons extends React.Component {

    componentDidMount() {
        const {changeActiveNav} = this.props;
        
        var myElement = document.getElementById('buttons');
        var zt = new ZingTouch.Region(myElement);
        let positive = 0;
        let negative = 0;
        
        zt.bind(myElement, 'rotate', function(e){
            //Actions here
            if(e.detail.angle > 10) {
                if(e.detail.distanceFromLast > 0){
                    negative = 0;
                    positive++;
                    if(positive > 15){
                        console.log(e.detail);
                        changeActiveNav(1);
                        positive = 0;
                    }
                }
                else{
                    positive = 0;
                    negative++;
                    if(negative > 15){
                        console.log(e.detail);
                        changeActiveNav(-1);
                        negative = 0;
                    }
                }
                e.detail.distanceFromOrigin = 0;
            }
        });
    }

    render() {
        return (
            <ButtonsContainer id="buttons">
                <Prev width="24" height="24" src="https://img.icons8.com/material-sharp/24/B9B9B9/skip-to-start.png" alt="skip-to-start"/>
                
                <MenuText onClick={() => this.props.clickedMenu()}>MENU</MenuText>
                
                <Next width="24" height="24" src="https://img.icons8.com/material-sharp/24/B9B9B9/end.png" alt="end"/>
                
                <PlayPause>
                    <Play width="24" height="24" src="https://img.icons8.com/material/24/B9B9B9/play--v1.png" alt="play--v1"/>
                    <Pause width="24" height="24" src="https://img.icons8.com/material-outlined/24/B9B9B9/pause--v1.png" alt="pause--v1"/>
                </PlayPause>

                <Ok onClick={() => this.props.clickedOk()}></Ok>

            </ButtonsContainer>
        )
    }
}

export default Buttons;