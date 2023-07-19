import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";

type LazyLoadPostProps = {
    img: string,
    title: string
};

const LazyLoadPost = ({ title, img }: LazyLoadPostProps) : JSX.Element => {
  return (
    <div>
        <div className="card">
            <LazyLoadImage src={img} 
                                className="card-img-top" 
                                effect="blur" 
                                alt="" />
            <div className="card-body">
                <div className="text-section">
                    <h5 className="card-title fw-bold">{title}</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                </div>
                <div className="btn-section">
                    <a href="#" className="btn btn-primary"> Go somewhere</a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default LazyLoadPost;