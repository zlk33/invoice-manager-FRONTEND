import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white w-screen h-screen">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          404 | Nie znaleziono
        </h1>
        <p className="my-2 max-w-[600px] text-center text-gray-500 md:text-xl dark:text-gray-400">
          Przepraszamy, nie możemy znaleźć strony której szukasz.
        </p>
        <Link
          to="/"
          className="inline-flex h-10 items-center justify-center rounded-md px-8 bg-blue-300 font-semibold uppercase dark:text-black hover:bg-blue-200 transition-colors duration-500 ease-in-out"
        >
          Wróć do strony głównej
        </Link>
      </div>
    </div>
  );
}
export default NotFound;
