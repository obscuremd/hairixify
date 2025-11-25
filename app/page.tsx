import Hero from "@/screens/HomeScreen/Hero";
import HomeCard from "@/screens/HomeScreen/HomeCard";
import Products from "@/screens/HomeScreen/Products";

export default function Home() {
  const media = [
    {
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&auto=format&fit=crop&q=60",
      primary_text: "Train Hard, Stay Strong — Welcome to BC Gym Center!",
      secondary_text:
        "Experience a premium fitness environment with world-class gym equipment, professional trainers, and a supportive community to help you achieve your fitness goals.",
      button_text: "Explore The Gym",
    },
    {
      image:
        "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=600&auto=format&fit=crop&q=60",
      primary_text: "Memberships with Unlimited Access",
      secondary_text:
        "Become a registered member and receive your personal digital access card. Enjoy full entry to gym facilities, trainers, special sessions, and member-exclusive benefits.",
      button_text: "View Membership Plans",
    },
    {
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R3ltfGVufDB8fDB8fHww",
      primary_text: "More Than Just a Gym!",
      secondary_text:
        "BC Gym Center also offers group fitness classes, professional massage therapy, snooker lounge, and an in-house shop for fitness gear, supplements, and gym essentials.",
      button_text: "View Services",
    },
  ];

  return (
    <div className="min-h-screen items-center justify-center flex flex-col gap-16">
      <Hero />
      <div className="flex flex-col gap-4">
        {media.map((item, index) => (
          <HomeCard
            key={index}
            image={item.image}
            primary_text={item.primary_text}
            secondary_text={item.secondary_text}
            button_text={item.button_text}
            reverse={index === 1}
          />
        ))}
      </div>
      <Products />
    </div>
  );
}
