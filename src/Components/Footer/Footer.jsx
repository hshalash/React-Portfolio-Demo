import React from "react";
import Style from "../Footer/Footer.module.css"

export default function Footer() {
  return (
    <>
      <footer>
        <div className={`footer1 ${Style["bg-darkblue"]} p-5`}>
          <div className="container">
            <div className="row">
              <div className="col-md-4 text-white text-center">
                <div>
                  <h3>LOCATION</h3>
                  <p>2215 John Daniel Drive</p>
                  <span>Clark, MO 65243</span>
                </div>
              </div>
              <div className="col-md-4 text-white text-center">
                <div>
                  <h3>AROUND THE WEB</h3>

                  <div className="text-white">
                    <i
                      className={`${Style.cursor} fa-brands fa-facebook mx-2 fs-6 border rounded-circle p-2`}
                    ></i>
                    <i
                      className={`${Style.cursor} fa-brands fa-twitter mx-2 fs-6 border rounded-circle p-2`}
                    ></i>
                    <i
                      className={`${Style.cursor} fa-brands fa-linkedin mx-2 fs-6 border rounded-circle p-2`}
                    ></i>
                    <i
                      className={`${Style.cursor} fa-solid fa-globe mx-2 fs-6 border rounded-circle p-2`}
                    ></i>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-white text-center">
                <div>
                  <h3>ABOUT FREELANCER</h3>
                  <p>
                    Freelance is a free to use, licensed Bootstrap theme created
                    by Route
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`footer2 ${Style["bg-darkerblue"]}`}>
          <div className="text-center text-white py-3">
            <p>Copyright © Your Website 2021</p>
          </div>
        </div>
      </footer>
    </>
  );
}
