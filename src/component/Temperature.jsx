import React, { useState , useEffect} from 'react'

const Temperature = () => {
  const [temperature, setTemperature] = useState(0);
  const [tempColor, setTempColor] = useState("zero");

  useEffect(() => {
    if (temperature < 0) {
      setTempColor('freezing');
    } else if (temperature >= 0 && temperature <= 10) {
      setTempColor('cold');
    } else if (temperature >= 11 && temperature <= 20) {
      setTempColor('cool');
    } else if (temperature >= 21 && temperature <= 30) {
      setTempColor('warm');
    } else if (temperature > 30) {
      setTempColor('hot');
    }
    }, [temperature] );

    const tempIncrease = () =>{
      setTemperature(temperature + 1);
      if(temperature == 35){
        setTemperature(temperature);
      }
    };

    const tempDecrease = () =>{
      setTemperature(temperature - 1);
      if(temperature == -10){
        setTemperature(temperature);
      }
    };

    return (
      <div className='appContainer'>
        <div className={`appDisplay ${tempColor}`}>
          {temperature}°C
        </div>
        <div className='appBtn'>
          <button className='subBtn' onClick={tempDecrease}>-</button>
          <button className='addBtn' onClick={tempIncrease}>+</button>
        </div>
      </div>
    );
}

export default Temperature