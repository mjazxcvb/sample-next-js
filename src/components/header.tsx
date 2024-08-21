"use client";

export default function Header() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const scrollToProjects = () => {
    window.scrollTo({ top: window.innerHeight * 1.02, behavior: "smooth" });
  };

  const scrollToSkills = () => {
    window.scrollTo({ top: window.innerHeight * 2.9, behavior: "smooth" });
  };

  return (
    <header className="fixed shadow-sm bg-accent-100 w-full px-[5%] py-8 z-50">
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10">
        <button className="header-title" onClick={scrollToTop}>
          MJA
        </button>
        <div className="flex flex-row divide-x divide-black justify-center items-center">
          <button className="header-menu" onClick={scrollToProjects}>
            Projects
          </button>
          <button className="header-menu" onClick={scrollToSkills}>
            Skills
          </button>
          <button className="header-menu" onClick={scrollToBottom}>
            Contact Me
          </button>
        </div>
      </div>
    </header>
  );
}
