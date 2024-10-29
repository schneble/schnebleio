
import React from 'react';
import Cardx from '@/components/Card'
import DefaultLayout from "@/layouts/default";

export default function Recents () {

    const cards = [
		{
			title: "Allview",
			image: "/assets/allview.png",
			cardDescription: "Product oversight application",
			modalDescription: "Product oversight system enabling real-time product tracking and management. Utilizing AWS services for secure, scalable deployment and data handling.",
			repoUrl: '/works/allview',
			dispUrl: "https://google.com",
            showpic: "/assets/allview.png",


		  },
		  {
			title: "BlackRoulette",
			image: "/assets/blackblur.png",
			cardDescription: "A dark minimal vscode theme",
			modalDescription: "A dark minimal vscode theme",
			repoUrl: "/works//blackroulette",
			dispUrl: "/works/blackroulette",
               showpic: "/assets/blackblur.png"
		  },
	  ];


    return (
    //  <DefaultLayout>
        <div className="grid  grid-cols-2 gap-2 md:grid-cols-2 lg:grid-cols-2">
            {cards.map((card, index) => (
                    <Cardx key={index} title={card.title}
                cardDescription={card.cardDescription}
                image={card.image}
                modalDescription={card.modalDescription}
                showpic={card.showpic}
                repoUrl={card.repoUrl}
                dispUrl={card.dispUrl}            />
                ))}
        </div>
    //  </DefaultLayout>

    )
}
