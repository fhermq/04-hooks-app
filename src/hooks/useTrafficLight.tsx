import { useEffect, useState } from "react";


const colors = {
    red: 'bg-red-500 animated-pulse',
    yellow: 'bg-yellow-500 animated-pulse',
    green: 'bg-green-500 animated-pulse',
}

type TrafficLightColor = keyof typeof colors;


export const useTrafficLight = () => {

    const [light, setLight] = useState<TrafficLightColor>('red');
    const [countDown, setCountDown] = useState(5);

    //useEffect para el countdown.
    useEffect(() => {
        // console.log({countDown});
        if (countDown === 0) return;

        const intervalId = setInterval(() => {
            // console.log('setInterval llamado');
            setCountDown(prev => prev - 1);
        }, 1000);

        return () => {
            // console.log('Clean up Effect');
            clearInterval(intervalId);
        }

    }, [countDown]);

    // useEffect Change light color effect.
    useEffect(() => {
        if (countDown > 0) return;

        setCountDown(5);
        if (light === 'green') {
            setLight('yellow');
            return;
        }

        if (light === 'yellow') {
            setLight('red');
            return;
        }

        if (light === 'red') {
            setLight('green');
            return;
        }

        return () => {
            console.log('Clean up Effect');
        }
    }, [countDown, light]);

    return {
        //Properties or const
        countDown,
        colors,
        light,

        //Computed
        percentage: (countDown / 5) * 100,
        greenlight: light === 'green' ? colors.green : 'bg-gray-500',
        yellowlight: light === 'yellow' ? colors.yellow : 'bg-gray-500',
        redlight: light === 'red' ? colors.red : 'bg-gray-500',

        //Methods or functions
    }

}