function Home() {
  window.document.title = "Fakturnik - Strona główna";
  return (
    <div className="grid gap-4">
      <div className="rounded-lg bg-white dark:bg-[#242526] dark:text-white shadow-sm">
        <div className="p-4">
          <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
            Witaj, Jan
          </h3>
        </div>
      </div>
    </div>
  );
}
export default Home;
