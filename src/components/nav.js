import './nav.css';
import Green from '../images/Green.png';


function Nav(){

    window.addEventListener('scroll',()=>{
        let nav = document.getElementsByTagName('nav')[0];

        let mainheading = document.getElementById('mainheading');


        let navrec = mainheading.getBoundingClientRect();
        // console.log(Math.floor(navrec.top));
        if(0 > navrec.top){
            console.log('true');
            nav.style.display = 'block';
            nav.style.display = 'flex';
            nav.style.justifyContent = 'space-between';
            nav.style.alignItems = 'center';
            nav.style.position = 'fixed';
            nav.style.top = Math.floor(navrec.top);
            nav.style.left = 0;
            nav.style.right = 0;
        }
        else{
            nav.style.display = 'none';
        }
    })

    function download(){
        window.location.href = 'https://chromewebstore.google.com/detail/tero-save-trees-by-browsi/eghlkdfdlnnbkgclfbcbbiijjmggfgmm';
    }

    return(
        <div>
            <nav>
                <img src={Green} alt="Clogo"></img>
                <button onClick={download}>Download Now</button>
            </nav>
        </div>
    )
}

export default Nav;