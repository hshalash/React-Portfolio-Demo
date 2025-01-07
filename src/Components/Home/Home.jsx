import Style from '../Home/Home.module.css'
import pic from '../../assets/pic.svg'

export default function Home() {
  return (
    <div className={`${Style.bgGreen} d-flex justify-content-center align-items-center vh-100 flex-column text-white text-center`}>
      <div>
        <img src={pic} alt="home image" className={`${Style.homeImg}`} />
      </div>
      <div>
        <p className="text-uppercase fw-bolder h1 mt-3">Start Framework</p>
        <div className="my-3 d-flex justify-content-center align-items-center">
          <div className={`${Style.line} mx-1 bg-white`}></div>
          <i className="fa-solid fa-star mx-1"></i>
          <div className={`${Style.line} mx-1 bg-white`}></div>
        </div>
        <span>Graphic Artist - Web Designer - Illustrator </span>
      </div>
    </div>
  );
}
