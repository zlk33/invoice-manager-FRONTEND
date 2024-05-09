import { useParams } from "react-router-dom";
import ThemeSwitch from "../components/ThemeSwitch";
import Alert from "../components/Alert";
import LoadingSpinner from "../components/LoadingSpinner";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function EmailVerificationPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [emailInput, setEmail] = useState("");
  const [codeInput, setCode] = useState("");
  function toggleAlert() {
    setAlert(!alert);
  }
  const { code, email } = useParams();
  useEffect(() => {
    if (email) {
      setEmail(email);
    }
    if (code) {
      setCode(code);
    }
  }, [email, code]);
  return (
    <div className="bg-zinc-100 dark:bg-[#18191A] dark:text-white h-screen transition-all duration-500">
      <div className="p-8 flex justify-end">
        <ThemeSwitch />
      </div>
      <div className="rounded-lg border bg-white dark:bg-[#242526] dark:border-zinc-900 mx-auto max-w-md shadow-lg">
        <h3 className="text-2xl font-bold p-6">Weryfikacja konta</h3>
        <form className="px-6">
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className="flex h-10 text-black w-full rounded-md border border-black bg-background px-3 py-2 text-sm  placeholder:text-muted-foreground"
              id="email"
              placeholder="Email"
              value={emailInput}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none" htmlFor="code">
              Kod weryfikacyjny
            </label>
            <input
              type="text"
              className="flex h-10 text-black w-full rounded-md border border-black bg-background px-3 py-2 text-sm  placeholder:text-muted-foreground"
              id="code"
              placeholder="Email"
              value={codeInput}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
          {alert ? <Alert message={alertMessage} toggle={toggleAlert} /> : null}
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
          <div className="mt-4 text-center text-base pb-4">
            <Link to="/login" className="underline ml-1 hover:text-blue-300">
              Wróć do logowania
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default EmailVerificationPage;
