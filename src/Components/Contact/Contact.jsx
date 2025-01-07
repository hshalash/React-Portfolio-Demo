import Style from "../Contact/Contact.module.css";

export default function Contact() {
  return (
    <div className={`${Style.darkBlueText}bg-white pt-2 text-center`}>
      <div>
        <p className="text-uppercase fw-bolder h1 mt-3">Contact Section</p>
        <div className="my-3 d-flex justify-content-center align-items-center">
          <div className={`${Style.line} ${Style.darkBlueBG} mx-1`}></div>
          <i className="fa-solid fa-star mx-1"></i>
          <div className={`${Style.line} ${Style.darkBlueBG} mx-1`}></div>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center flex-column">
        <div className="w-50">
          <div className="form-floating mb-3">
            <input
              type="username"
              className={`form-control ${Style.formLayout}`}
              id="username"
              placeholder="Username"
            />
            <label className={`${Style.formLabel}`} htmlFor="username">Username</label>
          </div>
        </div>
        <div className="w-50">
          <div className="form-floating mb-3">
            <input
              type="number"
              className={`form-control ${Style.formLayout}`}
              id="userAge"
              placeholder="Age"
            />
            <label htmlFor="userAge">Age</label>
          </div>
        </div>
        <div className="w-50">
          <div className="form-floating mb-3">
            <input
              type="email"
              className={`form-control ${Style.formLayout}`}
              id="userEmail"
              placeholder="Email Address"
            />
            <label htmlFor="userEmail">Email Address</label>
          </div>
        </div>
        <div className="w-50">
          <div className="form-floating mb-3">
            <input
              type="password"
              className={`form-control ${Style.formLayout}`}
              id="userPassword"
              placeholder="Password"
            />
            <label htmlFor="userPassword">Password</label>
          </div>
        </div>
        <button className="btn btn-success mb-3">Send Message</button>
      </div>
    </div>
  );
}
