import AboutSec from './AboutSec/AboutSec';
import Banner from './Banner/Banner';
import './Home.css'
import Tea from './Tea/Tea';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='homeContent overflow-hidden'>
                <Tea></Tea>
                <AboutSec></AboutSec>
            </div>
        </div>
    );
};

export default Home;