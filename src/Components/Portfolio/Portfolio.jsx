import { useState } from "react";
import black_img from "../../assets/black.png";
import blue_img from "../../assets/blue.png";
import pink_img from "../../assets/pink.png";
import Style from "../Portfolio/Portfolio.module.css";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeOverlay = () => {
    setSelectedImage(null);
  };

  const images = [{ src: pink_img }, { src: blue_img }, { src: black_img }];

  const repeatedImages = [...images, ...images];

  return (
    <div
      className={`${Style.darkBlueText}bg-white d-flex justify-content-center pt-2 text-center`}
    >
      <div>
        <p className="text-uppercase fw-bolder h1 mt-3">portfolio component</p>
        <div className="my-3 d-flex justify-content-center align-items-center">
          <div className={`${Style.line} ${Style.darkBlueBG} mx-1`}></div>
          <i className="fa-solid fa-star mx-1"></i>
          <div className={`${Style.line} ${Style.darkBlueBG} mx-1`}></div>
        </div>
        <div className={`${Style.portfolioElements} mb-3`}>
          <div className="container">
            <div className="row g-5">
              {repeatedImages.map((image, index) => (
                <div key={index} className="col-md-4">
                  <div className="position-relative">
                    <img src={image.src} className={`rounded-3 w-100`} />
                    <div
                      className={`${Style.layer} position-absolute top-0 start-0 bottom-0 end-0 rounded-3 d-flex justify-content-center align-items-center text-white fs-1`}
                      onClick={() => handleImageClick(image.src)}
                    >
                      <i className="fa-solid fa-plus"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/*------------ Overlay ------------*/}
            {selectedImage && (
              <div
                className={`${Style.boxContainer} top-0 bottom-0 end-0 start-0 position-fixed d-flex justify-content-center align-items-center`}
                onClick={closeOverlay}
              >
                <div
                  className={`${Style.boxItem} d-flex align-items-center justify-content-between`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <img src={selectedImage} className="rounded-3" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
