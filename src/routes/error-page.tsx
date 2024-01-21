import { useRouteError } from "react-router-dom";

import mochi_work from "../resources/mochi_work.gif"

import "../styles/error.css";

export default function ErrorPage() {
  const error = useRouteError() as any;
  console.error(error);

  return (
    <div className="error-container flex flex-row place-content-center">
      <div id="error-page" className="place-content-center flex flex-col">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
      <div id="error-img" className="place-content-center flex flex-col">
        <img src={mochi_work} alt="Jay working hard"></img>
      </div>
    </div>
  );
}