export default function HeroSection() {
    return (
        <section id = "heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="hero--section-description"> Hey, I am Suyash a</p> 
                    {/* Make a change here original line - <p className="section--title"> Hey, I am Suyash a</p>  */}
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">
                            Full Stack
                        </span>{" "}
                        <br />

                        Developer
                    </h1>
                    <p className="hero--section-description">
                    living in Irvine, California and a student at UC Irvine
                    <br /> Welcome to my portfolio, hope you enjoy your stay!  
                    </p>
                </div>
                {/* <button className="btn btn-primary">Get in Touch</button> */}
            </div>
            <div className="hero--section--img">
                <img src="./img/hero_img_me_2.png" alt="Hero Section" />
            </div>
        </section>
    )
}