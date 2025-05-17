import fileUploadIcon from '../images/fileUploadIcon.png';
import imageAnalysis from "../images/imageAnalysis.png";
import diseaseDetection from "../images/dieseaseDetection.png";
import recommendation from "../images/recommendation.png"
const workInfo = [
    {
        "header":"Upload an Image",
        "description":`Users can capture a photo of their maize plant
                    using their smartphone or upload an existing image.`,
         "src":fileUploadIcon
    },
    {
        "header":"Image Analysis",
        "description":`The system uses machine learning algorithms to analyze
                    the uploaded image, detecting signs of diseases like Stripe Downy
                    Mildew.`,
       "src":imageAnalysis
    },
    {
        "header":"Disease Detection results",
        "description":`The user receives an instant report detailing the identified diseases
                    (if any) and its severnity.`,
         "src":diseaseDetection
    },
    {
        "header":"Recommendations",
        "description":`The system provides actionable insights and preventive measures
                    including fungicide suggestions or cultural practices to manage the
                    disease.`,
         "src":recommendation
    },
]

export default workInfo