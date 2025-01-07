import Style from '../NotFound/NotFound.module.css'

export default function NotFound() {
  return (
    <div className={`${Style.spacing} d-flex justify-content-center align-items-center flex-column`}>
      <h1 className="fw-bolder">Error 404</h1>
      <h3>Page not found!</h3>
    </div>
  );
}
