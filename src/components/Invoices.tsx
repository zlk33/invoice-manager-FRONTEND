import Table from "./Table";
function Invoices() {
  window.document.title = "Fakturnik - Faktury";
  return (
    <>
      <div className="grid gap-4 h-panel">
        <div className="rounded-lg bg-white dark:bg-[#242526] dark:text-white">
          <header className="bg-white rounded-t-lg dark:bg-[#242526] px-6 py-4 flex items-center justify-between border-b">
            <h1 className="text-2xl font-bold">Lista faktur</h1>
            <div className="flex items-center gap-4">
              <button
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
                data-id="7"
                type="button"
                id="radix-:r1g:"
                aria-haspopup="menu"
                aria-expanded="false"
                data-state="closed"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-4 h-4 mr-2"
                  data-id="8"
                >
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
                <span data-id="9">2023</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-4 h-4 ml-2"
                  data-id="10"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              <button
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
                data-id="18"
                type="button"
                id="radix-:r1i:"
                aria-haspopup="menu"
                aria-expanded="false"
                data-state="closed"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-4 h-4 mr-2"
                  data-id="19"
                >
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
                <span data-id="20">Maj</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-4 h-4 ml-2"
                  data-id="21"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              <button className="hover:bg-gray-100 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors h-9 rounded-md px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-4 h-4 mr-2"
                  data-id="37"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" x2="12" y1="15" y2="3"></line>
                </svg>
                Wyeksportuj pliku .xls
              </button>
              <button
                className="bg-green-500 hover:bg-green-600 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors h-9 rounded-md px-3"
                data-id="36"
              >
                Dodaj nową
              </button>
            </div>
          </header>
          <div className="px-6 py-4">
            <Table></Table>
          </div>
        </div>
      </div>
    </>
  );
}
export default Invoices;
