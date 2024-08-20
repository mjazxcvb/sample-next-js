export default function Header() {
  return (
    <header className="fixed shadow-sm bg-accent-100 w-full px-[5%] py-8 z-50">
      <div className="w-full flex flex-row justify-between items-center">
        <h1 className="header-title">MJA</h1>
        <div className="flex flex-row divide-x divide-black">
          <a className="header-menu" href="#projects">Projects</a>
          <a className="header-menu" href="#skills">Skills</a>
          <p className="header-menu">Contact Me</p>
        </div>
      </div>
    </header>
  );
}
