import { links } from "@/constants";

export default function Contact() {
  return (
    <section className="w-full flex flex-row justify-center items-center bg-secondary">
      <div className="w-10/12 xl:w-4/12 flex flex-row justify-between items-center py-10">
        {links.map((i) => {
          const Icon = i.Icon;
          return (
            <a href={i.link} className="link" key={i.name}>
              <Icon />
            </a>
          );
        })}
      </div>
    </section>
  );
}
