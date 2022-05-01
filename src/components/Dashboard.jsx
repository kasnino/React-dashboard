import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import AvatarImage from '../assets/profile.jpg'
export default function Dashboard() {
    return (
       
            <Section>
                  <div className="image">
                    <img src={AvatarImage} alt="" />
                 </div>
            </Section>
       
    )
}

const Section = styled.section`
display: flex;
flex-direction: column;
align-items: center;
background:red;
gap: 1rem;
.image{
    max-height: 10rem;
    overflow: hidden;
    border-radius: 20rem;
    border:2px solid pink;
    img {
        height: 10rem;
        width: 10rem;
        object-fit: cover;
        border-radius: 20rem;
        transition: 0.5s ease-in-out;
        cursor:pointer;
      }
}
`

