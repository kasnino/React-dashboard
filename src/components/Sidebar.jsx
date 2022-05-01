import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MdSpaceDashboard } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaAddressCard, FaTaxi } from "react-icons/fa";
import { GiTwirlCenter } from "react-icons/gi";
import { BsFillChatTextFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
export default function Sidebar() {
  const [currentLink, setCurrentLink] = useState(1)
  
  return (
    <>
      <Section>
        <div className="top">
          <div className="brand">
            <FaTaxi />
            <span>Mi Taxy</span>
          </div>
          <div className="toggle"></div>
          <div className="links">
            <ul>
              <li className={currentLink === 1 ? "active" : "none" }
                  onClick={() => setCurrentLink(1)}
              >
                <a href="#">
                  <MdSpaceDashboard />
                  <span> Dashboard</span>
                </a>
              </li>

              <li    className={currentLink === 2 ? "active" : "none"}
                     onClick={() => setCurrentLink(2)}>
                <a href="#">
                  <RiDashboard2Fill />
                  <span> Riders</span>
                </a>
              </li>

            
              <li    className={currentLink === 3 ? "active" : "none"}
                     onClick={() => setCurrentLink(3)}>
                <a href="#">
                  <FaAddressCard />
                  <span> Payment Details</span>
                </a>
              </li>

            
              <li    className={currentLink === 4 ? "active" : "none"}
                     onClick={() => setCurrentLink(4)}>
                <a href="#">
                  <GiTwirlCenter />
                  <span> Learning Center</span>
                </a>
              </li>

             
              <li    className={currentLink === 5 ? "active" : "none"}
                     onClick={() => setCurrentLink(5)}>
                <a href="#">
                  <BsFillChatTextFill />
                  <span> FAQs</span>
                </a>
              </li>

            
              <li    className={currentLink === 6 ? "active" : "none"}
                     onClick={() => setCurrentLink(6)}>
                <a href="#">
                  <IoSettings />
                  <span> Settings</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="logout">
          <a href="#">
            <FiLogOut />
            <span className="logout">Logout</span>
          </a>
        </div>
      </Section>
    </>
  );
}

const Section = styled.section`
position: fixed;
left: 0;
background-color: #212121;
height: 100vh;
width: 18vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
padding: 2rem 0;
gap: 2rem;

.top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    .toggle {
      display: none;
    }

    .brand {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        svg {
          color: #ffc107;
          font-size: 2rem;
        }
        span {
          font-size: 2rem;
          color: #ffc107;
          font-family: "Permanent Marker", cursive;
        }
      }
      .links {
        display: flex;
        justify-content: center;
      
        ul {
          list-style-type: none;
          display: flex;
          flex-direction: column;
          gap: rem;
          margin-top:2.5rem;
          li {
            margin:0.4rem;
            padding: 0.5rem;
            border-radius: 0.6rem;
            &:hover {
              background-color: #ffc107;
              a {
                 color: black;
              }
            }
            a {
              text-decoration: none;
              display: flex;
              gap: 1rem;
              color: white;
              
              svg, span {
                margin:0.3rem;
              }
            }
          }
          .active {
            background-color: #ffc107;
            a {
              color: black;
            }
          }
      }
    }
  }
  .logout {
    padding: 0.3rem 1rem;
    border-radius: 0.6rem;
    &:hover {
      background-color: #da0037;
    }
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: white;
    }
  }
    
`;
