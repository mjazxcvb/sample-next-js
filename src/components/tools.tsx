"use client";

import { lang } from "@/constants";
import classNames from "classnames";
import { useEffect, useState } from "react";

/* eslint-disable @next/next/no-img-element */
export default function Tools() {
  const [animate, setAnimate] = useState<boolean>(false);

  const handleScroll = () => {
    const height = window.innerHeight * 3 - 100;
    setAnimate(window.scrollY <= height);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="section py-10" id="skills">
      <div className="w-9/12 flex flex-col items-end pb-2">
        <div className="flex flex-row w-4/12">
          <div className="container">
            <div className={classNames("shadows-black")}>
              {"Skills".split("").map((i) => (
                <span key={i}>{i}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="gap-6 flex flex-row justify-between xl:justify-center flex-wrap w-8/12">
        {lang.map((i, idx) => (
          <div className="group cursor-pointer" key={idx}>
            <div className="flex flex-col relative p-2">
              <div
                className={classNames(
                  "h-14 w-14 top-5 left-5 opacity-0 absolute",
                  "rounded-full  bg-accent/10 p-2 group-hover:bg-accent-100/30"
                )}
              />
              <img
                alt={i.name}
                className={classNames(
                  "h-20 w-auto z-10 ",
                  "group-hover:animate-pulse"
                )}
                src={i.icon}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
