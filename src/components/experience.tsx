"use client";

import { lang } from "@/constants";
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
    <section className="section pt-48" id="projects">
      <div className="flex flex-row w-4/12 ">
        <div className="container">
          <div
            className={classNames(
              "shadows hover:text-accent-100 cursor-pointer",
              {
                "section-header": animate,
              }
            )}
          >
            {"PROJECTS".split("").map((i) => (
              <span key={i}>{i}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 gap-5 flex flex-row flex-wrap w-10/12 relative items-center justify-center">
        {experiences.map((i) => (
          <a key={i.company} href={i.link}>
            <div className="cursor-pointer group max-w-[400px] min-h-[400px] flex flex-col items-center justify-normal">
              <h3 className="exp">{i.company}</h3>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src={i.images}
                  alt={i.company}
                  width={500}
                  height={200}
                  className={classNames(
                    "object-cover h-52 w-[400px]",
                    "opacity-70 p-0.5",
                    "group-hover:p-0 group-hover:opacity-100"
                  )}
                />
                <p className="w-[80%] related pt-2">{i.related.join(" •  ")}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
