import '../public/static/About.css';
import AboutTeam from './AboutTeam';
function About() {
  const aboutContent1="Our application helps by assisting farmers in identifying and detecting maize diseases more effectively to reduce the challenges faced due to loss in production.Our system can accurately detect early signs of diseases in maize crops, ensuring farmers to take timely action to prevent its widespread.";
  const aboutContent2="Our platform leverages advanced machine learning algorithms, specifically convolutional neural networks (CNN), to analyze images of maize plants and identify potential diseases. By providing real-time results, the system enables farmers to quickly assess the health of their crops, reducing the need for costly and time-consuming manual inspections. With an easy-to-use interface, the application ensures that farmers, even with limited technical expertise, can easily upload images and receive immediate feedback, empowering them to make informed decisions and protect their crops effectively."
  return (
    <>
    <div  className='about-page'>
    <div className='aboutcontent p-5'>
         <p>
           {aboutContent1}
         </p>
         <p>{aboutContent2}</p>
    </div>
    </div>
    <AboutTeam />
    </>
  )
}

export default About
