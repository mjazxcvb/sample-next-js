import { ReactNode } from "react";

export type TExp = {
  company: string;
  related: string[];
  images: string;
  link?: string;
};

export type TLinks = {
  name: string;
  link: string;
  Icon: () => ReactNode
};