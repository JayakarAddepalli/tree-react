import './footer.css';
import iconchrome from '../images/iconchrome.png';
import Treesimg from '../images/Greenimg.png';
import badge from '../images/badge.svg';
import rainforesttrees from '../images/rainforestlogo.png';
import instagram from '../images/instagramlogo.png';
import linkedin from '../images/linkedinlogo.png';
import discord from '../images/discord.png';
import nature from '../images/nature.mp4';

function Fotter(){

    function teroapp(){
        window.location.href = 'https://chromewebstore.google.com/detail/tero-save-trees-by-browsi/eghlkdfdlnnbkgclfbcbbiijjmggfgmm'
    }

    return(
        <div className="fot">
            <div id='footerhead'>
                <h1 id='fhead1'>Join 15 thousand people<br></br>saving rainforests for free</h1>
                <span style={{width:'fit-content', height:'fit-content', fontSize:'120px', fontWeight:'lighter', textShadow:'none'}} id='line'>|</span>
                <hr id='smline1'></hr>
                <div>
                    <h1 id='fsubhead'>10,341,999</h1>
                    <h4 id='fsubhead1'>Trees Saved by <span style={{color:'aqua', textShadow:'none'}}>The Tree</span> users</h4>
                </div>
            </div>
            <button onClick={teroapp}><img src={iconchrome} alt='chrome'></img>ADD TO CHROME <button>IT'S FREE</button></button>
            <hr id='smline2'></hr>
            <div id='footermain'>
                <div>
                    <h2 id='subhead2'>We’re redesigning the Internet<br></br>to reverse climate change</h2>
                    <p id='subpara2'>Because helping the planet and making a positive impact should be<br></br>free, easy, and accessible to everyone.</p>
                </div>
                <div>
                    <div>
                        <a href='' id='h'>HOME</a>
                        <a href=''>FAQ</a>
                    </div>
                    <div>
                        <a href='' id='y'>YOUR IMPACT</a>
                        <a href=''>BLOG</a>
                    </div>
                </div>
            </div>
            <div id='footerend'>
                <img src={Treesimg} alt='logo' id='logo'></img>
                <img src={badge} alt='badge' id='badge'></img>
                <img src={rainforesttrees} id='rainforestlogo'></img>
                <div>
                    <a href=''>Terms</a>
                    <a href=''>Privacy</a>
                    <a href=''>Contact</a>
                    <a href=''>&copy; 2023 The Tree</a>
                    <div>
                        <img src={instagram} alt='instagram'></img>
                        <img src={linkedin} alt='linkedin'></img>
                        <img src={discord} alt='frontendmentor'></img>
                    </div>
                </div>
                <video id='naturevd' loop autoPlay muted>
                    <source src={nature}></source>
                </video>
            </div>
        </div>
    )
}

export default Fotter;