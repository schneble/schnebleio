
'use client'

import React, { useState } from 'react';
import Modaly from './Modaly';
import { Card } from '@nextui-org/react';

interface CardxProps {
    title: string;
    cardDescription: string; // Description for the card
    image: string; // New prop for image filename
    modalDescription: string;
    repoUrl: string; // Unique GitHub repository URL
    dispUrl: string; // Unique website URL
    showpic: string;
  }
  const Cardx: React.FC<CardxProps> = ({ title, cardDescription, image, modalDescription, repoUrl, dispUrl }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleImageClick = () => {
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
    };

    return (
        <>
          <Card
           className=
           "overflow-hidden  rounded-xl  bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-800 transition-all hover:-translate-y-0.5 hover:shadow-xl ">
         {/* <Image
                src={image}
                className=' rounded-t-xl rounded-b-none p-1' /> */}
                <div className=' h-12 bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-800'/>
                    <div
                        className=
                        " "
                    />
                    <div className="flex items-center justify-between  px-4 ">
                        <Modaly
                            isOpen={isModalOpen}
                            onClose={closeModal}
                            title={title}
                            description={modalDescription}
                            indepthUrl={repoUrl}
                            showpic={image}
                            repoUrl={repoUrl}
                            image={image}
                        />
                    </div>
                    {/* <div className="flex p-4 mb-2 "> */}
                    {/* <p className=" text-sm  text-gray-500 ">
                    {cardDescription}
                    </p> */}
                    {/* </div> */}
                    </Card>
                </>
            );
        };

export default Cardx;
