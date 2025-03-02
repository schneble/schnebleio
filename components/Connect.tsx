"use client";

import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "@nextui-org/button";
import { Input } from "@heroui/input";

import { MailIcon } from "./MailIcon";

const Connect = () => {
  //   const toast = useToast();
  const [message, setMessage] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    emailjs.init("5ZYR13DMdRvzV54Zy");
  }, []);

  const clearInput = () => {
    setMessage("");
    setIsLoading(false);
  };

  //   const isValidEmail = (email: string) => {
  //     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  //   };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (message.trim() !== "") {
      emailjs
        .send("service_fl3n0ru", "template_h2auxrc", { message })
        .then((response) => {
          // eslint-disable-next-line no-console
          console.log("Email sent successfully:", response);
          alert("Message sent successfully!");
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error("Error sending email:", error);
          alert("Failed to send message. Please try again later.");
        });
      clearInput();
    }
  };

  return (
    <div className="inline-block max-w-xs  text-left">
      <form className="  py-2 rounded-lg" onSubmit={handleSubmit}>
        <Input
          classNames={{
            // If you want to keep it dark with no weird boxes
            input: [
              "  h-16", // your custom background
              "appearance-none", // remove default OS stuff
              "focus:outline-none",
              "focus:ring-0",
              "placeholder:opacity-20 ml-2",
            ],
            inputWrapper: ["bg-black py-2"],
          }}
          endContent={
            <Button
              className="bg-transparent  focus:opacity-100 font-semibold opacity-15"
              isLoading={isLoading}
              type="submit"
            >
              <p className="ml-10 text-lg ">
                {" "}
                <FaArrowRightLong />
              </p>
            </Button>
          }
          id="message"
          placeholder="Enter your email"
          radius="sm"
          role="textbox"
          size={"lg"}
          startContent={
            <p className="text-white/10 dark:text-white/45 font-semibold text-lg text-left inline-block">
              <MailIcon />
            </p>
          }
          type="message"
          value={message}
          onChange={(event) => setMessage(event.currentTarget.value)}
        />
      </form>
    </div>
  );
};

export default Connect;
