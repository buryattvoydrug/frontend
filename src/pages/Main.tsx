import { useEffect } from "react";
import { Link } from "react-router-dom";
import BigBanners from "../components/BigBanners";
import Footer from "../components/Footer";
import Hits from "../components/Hits";
import MainHeader from "../components/MainHeader";
import MainSlider from "../components/MainSlider";
import Partners from "../components/Partners";
import Preferences from "../components/Preferences";

export default function Main() {
    
  return (
    <>
      <div className="main">
            <section className="intro-section bg-grey">
                <div className="container">
                    <div className="intro-wrapper pt-4">
                        <div className="row">
                            <MainSlider/>
                            <Hits/>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container mb-10 pb-2">
                <Preferences/>
                <BigBanners />
            </div>
            <section className="grey-section pt-10" style={{borderTop: "2px solid #fa0000"}}>
                <Partners />
            </section>
        </div>
    </>
  )
};
