import React from 'react'
import './Home.css'
// import hero from '../pic/hero.png'
import ihsan from '../pic/profile.png'
import skill1 from '../pic/skill1.png'
// import skill2 from '../pic/skill2.png'
import skill2 from '../pic/github-icon-4.jpg'
import skill3 from '../pic/skill3.png'
import { Typewriter } from 'react-simple-typewriter'


const Home = () => {



       const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'ihsan resume.pdf'; // Replace with the actual path to your PDF file
        link.download = 'ihsan resume.pdf'; // Specify the download file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    


  return (
    <>
      <section className="hero" id='home'>
        <div className="container f_flex top">
            <div className="left top">
                <h3>WELCOME TO MY WORLD</h3>
                <h1>
                    Hi, I'm <span>Ihsan Ullah</span>
                </h1>
                <h2>
                    a <span>   
                       <Typewriter words={['MERN Stack Developer', 'Professional Coder','developer']} loop={[]} cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} /></span>
                </h2>
                 
             {/* Download button  */}

             <button className='download_btn' onClick={handleDownload}>Download CV</button>
            

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cum numquam ducimus similique voluptas ipsam ad dolorum? Tenetur, vel? Suscipit.</p>
                <div className="hero_btn d_flex">
                    <div className="col_1">
                        <h4>FIND WITH ME</h4>
                        <div className="button">
                         <button className="btn_shadow">
                          <a href="https://www.facebook.com/profile.php?id=100008343704066" target="_blank" without rel="noreferrer" > <i className="fab fa-facebook-f"></i></a>
                            </button>
                            <button className="btn_shadow">
                                {/* <a href="https://www.instagram.com/ihsan_mohmand.110/" target='_blank'><i className="fab fa-instagram"></i></a> */}
                                <a href="https://twitter.com/Ihsanmohmand17" target="_blank"  without rel="noreferrer" > <i className='fab fa-twitter'></i></a>
                            </button>
                            <button className="btn_shadow">
                                <a href="https://www.linkedin.com/in/ihsan-mohmand-4438b1254/" target='_blank'  without rel="noreferrer" ><i className="fab fa-linkedin-in"></i></a>
                            </button>
                        </div>
                    </div>

                    <div className="col_1">
                        <h4>BEST SKILL ON</h4>
                        <button className="btn_shadow">
                              <img src={skill1} alt="" />
                        </button>
                        <button className="btn_shadow">
                              <img src={skill2} alt="" />
                        </button>
                        <button className="btn_shadow">
                              <img src={skill3} alt="" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="right">
                <div className="right_img">
                    {/* <img src={hero} alt="" /> */}
                    <img src={ihsan} alt="" />
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Home
