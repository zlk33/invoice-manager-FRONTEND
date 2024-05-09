import ThemeSwitch from "../components/ThemeSwitch";
import Alert from "../components/Alert";
import LoadingSpinner from "../components/LoadingSpinner";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../axios/axios";
import CodeForm from "../components/CodeForm";
//API URL
const REGISTER_URL = "/auth/register";

function RegisterPage() {
  window.document.title = "Fakturnik - Rejestracja";

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [rPassword, setRPassword] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [pwdV, setPwdV] = useState(false);
  const [alert, setAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [codeForm, setCodeForm] = useState(false);

  //Email Validation - checking if email is in correct format
  function validateEmail(email: string) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  //Password Validation - checking if password is at least 12 characters long and contains at least 1 special character
  function validatePassword(password: string) {
    if (password.length < 12) return false;
    const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (!specialChars.test(password)) return false;
    return true;
  }
  //Password checker - checking if password and repeated password are the same
  function passwordChecker(password: string, rPassword: string) {
    return password === rPassword;
  }
  //Name and firstname validation - checking if name and firstname are not empty
  function validateName(name: string) {
    return name !== "";
  }

  function toggleAlert() {
    setAlert(!alert);
  }

  function handleRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validateEmail(email)) {
      setAlertMessage("Wprowadź poprawny adres email!");
      setAlert(true);
      return;
    }
    if (!validateName(firstName)) {
      setAlertMessage("Wprowadź swoje imię!");
      setAlert(true);
      return;
    }
    if (!validateName(lastName)) {
      setAlertMessage("Wprowadź swoje nazwisko!");
      setAlert(true);
      return;
    }
    if (!validatePassword(password)) {
      setAlertMessage("Wprowadź poprawne hasło!");
      setAlert(true);
      return;
    }
    if (!passwordChecker(password, rPassword)) {
      setAlertMessage("Hasła nie są takie same!");
      setAlert(true);
      return;
    }
    Register();
  }
  async function Register() {
    setLoading(true);
    try {
      const response = await axios.post(REGISTER_URL, {
        email: email,
        password: password,
        firstname: firstName,
        lastname: lastName,
      });
      if (response.status === 201) {
        setCodeForm(true);
        setLoading(false);
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
  if (codeForm) {
    return <CodeForm />;
  }
  return (
    <div className="bg-zinc-100 dark:bg-[#18191A] dark:text-white h-screen transition-all duration-500">
      <div className="p-8 flex justify-end">
        <ThemeSwitch />
      </div>
      <div className="rounded-lg border bg-white dark:bg-[#242526] dark:border-zinc-900 mx-auto max-w-md shadow-lg">
        <h3 className="text-2xl font-bold p-6">Rejestracja</h3>
        <form className="px-6" onSubmit={handleRegister}>
          <div className="space-y-1">
            <label className="text-sm font-medium leading-none" htmlFor="email">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="flex h-10 text-black w-full rounded-md border border-black bg-background px-3 py-2 text-sm  placeholder:text-muted-foreground"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Podaj poprawny adres email
            </p>
          </div>
          <div className="space-y-1">
            <label
              className="text-sm font-medium leading-none"
              htmlFor="firstname"
            >
              Imię<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="flex h-10 text-black w-full rounded-md border border-black bg-background px-3 py-2 text-sm  placeholder:text-muted-foreground"
              id="firstname"
              placeholder="Imię"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Podaj swoje imię
            </p>
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
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Podaj swoje nazwisko
            </p>
          </div>
          <div className="mt-3 space-y-2">
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Hasło"
            />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Podaj hasło składające się z min. 12 znaków oraz zawierające min.
              1 znak specjalny
            </p>
          </div>
          <div className="mt-2">
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
              className="flex h-10 text-black w-full mt-2 rounded-md border border-black px-3 py-2 text-sm placeholder:text-muted-foreground"
              id="password"
              value={rPassword}
              onChange={(e) => setRPassword(e.target.value)}
              placeholder="Powtórz hasło"
            />
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Powtórz hasło
              </p>
              <button
                type="button"
                onClick={(e) => setPwdV(!pwdV)}
                className={
                  "text-black dark:text-white text-sm h-8 font-medium hover:text-blue-300 transition-colors duration-500 ease-in-out " +
                  (pwdV ? "text-blue-300" : "")
                }
              >
                {pwdV ? "Ukryj hasła" : "Pokaż hasła"}
              </button>
            </div>
          </div>
          {alert ? <Alert message={alertMessage} toggle={toggleAlert} /> : null}
          <div className="mt-3">
            <button
              className={
                "rounded-md block text-sm font-medium mt-2 h-10 px-4 w-full dark:text-black bg-black hover:bg-blue-300 text-white " +
                (loading
                  ? "bg-blue-300 dark:bg-blue-300"
                  : "dark:bg-white dark:hover:bg-blue-300")
              }
              type="submit"
              {...(loading ? { disabled: true } : "")}
            >
              {loading ? <LoadingSpinner /> : "Zarejestruj się"}
            </button>
          </div>
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
