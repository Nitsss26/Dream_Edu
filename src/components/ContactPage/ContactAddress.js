"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import image from "@/constant/Images/image";
import Image from "next/image";
import "./ContactAddress.css";
import { getContactById } from '@/services/service';

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const items = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const ContactAddress = () => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const fetchedContact = await getContactById('666cafcbe9bc57360c644363');
        setContact(fetchedContact);
      } catch (error) {
        console.error('Failed to fetch contact:', error);
      }
    };
    fetchContact();
  }, []);

  if (!contact) {
    return <><section className="h-screen flex justify-center items-center">
      <div className="lds-ripple"><div></div><div></div></div>
    </section></>;
  }

  const addressParts = contact.field3 ? contact.field3.split(',') : [];

  return (
    <section className="contact-us-wrapper pb-32 -mt-10 pt-8 md:pt-16 bg-slate-100">
      <div className="app__container contact-heading text-center mx-w-700 m-auto pb-50 pb-md-30 get-bottom animate">
        <div className="section-title pb-25 animate">
          <h2 className="text-3xl primary-heading capitalize">{contact.field4} <span className="highlight">{contact.field5}</span></h2>
        </div>
        <p className="pt-4 app__text text-lg font-semibold">
          {contact.description}
        </p>
      </div>
      <div className="app__container mt-8 lg:px-5 xl:px-0">
        <motion.div variants={variants} initial="hidden" whileInView="show" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div variants={items}>
            <div className="contact-card common-single-card h4-offer-card paste-hover bg-white flex justify-center items-center flex-col shadow-md">
              <div className="contact-card-icon card-paste svg-paste p-6 drop-shadow-lg">
                <Image src={image.call} alt="call" />
              </div>
              <div className="contact-card-content mt-4">
                <h6 className='font-semibold'>{contact.field1}</h6>
              </div>
            </div>
          </motion.div>
          <motion.div variants={items}>
            <div className="contact-card common-single-card h4-offer-card pink-hover bg-white flex justify-center items-center flex-col shadow-md">
              <div className="contact-card-icon card-pink1 svg-pink1 p-6 drop-shadow-lg">
                <Image src={image.chat} alt="chat" />
              </div>
              <div className="contact-card-content mt-4">
                <h6 className='font-semibold'>{contact.field2}</h6>
              </div>
            </div>
          </motion.div>
          <motion.div variants={items}>
            <div className="contact-card common-single-card h4-offer-card purple-hover bg-white flex justify-center items-center flex-col shadow-md">
              <div className="contact-card-icon card-purple svg-purple p-6 drop-shadow-lg">
                <Image src={image.placeholder} alt="placeholder" />
              </div>
              <div className="contact-card-content mt-4">
                {contact.field3 ? (
                  <h6 className='font-semibold'>
                    {addressParts[0]}, {addressParts[1]},
                    <br />
                    {addressParts.slice(2).join(',')}
                  </h6>
                ) : (
                  <h6 className='font-semibold'>Address not available</h6>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactAddress;
