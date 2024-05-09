import { NavLink, Link, Outlet } from "react-router-dom";
import { useState } from "react";
import ThemeSwitch from "./components/ThemeSwitch";
import {
  LogoIcon,
  InvoiceIcon,
  SettingsIcon,
  BarsIcon,
  HomeIcon,
  NotificationIcon,
} from "./components/Icons";
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  function toggleSidebar() {
    setSidebarOpen(!sidebarOpen);
  }
  return (
    <div className="flex h-screen w-full overflow-hidden bg-zinc-100 dark:bg-[#18191A] text-black dark:text-white transition-all ease-in duration-200">
      <div
        className={
          "border-r border-gray-200 bg-white dark:bg-[#242526] dark:border-zinc-900 w-60 " +
          (sidebarOpen ? "" : "hidden")
        }
      >
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center px-4 border-b border-gray-200 dark:border-zinc-900">
            <NavLink className="flex items-center gap-2 font-semibold" to="/">
              <LogoIcon className="w-8 h-8" />
              <span>Fakturnik</span>
            </NavLink>
          </div>
          <nav className="flex-1 overflow-auto px-2 font-semibold">
            <div className="grid gap-4 py-4">
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? "flex items-center gap-2 px-3 py-2 transition-all ease-in-out duration-300 bg-zinc-100 dark:bg-[#18191A] font-semibold rounded-md"
                    : "flex items-center gap-2 px-3 py-2 transition-all ease-in-out duration-300 text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-black";
                }}
                to="/"
              >
                <HomeIcon className="w-5 h-5" />
                Strona główna
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? "flex items-center gap-2 px-3 py-2 transition-all ease-in-out duration-300 bg-zinc-100 dark:bg-[#18191A] font-semibold rounded-md"
                    : "flex items-center gap-2 px-3 py-2 transition-all ease-in-out duration-300 text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-black";
                }}
                to="/invoices"
              >
                <InvoiceIcon className="w-5 h-5" />
                Faktury
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? "flex items-center gap-2 px-3 py-2 transition-all ease-in-out duration-300 bg-zinc-100 dark:bg-[#18191A] font-semibold rounded-md"
                    : "flex items-center gap-2 px-3 py-2 transition-all ease-in-out duration-300 text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-black";
                }}
                to="/notifications"
              >
                <NotificationIcon className="w-5 h-5" />
                Powiadomienia
                <div className="px-2.5 py-0.5 text-xs font-semibold transition-colors bg-black dark:bg-white text-white dark:text-black flex ml-auto h-6 items-center justify-center rounded-full">
                  0
                </div>
              </NavLink>
            </div>
          </nav>
          <div className="flex items-center justify-center p-2">
            <span className="relative flex overflow-hidden rounded-full h-9 w-9 mr-2">
              <span className="flex h-full w-full items-center justify-center rounded-full bg-zinc-200 dark:bg-[#18191A]">
                JP
              </span>
            </span>
            <div className="grid gap-0.5 text-xs">
              <div className="font-medium">Jan Paweł II</div>
              <div className="text-gray-500 dark:text-gray-400">
                jp2@gmail.com
              </div>
            </div>
          </div>
          <div className="p-3">
            <Link
              to="/logout"
              className="inline-flex items-center justify-center border-2 whitespace-nowrap rounded-md text-sm font-medium transition-all ease-in-out duration-300 h-10 px-4 py-2 w-full"
            >
              Wyloguj
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <header className="flex h-16 items-center gap-4 bg-white dark:bg-[#242526] border-b dark:border-zinc-900 pl-2 pr-10">
          <button
            onClick={toggleSidebar}
            className="inline-flex items-center justify-center rounded-md    bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
          >
            <BarsIcon className="w-6 h-6" />
          </button>
          <div className="ml-auto">
            <ThemeSwitch />
          </div>
        </header>
        <main className="flex-1 flex flex-col p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
