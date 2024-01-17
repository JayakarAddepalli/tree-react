import './award.css';

function Award(){
    return(
        <div className='awardcard' id='AWARDS'>
            <div id='divcard'>
                <h1>An Award-Winning Climate Startup</h1>
                <div id='awards'>
                    <figure>
                        <img src="https://www.jointero.org/_next/static/media/hatchColab.9b88145e.webp" alt=""></img>
                        <figcaption><span className='figcaptionhead'>Finalist</span></figcaption>
                        <figcaption className='figsub'>Social Tech Accelerator</figcaption>
                    </figure>
                    <figure>
                        <img src="https://www.jointero.org/_next/static/media/jacobs.8003a6e0.webp" alt="" id='jacobsC'></img>
                        <figcaption><span className='figcaptionhead'>Finalist</span></figcaption>
                        <figcaption className='figsub'>Jacobs Startup Competition</figcaption>
                    </figure>
                    <figure>
                        <img src="https://www.jointero.org/_next/static/media/ie.a2ff0af6.webp" alt="" id='SusC'></img>
                        <figcaption><span className='figcaptionhead'>Winner</span></figcaption>
                        <figcaption className='figsub'>Sustainable Entrepreneurship</figcaption>
                    </figure>
                    <figure id='sacn'>
                        <img src="https://www.jointero.org/_next/static/media/santanderx.3fc3cd76.webp" alt=""></img>
                        <figcaption><span className='figcaptionhead'>Participant</span></figcaption>
                        <figcaption className='figsub'>Young People With Solutions</figcaption>
                    </figure>
                </div>
            </div>
            {/* <div id='midator'>
                
            </div> */}
        </div>
    )
}

export default Award;