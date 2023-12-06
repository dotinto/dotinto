import { useEffect } from 'react';
import './loader.css';

function Loader() {
    useEffect(() => {
        window.onload = () => {
            document.querySelector('div.loader')?.classList.add("hide-loader-animation");
            setTimeout(() => {
                document.querySelector("div.loader")?.classList.add("hidden")
            }, 1300)
        }
    })
    return (
        <div className="loader">
            <span className="loader"></span>
        </div>
    )
}

export default Loader;