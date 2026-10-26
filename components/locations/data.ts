import type { LocationData } from "./types";

const allSlugs = [
  "sell-my-house-michigan",
  "sell-my-house-grand-rapids",
  "sell-my-house-kent-county",
  "sell-my-house-ottawa-county",
  "sell-my-house-troy",
] as const;

export const kentCounty: LocationData = {
  slug: "sell-my-house-kent-county",
  place: "Kent County",
  heroImage: "/images/service-rental1.jpg",
  heroAlt: "Houses in a Kent County, Michigan neighborhood",
  badge: "Serving Kent County, Michigan",
  metaTitle: "Sell My House in Kent County, MI",
  metaDescription:
    "Selling a house in Kent County, Michigan? Learn your options in Grand Rapids, Wyoming, Kentwood, Rockford and more, and ask for a no-obligation offer.",
  keywords: [
    "sell my house Kent County",
    "sell house as-is Kent County Michigan",
    "Kentwood Wyoming Walker house buyers",
    "real estate investor Kent County",
  ],
  leadA:
    "Kent County covers the city of Grand Rapids, its inner suburbs, and a wide band of townships and small towns to the north, east and south. If you own a house here that you no longer want to keep, repair or list, we would be glad to talk it through.",
  leadB:
    "FAHOPROSO is based in West Michigan and works with homeowners across the county, from Wyoming and Kentwood to Rockford and Byron Center.",
  overview: {
    eyebrow: "Selling in Kent County",
    title: "One County, Many Different Kinds of Homes",
    paragraphs: [
      "Kent County is not one housing market. Grand Rapids has older neighborhoods with homes built many decades ago, while Kentwood, Byron Center and Cascade Township include newer subdivisions. Toward Rockford, Sparta, Cedar Springs and Lowell you will find more acreage, older farmhouses and rural properties.",
      "That mix matters when you sell. An older home on a city street and a rural property on several acres call for different conversations about condition, access, utilities and what a buyer would need to do. We look at the house in front of us instead of applying one formula to the whole county.",
      "If you are still deciding, you can read our guides on selling a house as-is, selling a house that needs repairs and selling an inherited house, then reach out whenever it suits you.",
    ],
    asideTitle: "Kent County sellers often ask about",
    asideItems: [
      "Selling a house with deferred maintenance in an older neighborhood",
      "Handling an inherited home from a distance",
      "Selling a rental after a tenant moves out",
      "What to do with a rural property that has a well or septic system",
    ],
  },
  situations: {
    title: "Situations We Often Talk Through in Kent County",
    intro:
      "Most of the homeowners we speak with are not in a hurry for its own sake. They simply have a house that has become more work, more cost or more worry than they want.",
    items: [
      {
        title: "Older Home, Long To-Do List",
        text: "Roofs, furnaces, plumbing and electrical updates add up in older homes. If the list is longer than you want to take on, we can discuss selling the house as it is.",
      },
      {
        title: "Inherited a Home",
        text: "Settling a family member's estate can leave you with a house you did not plan on. We can talk through timing and next steps, including when probate is involved.",
      },
      {
        title: "Rental You Want to Sell",
        text: "Landlords in Kent County sometimes decide to sell after a tenant leaves or when upkeep outweighs the income. We can discuss occupied and vacant rentals.",
      },
      {
        title: "Moving or Relocating",
        text: "A job change or a move closer to family can leave little time to prepare a house for showings. A direct sale can be simpler to schedule.",
      },
      {
        title: "Rural Property or Acreage",
        text: "Homes outside the city can have wells, septic systems, outbuildings and long driveways. We review the whole property, not just the house.",
      },
      {
        title: "Vacant or Neglected House",
        text: "An empty house still costs money in taxes, insurance and upkeep. We can talk about what makes sense for your timeline.",
      },
    ],
  },
  know: {
    title: "What to Know When Selling in Kent County",
    intro:
      "These are general points, not legal or tax advice. A title company or attorney can answer questions about your specific property.",
    items: [
      {
        title: "Taxes at Closing",
        text: "Property taxes are typically divided between seller and buyer at closing. Your title company can show the exact figures for your address.",
      },
      {
        title: "Mortgages and Liens",
        text: "Any mortgage or lien is normally paid from the sale proceeds. Ask your lender for a payoff amount early so there are no surprises.",
      },
      {
        title: "County Records",
        text: "Deeds and ownership records for Kent County are filed with the county Register of Deeds. Your title company usually takes care of this at closing.",
      },
    ],
  },
  communities: {
    title: "Communities Across Kent County",
    text: "We speak with homeowners in cities, suburbs and townships across the county, including:",
    list: [
      "Grand Rapids",
      "Wyoming",
      "Kentwood",
      "Walker",
      "Grandville",
      "Rockford",
      "Ada",
      "Cascade Township",
      "Byron Center",
      "Lowell",
      "Sparta",
      "Cedar Springs",
    ],
  },
  faqs: [
    {
      question: "Do you buy houses in every part of Kent County?",
      answer:
        "We focus on homeowners across the county, including Grand Rapids, Wyoming, Kentwood, Walker, Grandville, Rockford, Ada, Byron Center and nearby townships. If you are unsure whether your address is a fit, just ask.",
    },
    {
      question: "Can I sell a Kent County house that has a well or septic system?",
      answer:
        "Yes. These systems are common outside the city. Their condition may be part of our conversation, and we do not require you to repair them first.",
    },
    {
      question: "Does it matter if my house is in Grand Rapids or a township?",
      answer:
        "Location and condition both matter to value, but you do not need to know the answer before you reach out. We will talk about your specific property.",
    },
    {
      question: "I live outside Michigan. Can I sell a Kent County house I inherited?",
      answer:
        "Often yes. Many owners we hear from do not live nearby. We can discuss how to handle the process remotely, including working with a title company.",
    },
    {
      question: "Is there an obligation if I ask for an offer?",
      answer:
        "No. Asking for an offer simply starts a conversation, and you decide what to do next.",
    },
  ],
  nearby: [...allSlugs],
};

