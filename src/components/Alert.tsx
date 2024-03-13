import { ErrorIcon, CloseIcon, SuccesIcon } from "../components/Icons";
import { Link } from "react-router-dom";
function Alert(props: {
  message: string;
  toggle: () => void;
  mail?: boolean;
  type?: string;
}) {
  if (props.type === "success") {
    return (
      <div className="flex items-center justify-between p-4 my-2 text-sm text-green-800 bg-green-100 dark:bg-green-200 rounded-lg ">
        <div className="mr-2">
          <SuccesIcon className="h-5 w-5" />
        </div>
        <span>{props.message} </span>

        <button className="ml-auto" onClick={props.toggle} aria-label="Close">
          <CloseIcon className="w-5 h-5" />
        </button>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-between p-4 my-2 text-sm text-red-700 bg-red-100 dark:bg-red-200 dark:text-red-800 rounded-lg ">
      <div className="mr-2">
        <ErrorIcon className="h-5 w-5" />
      </div>
      <span>
        {props.message}{" "}
        {props.mail ? (
          <Link className="font-medium underline" to="/resendemail">
            Wyślij ponownie
          </Link>
        ) : null}
      </span>

      <button className="ml-auto" onClick={props.toggle} aria-label="Close">
        <CloseIcon className="w-5 h-5" />
      </button>
    </div>
  );
}
export default Alert;
