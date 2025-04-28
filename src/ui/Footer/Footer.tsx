"use client";

import React from "react";
import "./Footer.scss";
import Logo from "../Logo/Logo";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import Link from "next/link";
import { IoMdMail } from "react-icons/io";
import { contacts } from "@/data/contacts";

export default function Footer() {
  return (
    <footer>
      <div className="main">
        <div className="logo-socials">
          <Logo noColor />
          <div className="socials">
            <a href="https://www.instagram.com/rc.digital_marketing/" target="_blank" className="icon"><FaInstagram /></a>
            <a href="" target="_blank" className="icon"><FaFacebook /></a>
          </div>
        </div>
        <ul className="column">
          <li className="title">Pagine</li>
          <li><Link href='/' className="link">Home</Link></li>
          <li><Link href='/solutions' className="link">Soluzioni</Link></li>
          <li><Link href='/contacts' className="link">Contatti</Link></li>
        </ul>
        <ul className="column">
          <li className="title">Contatti</li>
          <li>
            <IoMdMail style={{ verticalAlign: 'middle', marginRight: '10px' }} />
            <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
          </li>
          <li>
            <FaPhone style={{ verticalAlign: 'middle', marginRight: '10px' }} />
            <a href={`tel:${contacts.tel}`}>{contacts.tel}</a>
          </li>
        </ul>
      </div>
      <div className="end-line">
        <p className="light">© RC Digital Marketing - Images from Freepik</p>
      </div>
    </footer>
  );
}