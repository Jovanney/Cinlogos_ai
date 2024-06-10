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
import EcoTech from "@/public/logo-10.jpg";
import laBelleCuisine from "@/public/logo-11.jpg";
import dragonSpriteDojo from "@/public/logo-12.jpg";
import EcoTechSolution from "@/public/logo-13.jpg";
import LaBelleCuisine from "@/public/logo-14.jpg";
import DragonSpiritDojo from "@/public/logo-15.jpg";
import EcoTechV2 from "@/public/logo-16.jpeg";
import laBelleV2 from "@/public/logo-17.jpeg";
import UrbanBeatV2 from "@/public/logo-18.jpeg";
import greenHorizonFarmsV2 from "@/public/logo-19.jpeg";
import EcoVibeV2 from "@/public/logo-20.jpeg";
import TechPulseV2 from "@/public/logo-21.jpeg";
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
  {
    title: "EcoTech Solutions",
    ia: "Tess Ai ",
    prompt:
      "Create a logo for EcoTech Solutions that is modern and clean, reflecting our commitment to sustainability and technological innovation. Use visual elements such as solar panels or leaves. Use green and blue colors to symbolize nature and technology. The logo should convey progress and environmental responsibility.",
    imageSrc: EcoTech.src,
  },
  {
    title: " La Belle Cuisine",
    ia: "Tess Ai ",
    prompt:
      "Create a logo for La Belle Cuisine that is elegant and sophisticated, exuding fine French cuisine. Include elements such as a stylized fork or a cloche. Use classic colors like black, gold, and white. The design should be timeless and refined with elegant typography",
    imageSrc: laBelleCuisine.src,
  },
  {
    title: "Dragon Spirit Dojo",
    ia: "Tess Ai ",
    prompt:
      "Create a logo for Dragon Spirit Dojo that is dynamic and impactful, capturing the essence of martial arts and the dojo's philosophy. Include elements such as dragons or silhouettes of practitioners in action. Use red, black, and white colors. The design should reflect strength, discipline, and tradition. The typography should be robust and harmonious with the visual elements",
    imageSrc: dragonSpriteDojo.src,
  },
  {
    title: "EcoTech Solutions",
    ia: "Fotor",
    prompt:
      "Create a logo for EcoTech Solutions that is modern and clean, reflecting our commitment to sustainability and technological innovation. Use visual elements such as solar panels or leaves. Use green and blue colors to symbolize nature and technology. The logo should convey progress and environmental responsibility. also insert my brand name EcoTech Solutionlogo.",
    imageSrc: EcoTechSolution.src,
  },
  {
    title: " La Belle Cuisine",
    ia: "Fotor",
    prompt:
      "Create a logo for La Belle Cuisine that is elegant and sophisticated, exuding fine French cuisine. Include elements such as a stylized fork or a cloche. Use classic colors like black, gold, and white. The design should be timeless and refined with elegant typography. also insert my brand name La Belle Cuisine on logo.",
    imageSrc: LaBelleCuisine.src,
  },
  {
    title: "Dragon Spirit Dojo",
    ia: "Fotor",
    prompt:
      ": Create a logo for Dragon Spirit Dojo that is dynamic and impactful, capturing the essence of martial arts and the dojo's philosophy. Include elements such as dragons or silhouettes of practitioners in action. Use red, black, and white colors. The design should reflect strength, discipline, and tradition. The typography should be robust and harmonious with the visual elements. also insert my brand name Dragon Spirit Dojo on logo.",
    imageSrc: DragonSpiritDojo.src,
  },

  {
    title: "EcoTech Solutions V2",
    ia: "DeepAI",
    prompt:
      ": Main Icon: Integrate a stylized leaf and a solar panel, with the leaf partially wrapping around or overlaying the solar panel. The leaf should have clean, modern lines and the solar panel should have a grid-like pattern to signify technology. Color Palette: Use shades of green (e.g., #4CAF50) for the leaf to represent nature and shades of blue (e.g., #2196F3) for the solar panel to represent technology. Ensure the colors are vibrant yet harmonious. Typography: Use a sleek, sans-serif font for the text 'EcoTech Solutions'. The font should be modern and easy to read, with a slight emphasis on boldness to convey strength and innovation. Style and Layout: The icon should be positioned to the left of the text, creating a balanced and horizontal layout. Ensure the proportions between the icon and the text are balanced, with the icon slightly smaller than the text height. Texture and Finish: Apply a subtle gradient effect to the leaf to give it a three-dimensional look, while keeping the solar panel flat and grid-like for a modern tech appearance. Avoid overly complex textures to maintain a clean look.",
    imageSrc: EcoTechV2.src,
  },
  {
    title: "La Belle Cuisine V2",
    ia: "DeepAI",
    prompt:
      "Main Icon: A stylized fork crossing a cloche, both drawn with fine and detailed lines.Color Palette: Use black as the background color, with metallic gold details for the fork and cloche. Use white for the text.Typography: Choose a classic and refined serif font for the name 'La Belle Cuisine'. The typography should be elegant and legible, with adequate spacing between the letters.Style and Layout: The design should be symmetrical and centered. The icon should be positioned above the name, with balanced proportions.Texture and Finish: Add a subtle shine effect to the gold to simulate a realistic metallic finish. The black background should be matte to contrast with the shiny gold.",    
      imageSrc: laBelleV2.src,
  },
  {
    title: "Urban Beat V2",
    ia: "DeepAI",
    prompt:
      "Create a logo for 'Urban Beat' that reflects urban fashion and youthful energy. The logo should include the following elements Graffiti Style: Incorporate graffiti-inspired elements such as spray paint effects, bold and irregular lettering, and street art motifs.Geometric Lines: Add geometric lines and shapes to give a modern and structured feel.Vibrant Colors: Use a color palette of red, yellow, and black with high contrast to ensure the logo stands out. For instance, use red for the main text, yellow for highlights or accents, and black for outlines and details.Versatile Design: Ensure the logo is versatile for use on clothing tags, packaging, and marketing materials. It should be clear and recognizable at different sizes.Text: Include the text 'Urban Beat' prominently in a bold and dynamic font that complements the graffiti and geometric elements.",    
      imageSrc: UrbanBeatV2.src,
  },
  {
    title: "Green Horizon Farms V2",
    ia: "DeepAI",
    prompt:
      "A sunrise in the background, symbolizing new beginnings and growth.Leaves surrounding or incorporated into the text, emphasizing the organic aspect.A simple representation of fields or farm landscape at the bottom.Color Scheme:Green for the leaves and fields, representing nature and sustainability.Brown for the text and fields, symbolizing the earth and soil.Yellow for the sunrise, indicating energy and vitality.Typography:Use a clean, sans-serif font for 'Green Horizon Farms' to ensure readability.The text should be bold and slightly curved to harmonize with the organic elements.Style:Flat design with minimal shading to keep the logo versatile and easily recognizable.Ensure the logo is scalable and looks good in various sizes, from small product labels to large banners.Composition:Place the sunrise at the top center of the logo.Position the text 'Green Horizon Farms' below the sunrise, with leaves integrated into or surrounding the text.Add subtle field elements at the bottom to ground the design.",    
      imageSrc: greenHorizonFarmsV2.src,
  },
  {
    title: "Eco Vibe V2",
    ia: "Canva",
    prompt:
      "Leaf motifs integrated into the design to symbolize eco-friendliness and sustainability.Minimalist lines to give a modern and trendy look.A subtle circular or rectangular frame to encapsulate the elements neatly.Color Scheme:Earth tones such as:Green for the leaves, symbolizing nature and sustainability.Brown for text or accents, representing the earth and eco-friendliness.Beige for the background or additional elements to maintain a neutral, earthy feel.Typography:Use a clean, modern, sans-serif font for 'EcoVibe Apparel' to ensure readability.The text should be slightly bold to stand out but still harmonize with the minimalist design.Consider using lowercase letters for a more casual and approachable feel.Style:Flat design with minimal shading to keep the logo versatile and easily recognizable.Ensure the logo is scalable and looks good in various sizes, from small clothing labels to large shopping bags and social media profiles.Composition:Position the leaf motifs either at the top or around the text to create a balanced and cohesive look.",    
      imageSrc: EcoVibeV2.src,
  },
  {
    title: "Tech Pulse V2",
    ia: "DeepAI",
    prompt:
      "Digital Circuits: Incorporate elements that resemble digital circuits, such as interconnected lines and nodes, to emphasize technology and connectivity.Abstract Shapes: Use abstract shapes that convey motion and dynamism, like swooshes, spirals, or futuristic geometric forms.Color Palette: Utilize a color scheme of electric blue, neon green, and black. For example, electric blue can be used for the main text, neon green for accents or highlights, and black for outlines and additional details.Text: Include the text 'TechPulse Innovations' in a sleek, modern, and minimalist font. The font should be clear and easily readable, even at smaller sizes.Versatility: Design the logo to be versatile for use on website headers, app icons, and trade show booths. Ensure it maintains clarity and impact at various sizes and formats.The final design should merge the digital circuits and abstract shapes seamlessly with the text to create a cohesive and visually appealing single minimalist logo that represents the innovative spirit of TechPulse Innovations.",    
      imageSrc: TechPulseV2.src,
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
