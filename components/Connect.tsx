'use client'

import React, { useState } from 'react';
import { Input } from "@nextui-org/react";
import { Button  } from "@nextui-org/button";
import { init } from '@emailjs/browser';
import emailjs from '@emailjs/browser';
import useInView from 'react-cool-inview'
import { useToast } from '@chakra-ui/react';
import { FaArrowRightLong } from "react-icons/fa6";
import { MailIcon } from './MailIcon'

const Connect = () => {
  const clearInput = () => {
    setMessage('');
    setIsLoading(false);
  }

  const { observe, inView } = useInView({
    unobserveOnEnter: true,
  });

  init("5ZYR13DMdRvzV54Zy");
  const toast = useToast();
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsLoading(true);

    if (message.trim() !== '') {
      emailjs.send("service_fl3n0ru","template_h2auxrc", {
        message: message,
      })
      .then((response) => {
        console.log('Email sent successfully:', response);
        alert('Message sent successfully!');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Failed to send message. Please try again later.');
      });
      clearInput();
    }
  }

  return (

      <div className="inline-block rounded-none max-w-lg text-center ">
      <form
      onSubmit={handleSubmit}
      className="flex  md:flex-nowrap  rounded-none"
      >
        <Input
          id='message'
          type='message'
          role="textbox"
          value={message}
        //   variant={'underlined'}
          placeholder="Send a message ..."
        //   variant={"bordered"}
          labelPlacement="outside"
          onChange={event => setMessage(event.currentTarget.value)}
          classNames={{
            input: " rounded-none resize-y min-h-[40px] text-base", /* Ensure font size is at least 16px */
          }}
          endContent={
            <Button
              className='bg-inherit'
              type="submit"
              isLoading={isLoading}>
              <FaArrowRightLong className="flex-shrink-0 text-xl pointer-events-none text-default-400" />
            </Button>
          }
        />
      </form>
      </div>
  )
}

export default Connect;
