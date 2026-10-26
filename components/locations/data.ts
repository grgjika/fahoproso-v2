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
    "Kent County includes the city of Grand Rapids, the towns around it, and many small towns and townships farther out. If you own a house here that you don't want to keep, fix up or list, we're happy to talk it over with you.",
  leadB:
    "We're based in West Michigan and work with homeowners all over the county, from Wyoming and Kentwood to Rockford and Byron Center.",
  overview: {
    eyebrow: "Selling in Kent County",
    title: "One County, Many Different Kinds of Homes",
    paragraphs: [
      "Houses in Kent County are not all alike. Grand Rapids has older neighborhoods with homes that are many decades old. Kentwood, Byron Center and Cascade Township have newer neighborhoods. Out toward Rockford, Sparta, Cedar Springs and Lowell, you'll find bigger lots and older farmhouses.",
      "That matters when you sell. An older house on a city street and a house on several acres are not the same, and what they need is different. We look at your house and your situation, not a one-size-fits-all formula.",
      "Still deciding? You can read our guides on selling a house as-is, selling a house that needs repairs, and selling an inherited house. Reach out whenever you're ready.",
    ],
    asideTitle: "Kent County sellers often ask about",
    asideItems: [
      "Selling an older house that needs a lot of work",
      "Handling an inherited home when you live far away",
      "Selling a rental, with or without tenants",
      "Selling a house on a large lot outside the city",
    ],
  },
  situations: {
    title: "Situations We Often Talk Through in Kent County",
    intro:
      "Most people we talk to just have a house that has become too much work, too expensive or too stressful to keep.",
    items: [
      {
        title: "Older Home, Long To-Do List",
        text: "Roofs, furnaces, plumbing and wiring get expensive fast. If the list is longer than you want to deal with, we can talk about buying the house as it is.",
      },
      {
        title: "Inherited a Home",
        text: "Handling a loved one's estate can leave you with a house you didn't plan on. We can talk about timing and next steps, including when probate is involved.",
      },
      {
        title: "Rental You Want to Sell",
        text: "Some landlords decide to sell when the repairs cost more than the rent brings in. We buy rentals, whether tenants live there or not.",
      },
      {
        title: "Moving or Relocating",
        text: "A new job or a move closer to family can leave no time to get a house ready for showings. Selling to us can be easier to plan around.",
      },
      {
        title: "Land Outside the City",
        text: "Homes outside the city often come with more land, a barn or other buildings. We look at the whole property, not just the house.",
      },
      {
        title: "Vacant or Neglected House",
        text: "An empty house still costs you money for taxes, insurance and upkeep. We can talk about what makes sense for you.",
      },
    ],
  },
  know: {
    title: "What to Know When Selling in Kent County",
    intro:
      "These are general points, not legal or tax advice. A title company or attorney can answer questions about your own house.",
    items: [
      {
        title: "Taxes at Closing",
        text: "At closing, property taxes are usually split between you and the buyer. Your title company can show you the exact amounts.",
      },
      {
        title: "Mortgages and Liens",
        text: "If you still owe money on the house, it is paid off from the sale. Ask your lender early how much you owe, so there are no surprises.",
      },
      {
        title: "County Records",
        text: "Ownership papers for Kent County are filed with the county Register of Deeds. Your title company usually takes care of this for you.",
      },
    ],
  },
  communities: {
    title: "Communities Across Kent County",
    text: "We talk with homeowners in cities, suburbs and townships all over the county, including:",
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
        "We work with homeowners all over the county, including Grand Rapids, Wyoming, Kentwood, Walker, Grandville, Rockford, Ada, Byron Center and nearby townships. Not sure about your address? Just ask.",
    },
    {
      question: "Can I sell a Kent County house if I still owe money on it?",
      answer:
        "Yes. What you owe is paid off from the sale at closing. Ask your lender for the amount, and we can talk about what that means for you.",
    },
    {
      question: "Does it matter if my house is in Grand Rapids or a township?",
      answer:
        "Both the location and the condition matter, but you don't need to have it figured out before you call. We'll talk about your house.",
    },
    {
      question: "I live outside Michigan. Can I sell a Kent County house I inherited?",
      answer:
        "Often, yes. Many owners we hear from live far away. A title company can handle most of the paperwork, and we'll explain each step.",
    },
    {
      question: "Is there an obligation if I ask for an offer?",
      answer:
        "No. Asking for an offer is just a conversation. You decide what to do next.",
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
    "Grand Rapids has all kinds of houses, from old homes near downtown to mid-century houses on the edges of the city. If you'd rather sell yours than fix it up or list it, we can talk about your options.",
  leadB:
    "We're a Grand Rapids area company, so you're talking to people who know the neighborhoods.",
  overview: {
    eyebrow: "Selling in Grand Rapids",
    title: "Neighborhood by Neighborhood",
    paragraphs: [
      "Grand Rapids is a city of many neighborhoods, like Heritage Hill, Eastown, Creston, Garfield Park, Alger Heights and the West Side. The houses were built in different years and need different kinds of care.",
      "Some older neighborhoods are historic districts, where you may need approval before changing the outside of your house. That can make repairs cost more and take longer, so some owners choose to sell without fixing anything.",
      "We look at each house on its own. A neat house on a quiet street and a run-down house that needs major work are different, and we're glad to talk about both.",
    ],
    asideTitle: "Grand Rapids sellers often ask about",
    asideItems: [
      "Selling a house in a historic district",
      "Selling a rental, with or without tenants",
      "Notices from the city about the house",
      "Selling before a move",
    ],
  },
  situations: {
    title: "Situations We Often Discuss in Grand Rapids",
    intro:
      "People contact us for many reasons. These are some we hear most often in the city.",
    items: [
      {
        title: "House With Code or Maintenance Issues",
        text: "Peeling paint, a worn porch, old wiring or a notice from the city can make selling feel hard. We can talk about your house as it is today.",
      },
      {
        title: "Historic or Older Home",
        text: "Older homes can be beautiful, and expensive to keep up. If it has become too much, we can talk about buying it as it is.",
      },
      {
        title: "Landlord Ready to Sell",
        text: "Some owners are ready to stop managing a rental. We buy rentals, whether tenants live there or not.",
      },
      {
        title: "Estate or Inherited Property",
        text: "A family home holds a lot of memories and a lot of decisions. We can explain how it works and go at the pace you need.",
      },
      {
        title: "Divorce or Life Change",
        text: "When a household changes, a shared house sometimes has to be sold. Selling to us means fewer showings and no open houses.",
      },
      {
        title: "Facing Financial Pressure",
        text: "Falling behind on payments or taxes is stressful. We can talk about whether selling makes sense, and we also encourage you to speak with your lender or a housing counselor.",
      },
    ],
  },
  know: {
    title: "What to Know When Selling in Grand Rapids",
    intro:
      "These are general points, not legal advice. The city and your title company can tell you what applies to your address.",
    items: [
      {
        title: "City Notices and Inspections",
        text: "If the city has sent you a notice about the house, tell us early. It affects what the buyer will have to take care of.",
      },
      {
        title: "Historic Districts",
        text: "Some neighborhoods have special rules for work on the outside of a house. Ask the city if your address is in one before you plan repairs.",
      },
      {
        title: "Rental Properties",
        text: "If tenants live in the house, check the lease and what notice you owe them before you sell. We're glad to talk about homes with tenants.",
      },
    ],
  },
  communities: {
    title: "Grand Rapids Neighborhoods We Serve",
    text: "We talk with owners all over the city, including in these neighborhoods:",
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
        "Yes. We talk with homeowners all over Grand Rapids and the towns around it. The house doesn't have to be in good shape.",
    },
    {
      question: "Can I sell a Grand Rapids house that has open city notices?",
      answer:
        "Often, yes. Tell us what notices you got, and we'll talk it through.",
    },
    {
      question: "Do you buy houses with tenants in them?",
      answer:
        "Yes. We buy rentals with tenants and empty ones. It helps to have the lease and the rent amount handy.",
    },
    {
      question: "How is selling directly different from listing with an agent?",
      answer:
        "When you list, you get the house ready, host showings and wait for a buyer to get a loan. Selling to us can be simpler, but it isn't right for everyone, so we'll explain both sides.",
    },
    {
      question: "Will you pressure me to decide?",
      answer:
        "No. We explain your options and answer your questions. You decide if and when to move forward.",
    },
  ],
  nearby: [...allSlugs],
};

