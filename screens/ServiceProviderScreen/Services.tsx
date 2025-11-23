import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Services() {
  return (
    <div>
      <div className="flex justify-between">
        <p className="text-4xl font-black text-primary-c">Services</p>
        <Input className="w-fit" placeholder="Search for Service . . . |" />
      </div>
      {ServicesData.map((item, index) => (
        <Accordion
          key={index}
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          <AccordionItem value={`item-${index}`}>
            <AccordionTrigger className="w-full flex justify-between items-center p-2">
              <Button className="bg-secondary-c font-black">
                {item.service} ({item.services.length})
              </Button>
            </AccordionTrigger>
            <AccordionContent className="space-y-3">
              {item.services.map((item, index) => (
                <div
                  key={index}
                  className="bg-muted p-3 rounded-3xl flex flex-col md:flex-row gap-2 justify-between"
                >
                  <div>
                    <p className="text-xl font-semibold">{item.title}</p>
                    <p className="w-[70%] md:min-h-[4em] truncate">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <p>{item.price === 0 ? "Free" : `$${item.price}`}</p>
                    <p>{formatTime(item.time)}</p>
                    <Button>Book</Button>
                  </div>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
}

const ServicesData = [
  {
    service: "Makeup & Beauty",
    services: [
      {
        title: "Virtual Skin Analysis",
        description:
          "A live 15-min session to evaluate your skin type and suggest recommended products & treatments.",
        price: 0,
        time: 900, // 15 min
      },
      {
        title: "Full Glam Makeup",
        description:
          "Professional evening & event makeup including lashes, contouring, highlight & finish setting.",
        price: 150,
        time: 5400, // 1h 30min
      },
      {
        title: "Natural Day Makeup",
        description:
          "Light, fresh and subtle makeup for everyday casual & professional environments.",
        price: 65,
        time: 3600, // 1h
      },
      {
        title: "Bridal Luxury Package",
        description:
          "Includes makeup trial, wedding-day glam, touch-ups, and optional travel services.",
        price: 300,
        time: 14400, // 4h
      },
    ],
  },
  {
    service: "Hair Styling",
    services: [
      {
        title: "Haircut & Style",
        description:
          "Personalized haircut with blow-dry, professional styling and aftercare recommendations.",
        price: 80,
        time: 5400, // 1h 30min
      },
      {
        title: "Deep Hair Treatment",
        description:
          "Restorative hydration service using keratin & protein-rich products to repair damaged hair.",
        price: 55,
        time: 2700, // 45min
      },
      {
        title: "Full Hair Color",
        description:
          "Professional coloring including toner & finish — suitable for full coverage or creative tone changes.",
        price: 120,
        time: 7200, // 2h
      },
      {
        title: "Loc Maintenance",
        description:
          "Root retwisting, cleaning, nourishing and shaping for dreadlock upkeep.",
        price: 95,
        time: 6000, // 1h 40min
      },
    ],
  },
  {
    service: "Spa & Wellness",
    services: [
      {
        title: "Aromatherapy Massage",
        description:
          "Relaxing full-body massage with customized fragrance oils enhancing relaxation & stress relief.",
        price: 110,
        time: 5400, // 1h 30min
      },
      {
        title: "Steam Facial Treatment",
        description:
          "Deep-pore cleansing, exfoliation, steam extraction and finishing serum treatment.",
        price: 70,
        time: 3600, // 1h
      },
      {
        title: "Hot Stone Therapy",
        description:
          "Heated basalt stones applied across the body to relieve muscle tension and promote circulation.",
        price: 140,
        time: 7200, // 2h
      },
      {
        title: "Relaxation Foot Reflexology",
        description:
          "A restorative reflexology session stimulating nerve pathways through targeted pressure points.",
        price: 60,
        time: 2700, // 45min
      },
    ],
  },
];

function formatTime(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  let result = "";
  if (hours > 0) result += `${hours}h `;
  if (minutes > 0) result += `${minutes}mins`;

  return result.trim();
}
