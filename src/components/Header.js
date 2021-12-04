import React, {useState} from 'react'
import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import { selectCars } from '../features/car/carSlice'
import { useSelector } from 'react-redux'


const Container = styled.div`
    min-height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    z-index: 1;
    
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    a {
        font-weight: 600;
        flex-wrap: no-wrap;
        padding: 7px 14px;
        border-radius: 10px;
        font-size: 15px;
        letter-spacing: 1.2px;
        &:hover {
            background: hsl(0,0%,0%,.05);
            // border-radius: 12px;
        }
    }

    @media (max-width: 800px) {
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    ol {
        display: flex;
        li {
            padding: 7px 12px;
            font-weight: 600;
            margin-right: 10px;
            flex-wrap: no-wrap;
            list-style-type: none;
            &:hover {
                background: hsl(0,0%,0%,.05);
                border-radius: 10px;
            }
        }
    }
    @media (max-width: 800px){
        li:nth-child(1), li:nth-child(2) {
            display: none;
        }
    }
    
`
const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16;
    & li {
        list-style-type: none;
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0,0.2)
    };
    a {
        font-weight: 600;
    }
    padding: 20px;
    transform: ${({show}) => show ? 'translateX(0)': 'translateX(100%)'};
    transition: transform 0.2s;
`

const CustomClose = styled(FaTimes)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
`

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false)
    const cars = useSelector(selectCars)

    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
                {cars && cars.map((car, index) => (<a key = {index}  href="#"><span>{car}</span></a>))}
            </Menu>
            <RightMenu>
                <ol>
                    <li>
                        <a href="$#32"><span>Shop</span></a>
                    </li>
                    <li>
                        <a href="$#31"><span>Account</span></a>
                    </li>
                    <li>
                        <a href="$#98" onClick={() => setBurgerStatus(true)}><span>Menu</span></a>
                    </li>
                </ol>
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)}/>
                </CloseWrapper>
                {cars && cars.map((car, index) => (
                    <li><a key={index} href="#">{car}</a></li>
                ))}
                <li><a href="$#1">Existing Inventory</a></li>
                <li><a href="$#2">Used Inventory</a></li>
                <li><a href="$#3">Trade-in</a></li>
                <li><a href="$#4">Test Drive</a></li>
                <li><a href="$#5">Powerwall</a></li>
                <li><a href="$#6">Commercial Energy</a></li>
                <li><a href="$#7">Utilities</a></li>
                <li><a href="$#8">Charging</a></li>
                <li><a href="$#9">Find Us</a></li>
                <li><a href="$#10">Support</a></li>
                <li><a href="$#11">Investor Relations</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header