export const ottawaCounty: LocationData = {
  slug: "sell-my-house-ottawa-county",
  place: "Ottawa County",
  heroImage: "/images/first-home.webp",
  heroAlt: "A person holding house keys next to moving boxes",
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
    "Ottawa County runs from the Lake Michigan shore inland past Holland, Zeeland and Hudsonville. Whether your house is in a lake town or a growing suburb, we can talk about your options.",
  leadB:
    "We work with homeowners all over the county, including Holland, Grand Haven, Jenison, Hudsonville and Allendale.",
  overview: {
    eyebrow: "Selling in Ottawa County",
    title: "From Lakeshore Towns to Growing Suburbs",
    paragraphs: [
      "Houses in Ottawa County range from homes near Lake Michigan in Grand Haven, Spring Lake and Ferrysburg, to neighborhoods around Jenison, Hudsonville and Zeeland, to country homes farther inland.",
      "Houses close to the lake can come with extra questions, like flood zones, insurance and whether the house is only used in summer. Near Grand Valley State University in Allendale, some owners rent their houses to students.",
      "Each situation is a little different. We look at your house, your timing and what you want before we talk about next steps.",
    ],
    asideTitle: "Ottawa County sellers often ask about",
    asideItems: [
      "Selling a cottage or second home",
      "Selling a student rental near Allendale",
      "Houses with flood or insurance questions",
      "Houses that need updating after many years",
    ],
  },
  situations: {
    title: "Situations We Often Discuss in Ottawa County",
    intro:
      "Owners across the county contact us for a few common reasons.",
    items: [
      {
        title: "Lakeshore or Seasonal Home",
        text: "A cottage or second home can take more work than the time you spend there is worth. We can talk about buying it as it is.",
      },
      {
        title: "Student or Investment Rental",
        text: "Some owners are ready to stop managing a rental near Allendale or elsewhere in the county. We buy rentals, whether tenants live there or not.",
      },
      {
        title: "Inherited Family Property",
        text: "Handling an estate can leave you with a house in a town you no longer live in. We can talk about the timing and the paperwork.",
      },
      {
        title: "Home Needing Updates",
        text: "Kitchens, bathrooms, roofs and windows add up. If the list feels too big, selling the house as it is may be worth a conversation.",
      },
      {
        title: "Relocating for Work",
        text: "A move to another city can leave little time to get the house ready and show it. Selling to us can be easier to plan around.",
      },
      {
        title: "Property With Damage",
        text: "Storm, water or fire damage can make a regular listing hard. We can talk about what to do next, including your insurance.",
      },
    ],
  },
  know: {
    title: "What to Know When Selling in Ottawa County",
    intro:
      "These are general points, not legal or tax advice. A title company or attorney can answer questions about your own house.",
    items: [
      {
        title: "Flood and Insurance Questions",
        text: "Houses near water may have flood zone or insurance details that matter when you sell. Keep your insurance papers handy when you call.",
      },
      {
        title: "Second Homes and Seasonal Use",
        text: "If it isn't your main home, the taxes and bills may work differently. A title company or tax advisor can explain.",
      },
      {
        title: "Records and Closing",
        text: "Ottawa County keeps ownership papers at the Register of Deeds, and your title company usually handles the closing paperwork.",
      },
    ],
  },
  communities: {
    title: "Communities Across Ottawa County",
    text: "We talk with homeowners in towns and townships all over the county, including:",
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
        "We're happy to talk about them. Tell us about the house, its condition and any flood or insurance questions, and we'll go from there.",
    },
    {
      question: "Can I sell a rental house near Allendale?",
      answer:
        "Yes. We buy student rentals and other rentals, with tenants or without. Lease details help us understand the situation.",
    },
    {
      question: "I live out of state. Can I still sell my Ottawa County house?",
      answer:
        "Often, yes. Many sales are done from a distance with the help of a title company, and we'll walk you through the steps.",
    },
    {
      question: "Do I need to clean out the house first?",
      answer:
        "Not always. It depends on what we agree to, and we'll tell you plainly what to expect.",
    },
    {
      question: "How do I get started?",
      answer:
        "Send us a message with the address and a few details. We'll reply to talk about your house and answer your questions. There's no obligation.",
    },
  ],
  nearby: [...allSlugs],
};

