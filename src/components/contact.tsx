import { links } from "@/constants";

export default function Contact() {
  return (
    <section className="w-full flex flex-row justify-center items-center">
      <div className="w-8/12 lg:w-4/12 flex flex-row justify-between items-center py-10">
        {links.map((i) => (
          <a href={i.link} className="link" key={i.name}>
            {i.name}
          </a>
        ))}
      </div>
    </section>
  );
}
