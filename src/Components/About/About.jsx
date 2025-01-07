import Style from '../About/About.module.css'
export default function About() {
  return (
    <div>
      <div className={`about-content ${Style.bgGreen} d-flex justify-content-center align-items-center flex-column text-white`}>
        <div>
          <p className="text-uppercase fw-bolder h1 text-center">
            about component{" "}
          </p>
          <div className="my-3 d-flex justify-content-center align-items-center">
            <div className={`${Style.line} mx-1`}></div>
            <i className="fa-solid fa-star mx-1"></i>
            <div className={`${Style.line} mx-1`}></div>
          </div>
          <div className="container">
            <div className="row d-flex px-5 justify-content-center align-items-center">
              <div className="col-md-6">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </div>
              <div className="col-md-6">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
