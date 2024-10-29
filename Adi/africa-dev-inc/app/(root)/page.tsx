"use client"
import CounterCard from "@/components/Cards/CounterCard";
import ProposalCard from "@/components/Cards/ProposalCard";
import WADICard from "@/components/Cards/WADICard";
import { Button } from "@/components/ui/button";
import { Award, HandHeart, Handshake } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const counterInfo = [
  {
    title: "Sensitized children per year with ADI",
    headline:
      "Children sensitized in Cameroon and some other African countries",
    figure: 2500,
  },
  {
    title: "ADI members Worlwide",
    headline: "Our members are in overall 30 Countries Worldwide",
    figure: 1000,
  },
  {
    title: "ADI social activities",
    headline: "ADI plans to implement good social projects with you",
    figure: 5,
  },
];
const wadi =[
  {
    title: "Make donation",
    icon:<HandHeart size={38} color="red"/>,

    content:
"Help ADI to grow and continue its fight for the socio-human development of Africa"   ,
  },
  {
    title: "Partner with us",
    content: "Join the amazing ADI workforce required for the development of Africa",
  icon:<Handshake size={38} color="red"/>,
  },
  {
    title: "Be our sponsor",
    content: "Become our partner for the future of Africa",
    icon:<Award size={38} color="red"/>,

  },
]
const proposals =[
  {
    title: "15 computers for a mini village in Bafang",
    source:"/images/bafangLab.jpg",

    description:
"ADI is creating a mini computer laboratory for the locals of Bafang"   ,
  },
  {
    title: "Clean water for Bamenda villages",
    description: "The lack of portable water sources in the Bambili locality has touched us and we are putting energy to remedy the situation ",
    source:"/images/bambili.jpg",
  }
]
const energyForAdi = ["Time", "Energy"];
const achievedBy = ["Africans","us","You"]
export default function Home() {
  const [currentWord, setCurrentWord] = useState(energyForAdi[0])
  const [currentAchievement, setCurrentAchievement] = useState(achievedBy[0])
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev === energyForAdi[0] ? energyForAdi[1] : energyForAdi[0]));
    }, 4000);
    const achievementTimer = setInterval(() => {
      setCurrentAchievement((prev) => (prev === achievedBy[0] ? achievedBy[1] : prev!==achievedBy[2]? achievedBy[2]:achievedBy[0]));
    }, 4000);
    return () => {
      clearInterval(interval);
      clearInterval(achievementTimer);
    }; // Clear interval on component unmount
  }, []);
  return (
    <section className="">
      <div className="hero bg-[url('/images/hero.jpg')] bg-contain h-[30rem]">
        <div className="w-full bg-black opacity-60 h-full">
          <h1 className="text-white text-center w-[60%] leading-[5rem] capitalize pt-[5rem] text-6xl">
            Developing Africa can just and mostly be achieved by <span className={`ease-out text-red bg-white rounded pt-0 leading-3 tweak-animation `}>{currentAchievement}</span>
          </h1>
        </div>
      </div>
      <div className="flex gap-8 justify-between w-[90%] relative bottom-[8rem] mx-auto">
        {counterInfo.map((item, index) => {
          return (
            <CounterCard
              key={item.figure}
              className="px-5 py-[3rem] w-[100%]"
              figure={item.figure}
              headline={item.headline}
              title={item.title}
            />
          );
        })}
      </div>
      <div className="intro w-[90%] mx-auto">
        <h1 className="text-center text-3xl drop-shadow-3xl py-4 font-bold ">Welcome to ADI</h1>
        <h1 className="text-center font-bold text-xl pb-4 ">
          ADI needs your {currentWord}
        </h1>
        {/* <p>Why ADI?</p> */}
        <div className="flex gap-8">

        {wadi.map((item, index) => {
          return (
            <WADICard
            key={item.title}
            className=" w-[100%]"
            icon={item.icon}
            content={item.content}
            title={item.title}
            />
          );
        })}
        </div>
      </div>
      <section className="proposals w-[90%] mx-auto ">
        <h1 className="text-center font-bold text-2xl py-8">What we are doing</h1>
        <div className="flex gap-8">
        {proposals.map((item, index) => {
          return (
            <ProposalCard
            key={item.title}
            className=""
            source={item.source}
            description={item.description}
            title={item.title}
            />
          );
        })}
        </div>
      </section>
    </section>
  );
}
