"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@nextui-org/react";
import emailjs from "@emailjs/browser";
import { useToast } from "@chakra-ui/react";
import { FaArrowRightLong } from "react-icons/fa6";

import { MailIcon } from "./MailIcon";

const Connect = () => {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    emailjs.init("5ZYR13DMdRvzV54Zy");
  }, []);

  const clearInput = () => {
    setEmail("");
    setIsLoading(false);
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!email.trim()) {
      toast({
        title: "Email required.",
        description: "Please enter your email address.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      setIsLoading(false);

      return;
    }

    if (!isValidEmail(email)) {
      toast({
        title: "Invalid email format.",
        description: "Please enter a valid email address.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      setIsLoading(false);

      return;
    }

    emailjs
      .send("service_fl3n0ru", "template_h2auxrc", { message: email })
      .then(() => {
        toast({
          title: "Message sent.",
          description: "Your message was sent successfully.",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        clearInput();
      })
      .catch(() => {
        toast({
          title: "Failed to send message.",
          description: "Something went wrong, please try again later.",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
        setIsLoading(false);
      });
  };

  return (
    <div className="inline-block max-w-xs  text-left">
      <form className="xai-border rounded-lg" onSubmit={handleSubmit}>
        <div className="  opacity-50 rounded-lg   relative">
          <Input
            classNames={{
              input: [
                "dark:bg-midnight bg-transparent",
                "placeholder:bg-mgray dark:placeholder:text-white/45",
              ],
              inputWrapper: ["dark:bg-midnight-950 bg-midnight-950"],
            }}
            id="email"
            placeholder="Email"
            radius="sm"
            role="textbox"
            startContent={
              <p className="text-white/35 dark:text-white/45 font-semibold text-base text-left inline-block">
                <MailIcon />
              </p>
            }
            type="email"
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
          />
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 text-x400/60 dark:text-x400/60 text-lg"
            disabled={isLoading}
            type="submit"
          >
            {isLoading ? (
              <span className="text-sm">...</span>
            ) : (
              <FaArrowRightLong />
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Connect;
