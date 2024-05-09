function Home() {
  window.document.title = "Fakturnik - Strona główna";
  return (
    <>
      <div className="grid gap-4 h-panel">
        <div className="rounded-lg bg-white dark:bg-[#242526] dark:text-white">
          <header className="bg-white rounded-t-lg dark:bg-[#242526] px-6 py-4 flex items-center justify-between border-b">
            <h1 className="text-2xl font-bold">Strona główna</h1>
          </header>
          <div className="py-2 px-6">
            <h1 className="text-xl font-bold py-2">Witaj, imie!</h1>
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              <div className="rounded-lg border  p-6 shadow-sm dark:border-[#18191A]">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Wszystkie faktury
                </h3>
                <div className="mt-2 flex items-baseline justify-between">
                  <span className="text-3xl font-bold">1</span>
                </div>
              </div>
              <div className="rounded-lg border  p-6 shadow-sm dark:border-[#18191A]">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Nieopłacone faktury
                </h3>
                <div className="mt-2 flex items-baseline justify-between">
                  <span className="text-3xl font-bold text-red-500">28</span>
                </div>
              </div>
              <div className="rounded-lg border bg-white p-6 shadow-sm dark:border-[#18191A]">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Faktury w tym miesiącu
                </h3>
                <div className="mt-2 flex items-baseline justify-between">
                  <span className="text-3xl font-bold">0</span>
                </div>
              </div>
              <div className="rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Faktury ze bliżającym się terminem zapłaty
                </h3>
                <div className="mt-2 flex items-baseline justify-between">
                  <span className="text-3xl font-bold text-green-500">84</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