export const troy: LocationData = {
  slug: "sell-my-house-troy",
  place: "Troy",
  heroImage: "/images/inherited-house-new.jpg",
  heroAlt: "A family house with a set of keys and estate papers",
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
    "Troy is in Oakland County, in the Detroit area. If you own a house in Troy and want to sell it without big repairs or showings, we buy houses here and we're happy to talk.",
  leadB:
    "We also work with homeowners in the towns around Troy.",
  overview: {
    eyebrow: "Selling in Troy",
    title: "A Suburban Market Outside Detroit",
    paragraphs: [
      "Troy has many quiet neighborhoods, a big business area and easy highway access. A lot of the houses were built between the 1950s and the 1990s, and some now need new kitchens, roofs, windows or heating and cooling.",
      "We buy houses in Troy as they are, so you don't have to fix anything first. Send us the address and a few details, and we'll get back to you.",
      "If listing with an agent looks like a better fit for your house, we'll tell you that too. We want you to understand your options.",
    ],
    asideTitle: "Troy sellers often ask about",
    asideItems: [
      "Selling a house that hasn't been updated in years",
      "Moving for a new job",
      "Selling a house from another state",
      "Selling a rental, with or without tenants",
    ],
  },
  situations: {
    title: "Situations We Often Discuss in Troy",
    intro:
      "Troy homeowners contact us for a few common reasons.",
    items: [
      {
        title: "House That Has Not Been Updated",
        text: "Old kitchens and bathrooms are common in older suburban houses. If updating is more than you want to take on, we can talk about buying it as it is.",
      },
      {
        title: "Relocating for a Job",
        text: "Many people work in Troy, and a job change can come with a tight deadline. Selling to us can be easier than getting the house ready for showings.",
      },
      {
        title: "Inherited or Estate Property",
        text: "If you're handling an estate from another city or state, we can walk you through it and work around your schedule.",
      },
      {
        title: "Landlord Selling a Rental",
        text: "Some owners decide to sell a rental after years of tenants and repairs. We buy rentals, whether tenants live there or not.",
      },
      {
        title: "Downsizing",
        text: "Moving to a smaller home or a condo means a lot of stuff and a lot of decisions. We can talk about timing and what needs to be cleared out.",
      },
      {
        title: "Property With Damage",
        text: "Water, fire or storm damage is hard enough without dealing with insurance too. We can talk through your options.",
      },
    ],
  },
  know: {
    title: "What to Know When Selling in Troy",
    intro:
      "These are general points, not legal or tax advice. A title company or attorney can answer questions about your own house.",
    items: [
      {
        title: "Oakland County Records",
        text: "Oakland County keeps the ownership papers for Troy, and your title company usually files them at closing.",
      },
      {
        title: "Taxes at Closing",
        text: "At closing, property taxes are usually split between you and the buyer. Your title company can show you the exact amounts.",
      },
      {
        title: "Selling From Out of State",
        text: "If you don't live nearby, most of the process can be done from a distance with a title company. We'll explain how it works.",
      },
    ],
  },
  communities: {
    title: "Troy and Nearby Communities",
    text: "We buy houses in Troy and talk with owners in the towns around it, including:",
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
      question: "Do you buy houses in Troy?",
      answer:
        "Yes. We buy houses in Troy and the towns around it. Send us the address and a few details and we'll get back to you.",
    },
    {
      question: "Do I need to renovate before selling a Troy house?",
      answer:
        "No. Many Troy houses are older and haven't been updated. Tell us what shape yours is in and we'll talk about it.",
    },
    {
      question: "Can you help if I live out of state?",
      answer:
        "Often, yes. Most of the process can be done from a distance with a title company, and we'll explain the steps.",
    },
    {
      question: "What happens after I contact you?",
      answer:
        "We reply to learn about your house and what you want, answer your questions and explain your options. There's no obligation.",
    },
    {
      question: "Is selling to FAHOPROSO better than listing with an agent?",
      answer:
        "It depends on your house and what matters most to you. Listing can bring a higher price for a house in good shape. Selling to us can be simpler for a house that needs work. We'll help you compare.",
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
    "Selling a house in Michigan comes with a few steps and rules that are specific to the state. We buy houses throughout Michigan, including West Michigan and the Detroit area.",
  leadB:
    "This page explains how selling usually works here, and how we can help.",
  overview: {
    eyebrow: "Selling in Michigan",
    title: "How Selling a House Works in Michigan",
    paragraphs: [
      "In Michigan, people selling a home usually fill out a form about the condition of the house. There are some exceptions. A title company, agent or attorney can tell you what applies to your sale.",
      "At closing, a title company usually handles the paperwork. If you owe money on the house, it is paid off from the sale, and the deed is filed with the county Register of Deeds. State and county transfer taxes usually apply, and they show up on your closing statement.",
      "If the house came from an estate, the county probate court may be involved. Our probate and inherited-house guides explain what to expect.",
    ],
    asideTitle: "Michigan sellers often ask about",
    asideItems: [
      "Probate and inherited houses",
      "Selling a house with back taxes or other debts",
      "What to do when you're behind on payments",
      "Selling from out of state",
    ],
  },
  situations: {
    title: "Situations We Often Discuss Across Michigan",
    intro:
      "No matter where in the state the house is, people usually sell for a few common reasons.",
    items: [
      {
        title: "Estate and Probate",
        text: "In Michigan, probate goes through the county probate court. If you're an heir or the personal representative, we can explain how a sale fits in.",
      },
      {
        title: "Behind on Payments or Taxes",
        text: "Falling behind feels urgent. We can talk about whether selling makes sense, and we also encourage you to speak with your lender or a housing counselor.",
      },
      {
        title: "Out-of-State Owner",
        text: "Owning a Michigan house from far away costs money and causes stress. Most of the process can be done from a distance.",
      },
      {
        title: "Rental or Investment Property",
        text: "Some owners decide to sell one property, or a few. We buy rentals, whether tenants live there or not.",
      },
      {
        title: "Major Repairs",
        text: "Roof, foundation, water or fire damage can make a regular sale hard. We can look at the house as it is.",
      },
      {
        title: "Vacant House",
        text: "An empty house still costs you for taxes, insurance and upkeep. We can talk about what makes sense for you.",
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
        text: "Sellers usually tell the buyer what they know about the house's condition. Ask a title company, agent or attorney what applies to you.",
      },
      {
        title: "Liens, Taxes and Mortgages",
        text: "If you owe money on the house, it is paid off from the sale. Gather your mortgage statement and any tax or debt notices early.",
      },
      {
        title: "Probate",
        text: "If the owner has passed away, the county probate court may need to approve the sale. Our probate guide explains the general steps.",
      },
    ],
  },
  communities: {
    title: "Where We Are Focused",
    text: "We're based in West Michigan and work in the areas below, and we buy houses in other parts of Michigan too.",
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
      question: "Do you buy houses all over Michigan?",
      answer:
        "Yes. We buy houses throughout Michigan, with a home base in West Michigan. Send us the address and a few details and we'll get back to you.",
    },
    {
      question: "Do I have to disclose problems with the house?",
      answer:
        "Usually, yes. Michigan sellers are generally expected to fill out a form about the house's condition, with some exceptions. A title company, agent or attorney can tell you what applies to you.",
    },
    {
      question: "What happens to my mortgage when I sell?",
      answer:
        "It is paid off from the sale at closing. Ask your lender how much you owe, so you know your numbers.",
    },
    {
      question: "Can I sell a house that is in probate?",
      answer:
        "Often, yes, though the court may need to approve some steps. Our probate guide explains the basics, and an attorney can advise you about the estate.",
    },
    {
      question: "Are there taxes when I sell a house in Michigan?",
      answer:
        "State and county transfer taxes usually apply, and they show up on your closing statement. For questions about your own taxes, ask a tax professional.",
    },
  ],
  nearby: [...allSlugs],
};
