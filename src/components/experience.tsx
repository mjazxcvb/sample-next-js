"use client";

import { experiences } from "@/constants/work";
import classNames from "classnames";
import Image from "next/image";
import { useEffect, useState } from "react";

/* eslint-disable @next/next/no-img-element */
export default function Experience() {
  const [animate, setAnimate] = useState<boolean>(false);

  const handleScroll = () => {
    const height = window.innerHeight * 2 - 100;
    setAnimate(window.scrollY <= height);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="section pt-48 pb-32 bg-accent-100" id="projects">
      <div className="flex flex-row w-4/12">
        <div className="container">
          <div
            className={classNames("shadows")}
          >
            {"Recent Projects".split("").map((i) => (
              <span key={i}>{i}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 gap-8 flex flex-row flex-wrap w-10/12 relative items-center justify-center">
        {experiences.map((i) => (
          <a key={i.company} href={i.link}>
            <div className="card group">
              <div className="flex flex-col justify-center items-center w-full">
                <Image
                  src={i.images}
                  alt={i.company}
                  width={500}
                  height={200}
                  className={classNames(
                    "object-cover h-52 w-[400px]",
                    "opacity-80 p-0.5",
                    "group-hover:p-0 group-hover:opacity-100",
                    "rounded-t-lg"
                  )}
                />
                <div className="flex flex-col pt-3 pb-2 px-4 justify-center items-start w-full">
                  <h3
                    className={classNames("exp", {
                      "group-hover:underline": !!i.link,
                    })}
                  >
                    {i.company}
                  </h3>
                  <p className="w-[80%] related pt-2">
                    {i.related.join(" •  ")}
                  </p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
