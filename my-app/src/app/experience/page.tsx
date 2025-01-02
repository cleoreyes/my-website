"use client";
// import Image from "next/image";
import { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="min-h-screen px-44 mt-40">
      <title>Experience</title>
      <div className="text-5xl text-white font-semibold text-left">
        <h1 className="pb-12">Experience</h1>
      </div>
      <div
        className={`flex flex-col items-center justify-center pb-5 ${
          isVisible ? "bottom-enter" : "opacity-0"
        }`}
      >
        <VerticalTimeline lineColor="rgba(255, 255, 255, 0.3)">
          {experiencesData.map((item, index) => {
            return (
              <div key={index} ref={ref} className="vertical-timeline-element">
                <VerticalTimelineElement
                  contentStyle={{
                    background: "rgba(255, 255, 255, 0.05)",
                    boxShadow: "none",
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                    textAlign: "left",
                    padding: "1.3rem 2rem",
                    margin: "2rem 0rem 5rem 0rem"
                  }}
                  contentArrowStyle={{
                    borderRight: "0.4rem solid rgba(255, 255, 255, 0.5)",
                  }}
                  visible={inView}
                  date={item.date}
                  dateClassName="text-white"
                  icon={item.icon}
                  iconStyle={{
                    background: "rgba(255, 255, 255, 0.15)",
                    fontSize: "1.5rem",
                    color: "white"
                  }}
                >
                  <h3 className="font-semibold capitalize text-white">{item.title}</h3>
                  <p className="!mt-0 font-normal text-gray-300">{item.location}</p>
                  <p className="!mt-1 !font-normal text-white/75">
                    {item.description}
                  </p>
                </VerticalTimelineElement>
              </div>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
}
