
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
			title: "jsKeys",
			image: "/assets/jskeys.png",
			cardDescription: "My Karabiner-Elements keyboard layout.",
			modalDescription: "My Karabiner-Elements keyboard layout.",
			repoUrl: "/works/jskeys",
			dispUrl: "/works/jskeys",
            showpic: "/assets/jskeys.png"
		  },
		  {
			title: "BlackRoulette",
			image: "/assets/blackblur.png",
			cardDescription: "A dark minimal vscode theme",
			modalDescription: "A dark minimal vscode theme",
			repoUrl: "/works/blackroulette",
			dispUrl: "/works/blackroulette",
            showpic: "/assets/blackblur.png"
		  },
          {
			title: "Kinetiq",
			image: "/assets/kinetiq.png",
			cardDescription: "A modern lightweight boilerplate for front-end development.",
			modalDescription:"A modern lightweight boilerplate for front-end development.",
			repoUrl: "/works/kinetiq",
			dispUrl: "/works/kinetiq",
               showpic: "/assets/kinetiq.png"
		  },
          {
			title: "Go seek",
			image: "/assets/seek.png",
			cardDescription: "Scan documents, images, or entire directories for anything corrupted or malicious.",
			modalDescription: "Scan documents, images, or entire directories for anything corrupted or malicious",
			repoUrl: "/works/goSeek",
			dispUrl: "/works/goSeek",
            showpic: "/assets/seek.png"
		  },
          {
			title: "Forecast",
			image: "/assets/forecast.png",
			cardDescription: "Access current weather data for any location",
			modalDescription: "Access current weather data for any location",
			repoUrl: "/works/forecast",
			dispUrl: "/works/forecase",
            showpic: "/assets/forecast.png"
		  },
          {
			title: "Selfintro",
			image: "/assets/selfIntro.png",
			cardDescription: "A self introducing terminal.",
			modalDescription: "A self introducing terminal.",
			repoUrl: "/works/selfIntro",
			dispUrl: "/works/selfIntro",
            showpic: "/assets/selfIntro.png"
		  },
	  ];


    return (
    //  <DefaultLayout>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-3">
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
