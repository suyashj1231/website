export default function AboutMe() {
  return (
    <section id = "AboutMe" className="about--section" >
        <div className="about--section--img">
            <img src="./img/about-me.png" alt="AboutMe"/>
        </div>
        <div className="hero--section--content--box about--section--box">
            <div className="hero--section--content">
                {/* <p className="section--title">
                    About
                </p> */}
                <h1 className="skills-section--heading">
                    About Me
                </h1>
                <p className="hero--section-description">
                   Im a passionate and versatile full stack developer with a keen eye for creating seamless, end-to-end web solutions. With expertise in both front-end and back-end technologies, I bring ideas to life by crafting intuitive user interfaces and robust server-side applications. My commitment to clean, efficient code and continuous learning allows me to stay at the forefront of web development trends.
                </p>
                <p className="hero--section-description">
                   I thrive on turning complex problems into elegant solutions. Let's collaborate and bring your digital vision to reality!
                </p>                
            </div>
        </div>
    </section>
  );
}