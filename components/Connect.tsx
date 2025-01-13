"use client";

import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { init } from "@emailjs/browser";
import emailjs from "@emailjs/browser";
import useInView from "react-cool-inview";
import { useToast } from "@chakra-ui/react";
import { FaArrowRightLong } from "react-icons/fa6";

import { MailIcon } from "./MailIcon";

const Connect = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
  });

  init("5ZYR13DMdRvzV54Zy");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const toast = useToast();
  const [message, setMessage] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const clearInput = () => {
    setMessage("");
    setIsLoading(false);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
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
    <div className="inline-block max-w-xs text-left">
      <form
        className="xai-border py-1 opacity-60 rounded-xl"
        onSubmit={handleSubmit}
      >
        <Input
          classNames={{
            input: [
              "dark:bg-midnight bg-transparent",
              "placeholder:mgray dark:placeholder:text-white/45",
            ],
            inputWrapper: ["dark:bg-midnight-950 bg-midnight"],
          }}
          endContent={
            <Button
              className="bg-transparent"
              isLoading={isLoading}
              type="submit"
            >
              <FaArrowRightLong className="text-lg pointer-events-none text-white/45 dark:text-white/45 font-medium " />
            </Button>
          }
          id="message"
          placeholder="Email"
          radius="sm"
          role="textbox"
          startContent={
            <p className="text-white/35 dark:text-white/45 font-semibold text-base text-left inline-block">
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
