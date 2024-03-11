import ThemeSwitch from "../components/ThemeSwitch";
import Alert from "../components/Alert";
import LoadingSpinner from "../components/LoadingSpinner";
import { EyeIcon } from "../components/Icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../axios/axios";
const LOGIN_URL = "/auth/login";
function RegisterPage() {
  window.document.title = "Fakturnik - Rejestracja";

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
        <h3 className="text-2xl font-bold p-6">Rejestracja</h3>
        <form className="px-6 space-y-2" onSubmit={handleLogin}>
          <div className="space-y-1">
            <label className="text-sm font-medium leading-none" htmlFor="email">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="flex h-10 text-black w-full rounded-md border border-black bg-background px-3 py-2 text-sm  placeholder:text-muted-foreground"
              id="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <label
              className="text-sm font-medium leading-none"
              htmlFor="firstname"
            >
              Imie<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="flex h-10 text-black w-full rounded-md border border-black bg-background px-3 py-2 text-sm  placeholder:text-muted-foreground"
              id="firstname"
              placeholder="Imie"
            />
          </div>
          <div className="space-y-1">
            <label
              className="text-sm font-medium leading-none"
              htmlFor="lastname"
            >
              Nazwisko<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="flex h-10 text-black w-full rounded-md border border-black bg-background px-3 py-2 text-sm  placeholder:text-muted-foreground"
              id="lastname"
              placeholder="Nazwisko"
            />
          </div>
          <div className="mt-3 space-y-2 relative">
            <div className="flex items-center">
              <label
                className="text-sm font-medium leading-none"
                htmlFor="password"
              >
                Hasło<span className="text-red-500">*</span>
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
          <div className="mt-3 space-y-2 relative">
            <div className="flex items-center">
              <label
                className="text-sm font-medium leading-none"
                htmlFor="password"
              >
                Powtórz hasło<span className="text-red-500">*</span>
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
          {alert ? (
            <Alert message={alertMessage} type="danger" toggle={toggleAlert} />
          ) : null}

          <button
            className={
              "rounded-md block text-sm font-medium h-10 px-4 w-full dark:text-black bg-black hover:bg-blue-300 text-white " +
              (loading
                ? "bg-blue-300 dark:bg-blue-300"
                : "dark:bg-white dark:hover:bg-blue-300")
            }
            type="submit"
            {...(loading ? { disabled: true } : "")}
          >
            {loading ? <LoadingSpinner /> : "Zarejestruj się"}
          </button>
          <div className="text-center text-base py-4">
            Masz konto?
            <Link to="/login" className="underline ml-1 hover:text-blue-300">
              Zaloguj się
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default RegisterPage;
