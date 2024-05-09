function Notifications() {
  window.document.title = "Fakturnik - Powiadomienia";
  return (
    <>
      <div className="grid gap-4 h-panel">
        <div className="rounded-lg bg-white dark:bg-[#242526] dark:text-white">
          <header className="bg-white rounded-t-lg dark:bg-[#242526] px-6 py-4 flex items-center justify-between border-b">
            <h1 className="text-2xl font-bold">Powiadomienia</h1>
          </header>
          <div className="px-6 py-4">
            <div className="rounded-lg border bg-card w-full">
              <div className="flex items-start gap-4 p-6" data-id="2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
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
                    className="h-5 w-5 text-gray-500 dark:text-gray-400"
                  >
                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                  </svg>
                </div>
                <div className="flex-1 space-y-2">
                  <div
                    className="flex items-center justify-between"
                    data-id="6"
                  >
                    <h4 className="text-lg font-medium">New Message</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      2 hours ago
                    </p>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    You have a new message from Jane Doe. Click to view.
                  </p>
                </div>
              </div>
              <p className="bg-green-100 rounded-b-lg px-4">Nowe</p>
            </div>
            <div className="rounded-lg border bg-card w-full">
              <div className="flex items-start gap-4 p-6" data-id="2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
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
                    className="h-5 w-5 text-gray-500 dark:text-gray-400"
                  >
                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                  </svg>
                </div>
                <div className="flex-1 space-y-2">
                  <div
                    className="flex items-center justify-between"
                    data-id="6"
                  >
                    <h4 className="text-lg font-medium">New Message</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      2 hours ago
                    </p>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    You have a new message from Jane Doe. Click to view.
                  </p>
                </div>
              </div>
              <p className="bg-gray-200 rounded-b-lg px-4">Wyświetlone</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Notifications;
