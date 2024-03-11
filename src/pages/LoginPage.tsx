import ThemeSwitch from "../components/ThemeSwitch";
import Alert from "../components/Alert";
import LoadingSpinner from "../components/LoadingSpinner";
import { EyeIcon } from "../components/Icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../axios/axios";
const LOGIN_URL = "/auth/login";
function LoginPage() {
  window.document.title = "Fakturnik - Logowanie";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [pwdV, setPwdV] = useState(false);
  const [alert, setAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [remember, setRemember] = useState(false);

  function validateEmail(email: string) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  function validatePassword(password: string) {
    if (password.length < 8) return false;
    return true;
  }
  function toggleAlert() {
    setAlert(!alert);
  }

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validateEmail(email)) {
      setAlertMessage("Wprowadź poprawny adres email!");
      setAlert(true);
      return;
    }
    if (!validatePassword(password)) {
      setAlertMessage("Wprowadź poprawne hasło!");
      setAlert(true);
      return;
    }
    Login();
  }
  async function Login() {
    setLoading(true);
    try {
      const response = await axios.post(LOGIN_URL, {
        email: email,
        password: password,
        remember: remember,
      });
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      } else {
        setAlertMessage("Wystąpił błąd podczas logowania!");
        setAlert(true);
        setLoading(false);
      }
    } catch (error: any) {
      if (!error.response) {
        setAlertMessage("Brak odpowiedzi serwera!");
        setAlert(true);
        setLoading(false);
      } else if (error.response.status === 401) {
        setAlertMessage(error.response.data.message);
        setAlert(true);
        setLoading(false);
      } else if (error.response.status === 500) {
        setAlertMessage("Błąd połączenia z bazą danych!");
        setAlert(true);
        setLoading(false);
      }
    }
  }

  return (
    <div className="bg-zinc-100 dark:bg-[#18191A] dark:text-white h-screen transition-all duration-500">
      <div className="p-8 flex justify-end">
        <ThemeSwitch />
      </div>
      <div className="rounded-lg border bg-white dark:bg-[#242526] dark:border-zinc-900 mx-auto max-w-md">
        <h3 className="text-2xl font-bold p-6">Logowanie</h3>
        <form className="px-6 space-y-4" onSubmit={handleLogin}>
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className="flex h-10 text-black w-full rounded-md border border-black bg-background px-3 py-2 text-sm  placeholder:text-muted-foreground"
              id="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative space-y-2">
            <div className="flex items-center">
              <label
                className="text-sm font-medium leading-none"
                htmlFor="password"
              >
                Hasło
              </label>
            </div>
            <input
              {...(pwdV ? { type: "text" } : { type: "password" })}
              className="flex h-10 text-black w-full rounded-md border border-black px-3 py-2 text-sm placeholder:text-muted-foreground"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Hasło"
            />
            <button
              type="button"
              onClick={(e) => setPwdV(!pwdV)}
              className={
                "text-black inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium absolute bottom-1 right-1 h-8 w-8 hover:text-blue-300 " +
                (pwdV ? "text-blue-300" : "")
              }
            >
              <EyeIcon className="w-4 h-4" />
            </button>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="rounded border border-black h-4 w-4"
              onChange={() => setRemember(!remember)}
            />
            <label htmlFor="remember" className="text-sm ml-2">
              Zapamiętaj mnie
            </label>
          </div>
          {alert ? (
            <Alert message={alertMessage} type="danger" toggle={toggleAlert} />
          ) : null}
          <button
            className={
              "rounded-md text-sm font-medium h-10 px-4 py-2 w-full dark:text-black bg-black hover:bg-blue-300 text-white transition-color ease-in-out duration-500 " +
              (loading
                ? "bg-blue-300 dark:bg-blue-300"
                : "dark:bg-white dark:hover:bg-blue-300")
            }
            type="submit"
            {...(loading ? { disabled: true } : "")}
          >
            {loading ? <LoadingSpinner /> : "Zaloguj się"}
          </button>
          <div className="mt-4 text-center text-base pb-4">
            Nie masz konta?
            <Link to="/register" className="underline ml-1 hover:text-blue-300">
              Zarejestruj się
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default LoginPage;
