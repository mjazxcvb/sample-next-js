/* eslint-disable @next/next/no-img-element */

export default async function NotFound() {
  return (
    <>
      <div
        className={
          "absolute h-64 w-screen bg-gradient-to-b from-[#ECF9FE] via-[#ECF9FE] to-transparent top-0 z-[-1]"
        }
      ></div>
      <main className="relative h-screen w-screen flex flex-col justify-center items-center">
        <div className="flex flex-col w-full justify-center items-center gap-1 mb-6">
          <h2 className="header-3">Well, this is awkward</h2>
          <h2 className="header-3">
            {`The page you are looking for can't be found`}
          </h2>
        </div>
        <div className="flex flex-col w-full justify-center items-center gap-5">
          <a
            className="bg-piccolo-main text-sm py-2 px-2 text-white rounded-lg"
            href="/companies"
          >
            Go back home
          </a>

          <p className="label-5">Code: 404</p>
        </div>
      </main>
    </>
  );
}
