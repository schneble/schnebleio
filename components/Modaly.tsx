'use client'
import React from 'react';
import { Image } from '@nextui-org/react';
import { BadgeCheck } from "lucide-react";
import {Modal, ModalContent, ModalBody, ModalFooter, Button, RadioGroup, Radio, useDisclosure} from "@nextui-org/react";
interface ModalyProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  image: string;
  description: string;
  indepthUrl: string;
  repoUrl: string;
  showpic: string;
}

const Modaly: React.FC<ModalyProps> = ({ title, showpic, description, repoUrl }) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [modalPlacement, setModalPlacement] = React.useState("auto");
  return (
    <>
              <div className=''>
                <Button  onPress={onOpen} className='rounded-none p-0 bg-transparent' >
                    <h2 className='flex text-medium md:text-medium sm:text-medium lg:text-medium  antialiased font-medium text-zinc-300 backdrop-blur-sm '>
                        {title}
                        <BadgeCheck className="w-3 h-3 ml-1 text-white" fill="#1c9bef" />
                    </h2>
                </Button>
              </div>
              <RadioGroup
                value={modalPlacement}
                onValueChange={setModalPlacement}
                >
                <Modal
                    backdrop="blur"
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    isDismissable={false}
                    isKeyboardDismissDisabled={true}
                    placement={'center'}
                    classNames={{
                        body: "py-4",
                        backdrop: "bg-[#000000]/50 backdrop-opacity-40",
                        base: "0",
                    }}
                    >
                    <ModalContent className='bg-gradient-to-br border-2 border-zinc-600/10 from-zinc-200 via-zinc-100 to-zinc-200'>
                    {(onClose) => (
                    <>
                    <Image
                    src={showpic}
                    className='rounded p-2' />
                    <ModalBody className='bg-slate-50 shadow'>
                        <h2 className='antialiased text-black font-semibold text-lg'>{title}</h2>
                        <p className='antialiased mb-2 pb-2  border-b-2 border-zinc-400/10 text-black font-light text-md'>{description}</p>
                        <div style={{  textAlign: 'center' }}>
                        </div>
                    </ModalBody>
                    <ModalFooter className=' '>
                    <Button className='flex ' color="danger" variant="light" onPress={onClose}>
                        Close
                    </Button>
                    <Button className='bg-black text-white rounded-md' onPress={onClose}>
                        <a href={repoUrl} >
                            <button className=''>
                                In depth →
                            </button>
                        </a>
                    </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
         </RadioGroup>
    </>
  );
}

export default Modaly;
