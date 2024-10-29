import { HandPlatterIcon, HandshakeIcon, Home, Newspaper, NewspaperIcon, PlaneLanding, Settings } from "lucide-react";
import Image from "next/image"
export const sidebarLinks = [
  {
    imgURL: <Home/>,
    route: "/dashboard",
    label: "Home",
  },
  {
    imgURL: <PlaneLanding/>,
    route: "/events",
    label: "Events",
  },
  {
    imgURL: <HandshakeIcon/>,
    route: "/matches",
    label: "Matches",
  },
  {
    imgURL:<NewspaperIcon/>,
    route: "/news",
    label: "News",
  },
  {
    imgURL:<Settings/>,
    route: "/settings",
    label: "Settings",
  },
];
export const navBarLinks = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "About ",
      url: "/about",
    },
    {
      label: "Donate",
      url: "/donate",
    },
    {
      label: "Gallery",
      url: "/gallery",
    },
    {
      label: "Events",
      url: "/events",
    },
    {
      label: "Contact",
      url: "/contact",
    },
    {
      label: "Join Us",
      url: "/signup",
    },
    {
      label: "Sign In",
      url: "/signin",
    },
    {
      label: "Help",
      url: "/help",
    },
  ]

  export const footerLinks = [
    {
      firstRow:[
        {
          heading:"politics",
          links:[
            {
              label: "Environment",
              url:"/politics"
            },
            {
              label: "education",
              url:"/politics"
            },
            {
              label: "United States",
              url:"/politics"
            },
            {
              label: "Elections",
              url:"/politics"
            },
            {
              label: "Brexit",
              url:"/politics"
            },
          ]
        },
        {
          heading:"sports",
          links:[
            {
              label: "martial arts",
              url:"/politics"
            },
            {
              label: "baseball",
              url:"/politics"
            },
            {
              label: "athletics",
              url:"/politics"
            },
            {
              label: "basketball",
              url:"/politics"
            },
          ]
        },
        {
          heading:"Technology",
          links:[
            {
              label: "multimedia",
              url:"/politics"
            },
            {
              label: "electronics",
              url:"/politics"
            },
            {
              label: "reviews",
              url:"/politics"
            },
          ]
        },
        {
          heading:"science",
          links:[
            {
              label: "space",
              url:"/politics"
            },
            {
              label: "animal world",
              url:"/politics"
            },
            {
              label: "Human and Health",
              url:"/politics"
            },
            {
              label: "Humanities",
              url:"/politics"
            },
          ]
        },
        {
          heading:"Get the app",
          links:[
            {
              label: <button className='outline-none'>
              <Image
                src={"/images/badge-app-store.svg"}
                alt="logo"
                width={100}
                height={100}
              />
          </button>,
              url:"/politics"
            },
            {
              label:<button>
              <Image
                src={"/images/badge-google-play.svg"}
                alt="logo"
                width={100}
                height={100}
              />
          </button>,
              url:"/politics"
            },
          ]
        },
      ],
      secondRow:[
        {
          heading:"entertainment",
          links:[
            {
              label: "Environment",
              url:"/politics"
            },
            {
              label: "movie",
              url:"/politics"
            },
            {
              label: "podcasts",
              url:"/politics"
            },
            {
              label: "arts and culture",
              url:"/politics"
            },
            {
              label: "celebreties",
              url:"/politics"
            },
          ]
        },
        {
          heading:"business",
          links:[
            {
              label: "economy markets",
              url:"/politics"
            },
            {
              label: "companies",
              url:"/politics"
            },
            {
              label: "Banks and Finance",
              url:"/politics"
            },
            {
              label: "Consumer and service",
              url:"/politics"
            },
          ]
        },
        {
          heading:"travel",
          links:[
            {
              label: "destinations",
              url:"/politics"
            },
            {
              label: "city guide",
              url:"/politics"
            },
            {
              label: "travel advice",
              url:"/politics"
            },
            {
              label: "route planner",
              url:"/politics"
            },
          ]
        },
        {
          heading:"tags",
          links:[
            {
              label: "reviews",
              url:"/politics"
            },
            {
              label: "in the news",
              url:"/politics"
            },
            {
              label: "opinion",
              url:"/politics"
            },
          ]
        },
      ]
    }
  ]

  export const termsOfService = [
    {
      label:"Terms & Conditions",
      url:"/terms"
    },
    {
      label:"privacy policy",
      url:"/terms"
    },
    {
      label:"imprint",
      url:"/terms"
    },
    {
      label:"sitemap",
      url:"/terms"
    },
  ]