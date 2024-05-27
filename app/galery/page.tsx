import React from "react";
import greenLaf from "@/public/logo-01.jpg";
import calegarioGames from "@/public/logo-07.jpg";
import doctorLogo from "@/public/logo-08.jpg";
import ecoTech from "@/public/logo-02.jpg";
import laBelle from "@/public/logo-03.jpg";
import urbanBeat from "@/public/logo-04.jpg";
import greenHorizonFarms from "@/public/logo-05.jpg";
import TechPulse from "@/public/logo-06.jpg";
import EcoVibe from "@/public/logo-09.jpg";
import { ThreeDCardLogo } from "@/components/card-logo";

interface cardProps {
  title: string;
  ia: string;
  prompt: string;
  imageSrc: string;
}

const cardsData: cardProps[] = [
  {
    title: "Green Laf",
    ia: "Copilot",
    prompt:
      "Create a minimalist and modern logo for a company named GreenLeaf Organics, which is in the health and wellness industry. The logo should include earth tones like green and brown, and avoid bright neon colors. It should use a clean sans-serif font and include a leaf or plant element. The logo should convey a sense of trust and freshness, and be simple yet memorable. The logo should be provided on a white background.",
    imageSrc: greenLaf.src,
  },
  {
    title: "Calegario games",
    ia: "Copilot",
    prompt:
      "Create a minimalist and modern logo for a company named Calegario Games, which is in the game industry. The logo should include joysticks and colors like blue and purple, and bright neon colors. It should use a clean sans-serif font and include a game-related element. The logo should convey a sense of creativity and excitement, and be simple yet memorable. The logo should be provided on a white background.",
    imageSrc: calegarioGames.src,
  },
  {
    title: "Doctor Logo",
    ia: "ChatGpt + Copilot",
    prompt:
      "Design a logo for a modern, innovative doctor. The logo should combine traditional medical symbols (like a stethoscope or caduceus) with elements that represent AI and technology (such as circuit patterns, digital lines, or abstract neural networks). Use a color palette that includes medical blues or greens, with accents of high-tech colors like silver or neon blue. The logo should be versatile enough to be used on business cards, websites, and medical equipment.",
    imageSrc: doctorLogo.src,
  },
  {
    title: "EcoTech Solutions",
    ia: "DeepAi",
    prompt:
      "Create a logo for EcoTech Solutions that is modern and clean, reflecting our commitment to sustainability and technological innovation. Use visual elements such as solar panels or leaves. Use green and blue colors to symbolize nature and technology. The logo should convey progress and environmental responsibility",
    imageSrc: ecoTech.src,
  },
  {
    title: "La Belle Cuisine",
    ia: "DeepAi",
    prompt:
      "Create a logo for La Belle Cuisine that is elegant and sophisticated, exuding fine French cuisine. Include elements such as a stylized fork or a cloche. Use classic colors like black, gold, and white. The design should be timeless and refined with elegant typography",
    imageSrc: laBelle.src,
  },
  {
    title: "Urban Beat",
    ia: "DeepAi",
    prompt:
      "Create a logo for Urban Beat that is bold and modern, capturing the essence of urban fashion and youthful energy. Include graphic elements such as graffiti and geometric lines. Use vibrant colors like red, yellow, and black. The logo should be versatile for use on clothing tags, packaging, and marketing campaigns",
    imageSrc: urbanBeat.src,
  },
  {
    title: " Green Horizon Farms",
    ia: "ChatGpt + DeepAi",
    prompt:
      "Create a logo for Green Horizon Farms that is organic and vibrant, capturing the essence of sustainable agriculture. Include graphic elements such as leaves and a sunrise. Use green, brown, and yellow. The logo should be versatile for use on product labels, website banners, and market stand signage",
    imageSrc: greenHorizonFarms.src,
  },
  {
    title: "TechPulse ",
    ia: "ChatGpt + DeepAi",
    prompt:
      "Create a logo for TechPulse Innovations that is dynamic and futuristic, capturing the essence of cutting-edge technology and innovation. Include graphic elements such as digital circuits and abstract shapes. Use electric blue, neon green, and black. The logo should be versatile for use on website headers, app icons, and trade show booths",
    imageSrc: TechPulse.src,
  },
  {
    title: "EcoVibe",
    ia: "Canva AI",
    prompt:
      "Create a logo for EcoVibe Apparel that is eco-friendly and trendy, capturing the essence of sustainable fashion and modern lifestyle. Include graphic elements such as leaf motifs and minimalist lines. Use earth tones like green, brown, and beige. The logo should be versatile for use on clothing labels, shopping bags, and social media profiles.",
    imageSrc: EcoVibe.src,
  },
];

export default function Page() {
  return (
    <div className="grid h-screen overflow-y-auto grid-cols-1 lg:grid-cols-3 py-24 px-10 lg:px-0">
      {cardsData.map((card, index) => (
        <ThreeDCardLogo
          key={index}
          title={card.title}
          ia={card.ia}
          prompt={card.prompt}
          imageSrc={card.imageSrc}
        />
      ))}
    </div>
  );
}
