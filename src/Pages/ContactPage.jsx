import React from "react";
import Navbar1 from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const ContactPage = () => {
  const links = [
    {
      id: 1,
      name: 'Linkedln',
      child: (
        <>
          <FaLinkedin size={150} />
        </>
      ),
      href: "https://www.linkedin.com/in/pritham-baswani-579497205/",
    },
    {
      id: 2,
      name: 'Github',
      child: (
        <>
          <FaGithub size={150} />
        </>
      ),
      href: "https://github.com/spiman9",
    },
    {
      id: 3,
      name:'Mail',
      child: (
        <>
          <HiOutlineMail size={150} />
        </>
      ),
      href: "mailto:prithambg333@gmail.com",
    },
    {
      id: 4,
      name: "Resume" ,
      child: (
        <>
          <BsFillPersonLinesFill size={150}/>
        </>
      ),
      href: "./Resume.pdf",
      download: true,
    },
  ];
  return (
    <div>
      <Navbar1 />
      <div
        className="contact-container"
        style={{
          display: "flex",
          justifyContent:'space-between',
          alignContent: "center",
          flexWrap: "wrap",
          flexDirection: "row",
          marginTop: "100px"
        }}
      >
        {links.map(({id , name , child , href , download}) => {
          return (
            <div className="card" style={{ width: "150px" }} key={id}>
              <a href={href} target="_blank" style={{textDecoration: "none" , color: 'black'}} rel="noreferrer" download={download}>
              <div className="card-img-top">
                {child}
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">{name}</h5>
              </div>
              </a>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