export const grandRapids: LocationData = {
  slug: "sell-my-house-grand-rapids",
  place: "Grand Rapids",
  heroImage: "/images/Grand Rapids.jpg",
  heroAlt: "The Grand Rapids, Michigan skyline and river",
  badge: "Serving Grand Rapids, Michigan",
  metaTitle: "Sell My House in Grand Rapids, MI",
  metaDescription:
    "Sell your Grand Rapids house as-is. We talk with owners of older, inherited, rental and repair-needed homes across the city. No obligation.",
  keywords: [
    "sell my house Grand Rapids",
    "sell house as-is Grand Rapids MI",
    "we buy houses Grand Rapids",
    "Grand Rapids real estate investor",
  ],
  leadA:
    "Grand Rapids has a wide range of housing, from historic homes near downtown to mid-century houses on the city's edges. If you own one that you would rather sell than repair or list, we can talk through your options.",
  leadB:
    "FAHOPROSO is a Grand Rapids area company, so you are talking with people who know the neighborhoods.",
  overview: {
    eyebrow: "Selling in Grand Rapids",
    title: "Neighborhood by Neighborhood",
    paragraphs: [
      "Grand Rapids is made up of many distinct neighborhoods, including areas such as Heritage Hill, Eastown, Creston, Garfield Park, Alger Heights and the West Side. Houses in these areas were built in different eras and often need different kinds of care.",
      "Some older neighborhoods include historic districts, where exterior changes may require approval before work begins. That can affect how much a repair project costs and how long it takes, which is one reason some homeowners choose to sell without renovating.",
      "We review each house on its own. A tidy home on a quiet street and a neglected property that needs major work are different conversations, and both are welcome.",
    ],
    asideTitle: "Grand Rapids sellers often ask about",
    asideItems: [
      "Selling a house in a historic district",
      "Selling a rental property with tenants in place",
      "Open city notices or housing code issues",
      "Selling quickly before a move",
    ],
  },
  situations: {
    title: "Situations We Often Discuss in Grand Rapids",
    intro:
      "Homeowners reach out to us for many reasons. These are some of the most common ones we hear in the city.",
    items: [
      {
        title: "House With Code or Maintenance Issues",
        text: "Peeling paint, worn porches, outdated wiring or a city notice can make a sale feel complicated. We can talk about the house as it stands today.",
      },
      {
        title: "Historic or Older Home",
        text: "Older homes can be wonderful and costly to maintain. If the upkeep has become too much, we can discuss selling it as-is.",
      },
      {
        title: "Landlord Ready to Sell",
        text: "Some owners want to step away from a rental after years of managing it. We can talk about homes with tenants, and about vacant ones.",
      },
      {
        title: "Estate or Inherited Property",
        text: "A family home in the city can carry a lot of memories and a lot of decisions. We can explain the process and go at the pace you need.",
      },
      {
        title: "Divorce or Life Change",
        text: "When a household changes, a shared house may need to be sold. A direct sale can reduce the number of showings and open houses.",
      },
      {
        title: "Facing Financial Pressure",
        text: "Falling behind on payments or taxes is stressful. We can discuss whether selling is a sensible way forward, and we encourage you to also speak with your lender or a housing counselor.",
      },
    ],
  },
  know: {
    title: "What to Know When Selling in Grand Rapids",
    intro:
      "These are general points, not legal advice. The city and your title company can confirm what applies to your address.",
    items: [
      {
        title: "City Notices and Inspections",
        text: "If the city has cited the property or you have open notices, mention it early. It affects what a buyer would need to handle after closing.",
      },
      {
        title: "Historic Districts",
        text: "Some neighborhoods follow special design rules for exterior work. Ask the city whether your address is in one before you plan repairs.",
      },
      {
        title: "Rental Properties",
        text: "If tenants live in the property, review the lease and your notice obligations before listing or selling. We can discuss occupied homes.",
      },
    ],
  },
  communities: {
    title: "Grand Rapids Neighborhoods We Serve",
    text: "We speak with owners across the city, including these neighborhoods:",
    list: [
      "Heritage Hill",
      "Eastown",
      "Creston",
      "Garfield Park",
      "Alger Heights",
      "West Side",
      "Belknap Lookout",
      "John Ball Park",
      "Roosevelt Park",
      "Madison Square",
      "East Hills",
      "Midtown",
    ],
  },
  faqs: [
    {
      question: "Do you buy houses inside the city of Grand Rapids?",
      answer:
        "Yes. We speak with homeowners throughout Grand Rapids and nearby communities. The house does not have to be in perfect condition.",
    },
    {
      question: "Can I sell a Grand Rapids house that has open city notices?",
      answer:
        "Often it is still possible to talk about it. Tell us what notices you have received so we can understand the situation.",
    },
    {
      question: "Do you buy houses with tenants in them?",
      answer:
        "We can discuss rentals that are occupied as well as vacant ones. Having the lease and rent details handy helps.",
    },
    {
      question: "How is selling directly different from listing with an agent?",
      answer:
        "Listing means preparing the home, hosting showings and waiting for a buyer's financing. Selling directly can be simpler for some homes, but it is not right for everyone, so we explain both sides.",
    },
    {
      question: "Will you pressure me to decide?",
      answer:
        "No. We explain options and answer questions. You decide whether and when to move forward.",
    },
  ],
  nearby: [...allSlugs],
};

