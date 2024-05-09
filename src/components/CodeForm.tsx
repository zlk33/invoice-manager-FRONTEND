import { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import { Link } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import Alert from "./Alert";
function CodeForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState("");

  function toggleAlert() {
    setAlert(!alert);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setAlertMessage("Kod weryfikacyjny jest niepoprawny!");
      setAlert(true);
    }, 2000);
  }

  return (
    <div className="bg-zinc-100 dark:bg-[#18191A] dark:text-white h-screen transition-all duration-500">
      <div className="p-8 flex justify-end">
        <ThemeSwitch />
      </div>
      <div className="rounded-lg border bg-white dark:bg-[#242526] dark:border-zinc-900 mx-auto max-w-md shadow-lg">
        <h3 className="text-2xl font-bold p-6">Weryfikacja konta</h3>
        <form className="px-6" onSubmit={handleSubmit}>
          <div className="space-y-2 mb-5">
            <label className="text-sm font-medium leading-none" htmlFor="code">
              Kod weryfikacyjny z maila
            </label>
            <div className="flex justify-between">
              <input
                type="text"
                maxLength={1}
                minLength={1}
                placeholder="-"
                className="flex items-center text-lg font-semibold h-10 text-black w-10 rounded-md border border-black bg-background p-5 placeholder:text-muted-foreground"
              />
              <input
                type="text"
                maxLength={1}
                minLength={1}
                placeholder="-"
                className="flex items-center text-lg font-semibold h-10 text-black w-10 rounded-md border border-black bg-background p-5 placeholder:text-muted-foreground"
              />
              <input
                type="text"
                maxLength={1}
                minLength={1}
                placeholder="-"
                className="flex h-10 text-black w-10 rounded-md border border-black bg-background p-3 placeholder:text-muted-foreground"
              />
              <input
                type="text"
                maxLength={1}
                minLength={1}
                placeholder="-"
                className="flex h-10 text-black w-10 rounded-md border border-black bg-background p-3 placeholder:text-muted-foreground"
              />
              <input
                type="text"
                maxLength={1}
                minLength={1}
                placeholder="-"
                className="flex h-10 text-black w-10 rounded-md border border-black bg-background p-3 placeholder:text-muted-foreground"
              />
              <input
                type="text"
                maxLength={1}
                minLength={1}
                placeholder="-"
                className="flex h-10 text-black w-10 rounded-md border border-black bg-background p-3 placeholder:text-muted-foreground"
              />
            </div>
          </div>
          {alert ? <Alert message={alertMessage} toggle={toggleAlert} /> : null}
          <div className="mt-5">
            <button
              className={
                "rounded-md text-sm font-medium mt-1 h-10 px-4 py-2 w-full dark:text-black bg-black hover:bg-blue-300 text-white transition-color ease-in-out duration-500 " +
                (loading
                  ? "bg-blue-300 dark:bg-blue-300"
                  : "dark:bg-white dark:hover:bg-blue-300")
              }
              type="submit"
              {...(loading ? { disabled: true } : "")}
            >
              {loading ? <LoadingSpinner /> : "Zweryfikuj konto"}
            </button>
          </div>
          <div className="mt-4 text-center text-base pb-4">
            <Link to="/register" className="underline ml-1 hover:text-blue-300">
              Wróć do rejestracji
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default CodeForm;
