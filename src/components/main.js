import './main.css';
import Greenimg from '../images/Greenimg.png';
import beautifulcloud from '../images/beautifulcloud.jpg';

import Nav from './nav';
import Treesimg from '../images/Treesimg.png';
import { type } from '@testing-library/user-event/dist/type';
import Save from './save';
import iconchrome from '../images/iconchrome.png';

function Main(){
    // let arr = ['red', 'blue']

    // const elementschange = ()=>{
        
        
    //     let mainele = document.getElementsByTagName('h1')[0];
    //     for(let i=0; i<arr.length; i++){
    //         if(i==arr.length){
    //             i=0
    //         }      
    //         mainele.style.color = arr[i]      
    //     }
    // }

    // const elementschangeout = ()=>{
    //     let mainele = document.getElementsByTagName('h1')[0];
    //         mainele.style.color = 'white';
    // }
    
    // let w = window.addEventListener('scroll',()=>{
    //     let ml = document.getElementById('mainlogo');
    //     let rec = ml.getBoundingClientRect();

    //     console.log(rec);

    //     if(rec.top >-450){
            
    //     }
        
    // })

    // let arr = ['', '', ''];
    // let c =0;
    // ()=>{
    //     img.src = arr[c]
    //     c += 1
    //     if(c == arr.length){
    //         c = 0;
    //     }
    // }

    let bd = document.body;

    bd.addEventListener('mouseenter',()=>{
 
        console.log(document.body.setPointerCapture);
    })


    let c= 0;

    setInterval(()=>{
        let NoTre = document.getElementById('NoTre');

        let n = 1989678;

        c += 1;
        n += c
        console.log(typeof(n));
        console.log(n);

        NoTre.textContent = n
        
    },5000)

    

    window.addEventListener('scroll',()=>{
        let NoTre = document.getElementById('NoTre');
        let recdea = NoTre.getBoundingClientRect().top;
        let divcard = document.getElementById('divcard');


        let Savetrees = document.getElementsByClassName('Savetrees')[0];
        let ST = Savetrees.getBoundingClientRect().top;
        let headsavetree = document.getElementById('headsavetree');
        let parasavetree = document.getElementById('parasavetree');

        let h41 = document.getElementById('h41');
        let h42 = document.getElementById('h42');
        let h43 = document.getElementById('h43');

        let cardparabtn = document.getElementsByClassName('cardparabtn')[0];
        let btn = document.getElementsByClassName('cardparabtn')[1];

        let cardparabtn2 = document.getElementsByClassName('cardparabtn1')[0];
        let btn2 = document.getElementsByClassName('cardparabtn1')[1];

        let cardparabtn3 = document.getElementsByClassName('cardparabtn2')[0];
        let btn3 = document.getElementsByClassName('cardparabtn2')[1];

        let marqeetag = document.getElementById('marqeetag');

        let raidiv = document.getElementsByClassName('raidiv')[0];
        let rectraidiv = raidiv.getBoundingClientRect().top;

        let leo = document.getElementById('leo');
        let rainh = document.getElementById('rainh');

        if(rectraidiv < 500){
            leo.style.animationName = 'rainforestani';
        }
        if(rectraidiv < 400){
            rainh.style.animationName = 'rainforestani';
        }

        if(recdea < 500){
            divcard.style.animationName = 'divcardani';
        }

        if(ST < 600){

            headsavetree.style.animationName = 'Savecardani';
            parasavetree.style.animationName = 'Savecardani';

        }
        if(ST < 350){
            h41.style.animationName = 'cardheadsani';
            h42.style.animationName = 'cardheadsani2';
            h43.style.animationName = 'cardheadsani3';
            cardparabtn.style.animationName = 'cardparbtn';
            btn.style.animationName = 'cardparbtn';

            cardparabtn2.style.animationName = 'cardparbtn';
            btn2.style.animationName = 'cardparbtn';

            cardparabtn3.style.animationName = 'cardparbtn';
            btn3.style.animationName = 'cardparbtn';
        }

        if(ST < 0){
            marqeetag.style.animationName = 'cardparbtn';
        }
        
        let earth = document.getElementById('earthlogoimg');
        let earthlog = earth.getBoundingClientRect().top;

        let earthcardsheads1 = document.getElementsByClassName('earthcardsheads')[0];
        let earthcardsheads2 = document.getElementsByClassName('earthcardsheads')[1];
        let earthcardsheads3 = document.getElementsByClassName('earthcardsheads')[2];


        if(earthlog < 250){
            earthcardsheads1.style.animationName = 'earthcardsh';
            earthcardsheads2.style.animationName = 'earthcardsh';
            earthcardsheads3.style.animationName = 'earthcardsh';

        }

        let videobird = document.getElementsByClassName('videobird')[0];
        let rectvideobird = videobird.getBoundingClientRect().top;

        // console.log(videobird.getBoundingClientRect());
        let paras = document.getElementsByClassName('paras')[0];
        let paras1 = document.getElementsByClassName('paras')[1];
        let paras2 = document.getElementsByClassName('paras')[2];
        let paras3= document.getElementsByClassName('paras')[3];


        if(rectvideobird < 300 ){
            paras.style.animationName = 'videobirdanime';
            paras1.style.animationName = 'videobirdanime';
            paras2.style.animationName = 'videobirdanime';
            paras3.style.animationName = 'videobirdanime';

        }
        
        let fot =document.getElementsByClassName('fot')[0];
        console.log(fot.getBoundingClientRect());
        let rectfot = fot.getBoundingClientRect().top;
        let fhead1 = document.getElementById('fhead1');
        let fsubhead = document.getElementById('fsubhead');
        let fsubhead1 = document.getElementById('fsubhead1');
        let subhead2  =document.getElementById('subhead2');
        let subpara2 = document.getElementById('subpara2');

        if(rectfot < 500){
            fhead1.style.animationName = 'fheadanime';
            fsubhead.style.animationName = 'fheadanime';
            fsubhead1.style.animationName = 'fheadanime';
            subhead2.style.animationName = 'fheadanime';
            subpara2.style.animationName = 'fheadanime';
        }

    })

    function teroapp(){
        window.location.href = 'https://chromewebstore.google.com/detail/tero-save-trees-by-browsi/eghlkdfdlnnbkgclfbcbbiijjmggfgmm'
    }


    
    return(
        <div className='main' >
            <div id='mainlogo'>
                <a href=''><img src={Greenimg} alt='logo'></img></a>
            </div>


            {/* <img src="https://wallup.net/wp-content/uploads/2019/09/890705-forest-trees-nature-landscape-tree-autumn.jpg" alt="trees"></img> */}
            {/* <img src="https://www.treehugger.com/thmb/43bMGC92CAEnbG0aNxUqEzcVSxE=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-740539247-54842381334d49cdbf3e5b83e795e242.jpg" alt="Trees"></img> */}
            {/* <img src='http://wallpup.com/wp-content/uploads/2013/03/Green-Trees-Wallpaper.jpg' alt='treeslogo' id='t'></img> */}
            <img src={beautifulcloud} id='t'></img>
            <div className='maintxt'>
                <div className='mainhead'>
                    <h2>you browse online</h2>
                    <h1 id='mainheading'>we save trees</h1>
                </div>
                <button onClick={teroapp}><img src={iconchrome} alt='chrome'></img> ADD TO CHROME</button>
                <h3 className='mhead3'>Help the planet in a free and easy way.</h3>
                <div className='mainsubhead'>
                    <div>
                        ⭐⭐⭐⭐⭐ <h4>100+ reviews</h4>
                    </div>
                    <h4>+20000 active users</h4>
                    <h5>Also available on 🌐 🌀</h5>
                </div>
                
            </div>
            <img src={Treesimg} alt='Treesweb' className='treesweb'></img>
            <div className='nootree'>
                <h2 id='NoTre'>1989678</h2>
                <p></p>
                <h5>____________</h5>
            </div>
        </div>

    )
}

export default Main;