export const ottawaCounty: LocationData = {
  slug: "sell-my-house-ottawa-county",
  place: "Ottawa County",
  heroImage: "/images/Ottawa.jpg",
  heroAlt: "A lighthouse on the Lake Michigan shore in Ottawa County",
  badge: "Serving Ottawa County, Michigan",
  metaTitle: "Sell My House in Ottawa County, MI",
  metaDescription:
    "Selling a house in Ottawa County, Michigan? From Holland and Grand Haven to Hudsonville and Allendale, learn your options and ask for a no-obligation offer.",
  keywords: [
    "sell my house Ottawa County",
    "sell house Holland Michigan",
    "sell house Grand Haven",
    "Hudsonville Zeeland Jenison house buyers",
  ],
  leadA:
    "Ottawa County stretches from the Lake Michigan shoreline inland past Holland, Zeeland and Hudsonville. Whether you own a home in a lakeshore town or a growing suburb, we can talk through your options for selling.",
  leadB:
    "FAHOPROSO serves homeowners across the county, including Holland, Grand Haven, Jenison, Hudsonville and Allendale.",
  overview: {
    eyebrow: "Selling in Ottawa County",
    title: "From Lakeshore Towns to Growing Suburbs",
    paragraphs: [
      "Ottawa County's housing ranges from homes near Lake Michigan in Grand Haven, Spring Lake and Ferrysburg to subdivisions around Jenison, Hudsonville and Zeeland, and rural properties further inland.",
      "Homes close to the lake can come with their own considerations, such as flood-zone status, insurance and seasonal use. Near Grand Valley State University's Allendale campus, some owners hold rental houses that serve students.",
      "Each of these situations is a little different. We look at the property, your timeline and your goals before talking about a path forward.",
    ],
    asideTitle: "Ottawa County sellers often ask about",
    asideItems: [
      "Selling a cottage or second home",
      "Selling a student rental near Allendale",
      "Homes with flood or insurance questions",
      "Properties that need updating after years of ownership",
    ],
  },
  situations: {
    title: "Situations We Often Discuss in Ottawa County",
    intro:
      "Owners across the county contact us for a handful of recurring reasons.",
    items: [
      {
        title: "Lakeshore or Seasonal Home",
        text: "A cottage or second home can become more upkeep than the time you spend using it. We can talk about selling it in its current condition.",
      },
      {
        title: "Student or Investment Rental",
        text: "Rentals near Allendale and elsewhere in the county sometimes change hands when an owner is ready to step back from managing them.",
      },
      {
        title: "Inherited Family Property",
        text: "Settling an estate may leave you with a home in a town you no longer live in. We can talk through the timing and the paperwork involved.",
      },
      {
        title: "Home Needing Updates",
        text: "Kitchens, baths, roofs and windows add up. If the project list feels too large, selling as-is may be worth discussing.",
      },
      {
        title: "Relocating for Work",
        text: "A move across the state can leave little time for staging and showings. A direct sale can be easier to schedule.",
      },
      {
        title: "Property With Damage",
        text: "Storm, water or fire damage can make a traditional listing difficult. We can talk about what to do next, including insurance steps.",
      },
    ],
  },
  know: {
    title: "What to Know When Selling in Ottawa County",
    intro:
      "These are general points, not legal or tax advice. A title company or attorney can answer questions about your specific property.",
    items: [
      {
        title: "Flood and Insurance Questions",
        text: "Homes near water may have flood-zone or insurance details that affect a sale. Have your insurance documents handy when you call.",
      },
      {
        title: "Second Homes and Seasonal Use",
        text: "If the property is not your main home, there may be different tax and utility details. A title company or tax advisor can explain.",
      },
      {
        title: "Records and Closing",
        text: "Ottawa County records are kept by the county Register of Deeds, and your title company usually handles the closing paperwork.",
      },
    ],
  },
  communities: {
    title: "Communities Across Ottawa County",
    text: "We speak with homeowners in towns and townships across the county, including:",
    list: [
      "Holland",
      "Grand Haven",
      "Jenison",
      "Hudsonville",
      "Zeeland",
      "Allendale",
      "Coopersville",
      "Spring Lake",
      "Georgetown Township",
      "Jamestown Township",
      "Ferrysburg",
      "Port Sheldon",
    ],
  },
  faqs: [
    {
      question: "Do you buy lakeshore or cottage properties in Ottawa County?",
      answer:
        "We are happy to discuss them. Tell us about the property, its condition and any insurance or flood questions, and we will take it from there.",
    },
    {
      question: "Can I sell a rental house near Allendale?",
      answer:
        "We can discuss student and other rental properties, occupied or vacant. Lease details help us understand the situation.",
    },
    {
      question: "I live out of state. Can I still sell my Ottawa County house?",
      answer:
        "Often yes. Many sales are handled remotely with a title company, and we can walk you through the steps.",
    },
    {
      question: "Do I need to clean out the house first?",
      answer:
        "Not always. What is required depends on the agreement, and we will tell you plainly what we would expect.",
    },
    {
      question: "How do I get started?",
      answer:
        "Send us a message with the address and a few details. We will reply to talk about your property and answer questions, with no obligation.",
    },
  ],
  nearby: [...allSlugs],
};

