import NavigationLinks from "./NavigationLinks";

export default function NavigationBar() {
  return (
    <div id="NavigationBar" className="flex justify-between items-center w-full px-[4%] pt-[3%] fixed top-0">
      <div id="logo" className="flex flex-col w-1/5">
        <p className="text-5xl font-thin">EMIR</p>
        <p className="text-5xl font-thin">JAVOR</p>
      </div>
      <div id="links" className="w-4/5">
        <ul className="flex justify-around border-t border-gray-500 pt-5">
          <li><NavigationLinks href="/">About</NavigationLinks></li>
          <li><NavigationLinks href="/">Portfolio</NavigationLinks></li>
          <li><NavigationLinks href="/">Services</NavigationLinks></li>
          <li><NavigationLinks href="/">Contact</NavigationLinks></li>
        </ul>
      </div>
      <div id="langage" className="flex flex-col justify-around ml-1">
        <button className="text-2xl text-slate-400 uppercase hover:underline">FR</button>
        <button className="text-2xl text-white uppercase underline">EN</button>
      </div>
    </div>
  );
}
