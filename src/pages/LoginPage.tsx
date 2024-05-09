import ThemeSwitch from "../components/ThemeSwitch";
import Alert from "../components/Alert";
import LoadingSpinner from "../components/LoadingSpinner";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../axios/axios";
//API URL
const LOGIN_URL = "/auth/login";

function LoginPage() {
  window.document.title = "Fakturnik - Logowanie";

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [pwdV, setPwdV] = useState(false);
  const [alert, setAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [remember, setRemember] = useState(false);
  const [mailV, setMailV] = useState(false);

  //Email Validation - checking if email is in correct format
  function validateEmail(email: string) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  //Password Validation - checking if password is at least 12 characters long
  function validatePassword(password: string) {
    if (password.length < 12) return false;
    return true;
  }

  function toggleAlert() {
    setAlert(!alert);
  }

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMailV(false);
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
        navigate("/");
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
        if (error.response.data.error === "notverified") {
          setMailV(true);
          setAlertMessage(
            error.response.data.message +
              " Na twój adres email został wysłany link do weryfikacji. Nie otrzymałeś maila?"
          );
          setAlert(true);
          setLoading(false);
        } else {
          setAlertMessage(error.response.data.message);
          setAlert(true);
          setLoading(false);
        }
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
      <div className="rounded-lg border bg-white dark:bg-[#242526] dark:border-zinc-900 mx-auto max-w-md shadow-lg">
        <h3 className="text-2xl font-bold p-6">Logowanie</h3>
        <form className="px-6" onSubmit={handleLogin}>
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
          <div className="mt-2">
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
              className="flex h-10 text-black w-full rounded-md border border-black mt-2 px-3 py-2 text-sm placeholder:text-muted-foreground"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Hasło"
            />
          </div>
          <div className="flex items-center justify-between mt-1">
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
            <button
              type="button"
              onClick={(e) => setPwdV(!pwdV)}
              className={
                "text-black dark:text-white text-sm h-8 font-medium hover:text-blue-300 transition-colors duration-500 ease-in-out " +
                (pwdV ? "text-blue-300" : "")
              }
            >
              {pwdV ? "Ukryj hasło" : "Pokaż hasło"}
            </button>
          </div>
          {alert ? (
            <Alert message={alertMessage} mail={mailV} toggle={toggleAlert} />
          ) : null}
          <button
            className={
              "rounded-md text-sm font-medium mt-1 mb-6 h-10 px-4 py-2 w-full dark:text-black bg-black hover:bg-blue-300 text-white transition-color ease-in-out duration-500 " +
              (loading
                ? "bg-blue-300 dark:bg-blue-300"
                : "dark:bg-white dark:hover:bg-blue-300")
            }
            type="submit"
            {...(loading ? { disabled: true } : "")}
          >
            {loading ? <LoadingSpinner /> : "Zaloguj się"}
          </button>
          {/* <div className="mt-4 text-center text-base pb-4">
            Nie masz konta?
            <Link to="/register" className="underline ml-1 hover:text-blue-300">
              Zarejestruj się
            </Link>
          </div> */}
        </form>
      </div>
    </div>
  );
}
export default LoginPage;