export const troy: LocationData = {
  slug: "sell-my-house-troy",
  place: "Troy",
  heroImage: "/images/Troy.jpg",
  heroAlt: "Downtown Troy, Michigan",
  badge: "Serving Troy, Michigan",
  metaTitle: "Sell My House in Troy, MI",
  metaDescription:
    "Own a house in Troy, Michigan? Learn your options for selling as-is, from outdated homes to estates and rentals, with no obligation.",
  keywords: [
    "sell my house Troy MI",
    "sell house as-is Troy Michigan",
    "Oakland County house buyers",
    "sell inherited house Troy",
  ],
  leadA:
    "Troy sits in Oakland County in the Detroit metro area, a different part of the state from our West Michigan base. If you own a house in Troy that you would like to sell without major repairs or showings, we are glad to talk.",
  leadB:
    "We review properties in Troy and nearby communities case by case, and we will tell you honestly whether yours is a fit.",
  overview: {
    eyebrow: "Selling in Troy",
    title: "A Suburban Market Outside Detroit",
    paragraphs: [
      "Troy is known for its many suburban neighborhoods, a large business district and easy highway access. Many of the homes were built in the second half of the twentieth century, and some now need updated kitchens, roofs, windows or mechanical systems.",
      "Because Troy is across the state from our West Michigan base, we review properties here case by case. Send us the address and a few details, and we will tell you plainly whether we can help.",
      "If you decide a traditional listing is a better fit, we will say so. Our goal is for you to understand your options.",
    ],
    asideTitle: "Troy sellers often ask about",
    asideItems: [
      "Selling a house that has not been updated in decades",
      "Relocating for work",
      "Selling an estate property from another state",
      "Selling a rental in the area",
    ],
  },
  situations: {
    title: "Situations We Often Discuss in Troy",
    intro:
      "Owners of Troy homes reach out to us for a few recurring reasons.",
    items: [
      {
        title: "House That Has Not Been Updated",
        text: "Original kitchens, baths and systems are common in older suburban homes. If updating is more than you want to take on, we can talk about selling as-is.",
      },
      {
        title: "Relocating for a Job",
        text: "Troy is an employment center, and job moves can come with tight timelines. A direct sale can be simpler to schedule than preparing for showings.",
      },
      {
        title: "Inherited or Estate Property",
        text: "If you are handling an estate from another city or state, we can walk through the process and work around your schedule.",
      },
      {
        title: "Landlord Selling a Rental",
        text: "Owners sometimes decide to sell a rental after years of tenants and repairs. We can discuss occupied and vacant homes.",
      },
      {
        title: "Downsizing",
        text: "Moving to a smaller home or a condo can mean a house full of belongings and decisions. We can talk about timing and what needs to be cleared.",
      },
      {
        title: "Property With Damage",
        text: "Water, fire or storm damage can be hard to handle while you are also dealing with insurance. We can talk through your options.",
      },
    ],
  },
  know: {
    title: "What to Know When Selling in Troy",
    intro:
      "These are general points, not legal or tax advice. A title company or attorney can answer questions about your specific property.",
    items: [
      {
        title: "Oakland County Records",
        text: "Deeds and property records for Troy are kept by Oakland County, and your title company usually handles filings at closing.",
      },
      {
        title: "Taxes at Closing",
        text: "Property taxes are generally divided between seller and buyer at closing. Your title company can show the exact amounts.",
      },
      {
        title: "Selling From Out of State",
        text: "If you do not live nearby, much of the process can be handled remotely with a title company. We can explain what that looks like.",
      },
    ],
  },
  communities: {
    title: "Troy and Nearby Communities",
    text: "We review properties in Troy and speak with owners in nearby communities case by case, including:",
    list: [
      "Troy",
      "Rochester Hills",
      "Clawson",
      "Royal Oak",
      "Madison Heights",
      "Sterling Heights",
      "Birmingham",
      "Bloomfield Township",
      "Auburn Hills",
      "Berkley",
    ],
  },
  faqs: [
    {
      question: "Do you really buy houses in Troy, since you are based in West Michigan?",
      answer:
        "We review Troy properties case by case. If your house is a fit we will say so, and if it is not we will tell you honestly.",
    },
    {
      question: "Do I need to renovate before selling a Troy house?",
      answer:
        "No. Many Troy homes are older and have not been updated. Tell us the condition and we can talk about it.",
    },
    {
      question: "Can you help if I live out of state?",
      answer:
        "Often yes. Much of the process can be handled remotely with a title company, and we can explain the steps.",
    },
    {
      question: "What happens after I contact you?",
      answer:
        "We reply to learn about the property and your goals, answer your questions and explain your options, with no obligation.",
    },
    {
      question: "Is selling to FAHOPROSO better than listing with an agent?",
      answer:
        "It depends on your house and your priorities. A listing can bring a higher price for a house in good shape, while a direct sale can be simpler for a house that needs work. We will help you compare.",
    },
  ],
  nearby: [...allSlugs],
};

