import HomePage from "./components/HomePage"

export default function App(){

    fetch('http://api.weatherapi.com/v1/forecast.json?key=b28574dd6599479e944222901212812&q=07083')
    .then((response) => response.json())
    .then((data) => console.log(data));

    return(
        <div>
            <HomePage/>
        </div>
    )
}