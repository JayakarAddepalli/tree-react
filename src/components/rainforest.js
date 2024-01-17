import './rainforest.css';
import rainforestlogo from '../images/rainforestlogo.png';
import rainforesttrees from '../images/rainforesttrees.webp';
import rainforesttrees2 from '../images/rainforesttrees2.webp';
import earthlogo from '../images/earthlogo.webp';
import gradient from '../images/gradient.webp';
import whatsapp from '../images/whatsapp.png';
import netflix from '../images/netflix.png';
import Ecosia from '../images/ecosia-logotypus.com.svg';
import youtube from '../images/youtube.png';
import power from '../images/power.webp';
import iconchrome from '../images/iconchrome.png';
import bird from '../images/bird.mp4';
import Company from '../images/Company.svg';
import Privacy from '../images/privacy.svg';
import Transparent from '../images/transparent.svg';
import tolerance from '../images/zeroTolerance.svg';

function Rainforest(){

    function teroapp(){
        window.location.href = 'https://chromewebstore.google.com/detail/tero-save-trees-by-browsi/eghlkdfdlnnbkgclfbcbbiijjmggfgmm'
    }

    

    return(
        <div className='raidiv'>
            <div id='gradientimg'></div>
            <img src={rainforesttrees} className='rainforesttrees'></img>
            <img src={rainforesttrees2} className='rainforesttrees2'></img>
            <img src={rainforestlogo} className='rainforestlogo' id='leo'></img>
            <h2 id='rainh'>"Planting trees is good. Saving<br></br>existing forests is better."</h2>
            
            <div className='earthdiv'>
                <img src={earthlogo} id='earthlogoimg'></img>
                <div>
                    <div className='earthcards' id='edcd'>
                        <h3 className='earthcardsheads'>Protecting forests needs 30x less land to have the same climate mitigation outcome as planting trees.</h3>
                    </div>

                    <div className='earthcards' id='edcd2'>
                        <h3 className='earthcardsheads'>Preserving forests helps protect the thousands of species and local communities that depend on their natural resources.</h3>
                    </div>

                    <div className='earthcards' id='edcd3'>
                        <h3 className='earthcardsheads'>Forest conservation typically costs half as much as forest restoration efforts</h3>
                    </div>
                </div>
                <button onClick={teroapp}><img src={iconchrome} alt='chrome'></img>ADD TO CHROME <button>IT'S FREE</button></button>
            </div>
            <div className='powerofmany'>
                <h2>The power of the many.</h2>
                <p>If Tero were to grow to have the same number of users as...</p>
                <div>
                    <div>
                        <img src={whatsapp} alt='whatappslogo' id='wha'></img>
                        <h4>WhatsApp</h4>
                    </div>
                    <div>
                        <img src={netflix} alt='Netflixlogo' id='net'></img>
                    </div>
                    <div>
                        <img src={Ecosia} alt='Ecosialogo' id='eco'></img>
                    </div>
                    <div>
                        <img src={youtube} alt='youtubelogo' id='you'></img>
                        <h4>YouTube</h4>
                    </div>
                </div>
                <h1>25 billion trees<br></br>per month</h1>
                <img src={power} alt='powerlogo' id='power'></img>
            </div>
            <div className='videobird'>
                <div>
                    <h3><span style={{color: 'aqua', textShadow : 'none'}}>The Tree</span> represents<br></br>a better way of<br></br>doing things</h3>
                    <p>We make decissions based on the<br></br>greatest impact for the climate.<br></br>That's why...</p>
                </div>
                <video loop muted autoPlay>
                    <source src={bird}></source>
                </video>
            </div>
            <div className='gridsys'>
                <div>
                    <div>
                        <h3>We commit 80%<br></br>of our profits to<br></br>climate action.</h3>
                        <p className='paras'><a href=''>Here is why &rarr;</a></p>
                    </div>
                    <img src={Company} className='gridimgs'></img>
                </div>
                <div>
                    <img src={Privacy} className='gridimgs'></img>
                    <div>
                        <h3>We protect<br></br>rainforests and<br></br>your privacy.</h3>
                        <p className='paras'><a href=''>Here is how &rarr;</a></p>
                    </div>
                    
                </div>
                <div>
                    <div>
                        <h3>We have zero<br></br>tolerance for<br></br>greenwashing.</h3>
                        <p className='paras'><a href=''>Read our manifest &rarr;</a></p>
                    </div>
                    <img src={tolerance} className='gridimgs'></img>
                </div>
                <div>
                    <img src={Transparent} className='gridimgs'></img>
                    <div>
                        <h3>We're 100%<br></br>transparent on how<br></br>we invest money.</h3>
                        <p className='paras'><a href=''>Learn More &rarr;</a></p>
                    </div>
                </div>
            </div>
            <div id='gradientimg2'></div>
        </div>
    )
}

export default Rainforest;