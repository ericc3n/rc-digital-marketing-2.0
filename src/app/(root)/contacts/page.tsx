import { contacts } from '@/data/contacts';
import MailForm from '@/components/Form/MailForm';
import React from 'react';
import { FaPhone } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';
import './style.scss';

export default function page() {
  return (
    <div className='section contacts'>
      <div className="text-content">
        <h2>Contatti</h2>
        <div className="contact-card">
          <div className="icon">
            <IoMdMail />
          </div>
          <p>
            <a href={`mailto:${contacts.email}`} className='simple-link'>{contacts.email}</a>
          </p>
        </div>
        <div className="contact-card">
          <div className="icon">
            <FaPhone />
          </div>
          <p>
            <a href={`tel:${contacts.tel}`} className='simple-link'>{contacts.tel}</a>
          </p>
        </div>
      </div>
      <div className="side-content">
        <MailForm />
      </div>
    </div>
  )
}
