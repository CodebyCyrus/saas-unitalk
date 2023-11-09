const tiers = [
  {
    name: "Starter",
    id: null,
    href: "#",
    priceMonthly: null,
    desciption: "Get chatting right away with anyone, anywhere!",
    features: [
      "20 Message Chat Limit in Chats",
      "2 Participant limit in chat",
      "3 Chat Rooms limit",
      "Supports 2 languages",
      "48-hour support response time",
    ],
  },
  {
    name: "Pro",
    id: "code",
    href: "#",
    priceMonthly: "5.99$",
    desciption: "Unlock the Full potential with Pro!",
    features: [
      "Unlimited Messages in Chats",
      "Unlimited Participant in chats",
      "Unlimited Chat Rooms",
      "Supports up tp +10 languages",
      "Multimedia support in chats (cooming soon)",
      "1-hour, dedicated support response time",
      "Early access to new features",
    ],
  },
];

export const PricingCards = ({ redirect }: { redirect: boolean }) => {
  return (
    <div>
      <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols"></div>
    </div>
  );
};