export const michigan: LocationData = {
  slug: "sell-my-house-michigan",
  place: "Michigan",
  heroImage: "/images/service-cash-home.jpg",
  heroAlt: "A Michigan house for sale as-is",
  badge: "Serving Michigan homeowners",
  metaTitle: "Sell My House in Michigan",
  metaDescription:
    "How selling a house works in Michigan: disclosure, liens, taxes and probate, plus how FAHOPROSO can help West Michigan homeowners.",
  keywords: [
    "sell my house Michigan",
    "selling a house in Michigan",
    "Michigan probate house sale",
    "sell house as-is Michigan",
  ],
  leadA:
    "Selling a house in Michigan involves a few steps and rules that are specific to the state. We buy houses across West Michigan and review properties in other parts of Michigan case by case.",
  leadB:
    "This page explains how a sale generally works here and where we are able to help.",
  overview: {
    eyebrow: "Selling in Michigan",
    title: "How Selling a House Works in Michigan",
    paragraphs: [
      "Michigan sellers of residential property are generally expected to complete a seller disclosure statement about the condition of the home, although exceptions exist. An attorney, agent or title company can explain what applies to your sale.",
      "At closing, a title company typically handles the paperwork, pays off mortgages or liens from the proceeds, and records the deed with the county Register of Deeds. State and county transfer taxes usually apply and are normally shown on the closing statement.",
      "If the house came from an estate, the county probate court may be involved. Our probate and inherited-house guides explain what to expect.",
    ],
    asideTitle: "Michigan sellers often ask about",
    asideItems: [
      "Probate and inherited homes",
      "Selling a house with liens or back taxes",
      "What to do when payments are behind",
      "Selling from out of state",
    ],
  },
  situations: {
    title: "Situations We Often Discuss Across Michigan",
    intro:
      "No matter where in the state the house is, the reasons for selling tend to fall into a few groups.",
    items: [
      {
        title: "Estate and Probate",
        text: "Michigan probate is handled through county probate courts. If you are an heir or personal representative, we can explain how a sale can fit into the process.",
      },
      {
        title: "Behind on Payments or Taxes",
        text: "Falling behind can feel urgent. We can talk about whether selling makes sense, and we encourage you to speak with your lender or a housing counselor as well.",
      },
      {
        title: "Out-of-State Owner",
        text: "Owning a Michigan house from far away can be costly and stressful. Much of the process can be handled remotely.",
      },
      {
        title: "Rental or Investment Property",
        text: "Owners sometimes decide to sell a single property or a small group of properties. We are happy to discuss both.",
      },
      {
        title: "Major Repairs",
        text: "Roofs, foundations, water damage and fire damage can make a traditional sale difficult. We can look at the house as it is.",
      },
      {
        title: "Vacant House",
        text: "An empty house still has taxes, insurance and upkeep. We can talk about what makes sense for your timeline.",
      },
    ],
  },
  know: {
    title: "What to Know When Selling in Michigan",
    intro:
      "These are general points, not legal or tax advice. A title company, agent or attorney can answer questions about your sale.",
    items: [
      {
        title: "Disclosure",
        text: "Sellers generally disclose what they know about the property's condition. Ask a title company, agent or attorney what applies to your sale.",
      },
      {
        title: "Liens, Taxes and Mortgages",
        text: "Money owed on the property is normally paid from the sale proceeds. Gather your mortgage statement and any tax or lien notices early.",
      },
      {
        title: "Probate",
        text: "If the owner has passed away, the county probate court may need to authorize the sale. Our probate guide explains the general steps.",
      },
    ],
  },
  communities: {
    title: "Where We Are Focused",
    text: "We are based in West Michigan and focus on the areas below. We review other Michigan locations case by case.",
    list: [
      "Grand Rapids",
      "Kent County",
      "Ottawa County",
      "Wyoming",
      "Kentwood",
      "Walker",
      "Grandville",
      "Grand Haven",
      "Hudsonville",
      "Troy",
      "Oakland County",
    ],
  },
  faqs: [
    {
      question: "Do you buy houses everywhere in Michigan?",
      answer:
        "Our focus is West Michigan, and we review properties elsewhere in the state case by case. Send us the address and we will tell you honestly whether we can help.",
    },
    {
      question: "Do I have to disclose problems with the house?",
      answer:
        "Michigan sellers of residential property are generally expected to provide a disclosure statement, with some exceptions. A title company, agent or attorney can tell you what applies to you.",
    },
    {
      question: "What happens to my mortgage when I sell?",
      answer:
        "It is normally paid off from the sale proceeds at closing. Ask your lender for a payoff amount so you know your numbers.",
    },
    {
      question: "Can I sell a house that is in probate?",
      answer:
        "It is often possible, and the court may need to approve certain steps. Our probate guide explains the general process, and an attorney can advise on your estate.",
    },
    {
      question: "Are there taxes when I sell a house in Michigan?",
      answer:
        "State and county transfer taxes usually apply and appear on the closing statement. Questions about your own tax situation are best answered by a tax professional.",
    },
  ],
  nearby: [...allSlugs],
};
