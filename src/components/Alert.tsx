import { ErrorIcon, CloseIcon } from "../components/Icons";
function Alert(props: { message: string; type: string; toggle: () => void }) {
  return (
    <div className="flex items-center p-4 text-sm text-red-700 bg-red-100 border-red-500 dark:bg-red-200 dark:text-red-800 rounded-lg ">
      <ErrorIcon className="h-5 w-5 mr-2" />
      <span>{props.message}</span>
      <button className="ml-auto" onClick={props.toggle} aria-label="Close">
        <CloseIcon className="w-5 h-5" />
      </button>
    </div>
  );
}
export default Alert;
