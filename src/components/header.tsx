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
    const skillDiv = (document.getElementById('skills')?.offsetTop || 0) - 100
    console.log({skillDiv})
    window.scrollTo({ top: skillDiv , behavior: "smooth" });
  };

  return (
    <header className="fixed shadow-sm bg-accent-100 w-full xl:px-[5%] lg:py-8 z-50 px-10 py-4">
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10">
        <button className="header-title" onClick={scrollToTop}>
          MJA
        </button>
        <div className="flex flex-row divide-x divide-white justify-center items-center">
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
