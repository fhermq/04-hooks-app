import { useState } from "react";

const colors = {
    red: 'bg-red-500 animated-pulse',
    yellow: 'bg-yellow-500 animated-pulse',
    green: 'bg-green-500 animated-pulse',
    // blue: 'bg-green-500 animated-pulse',
}

// type TrafficLightColor = 'red' | 'yellow' | 'green';
type TrafficLightColor = keyof typeof colors;

export const TrafficLight = () => {

    const [light, setLight] = useState<TrafficLightColor>('red');

    const handlerColorChange = (color: TrafficLightColor ) => {
        setLight((prevLight) => {
            // console.log({prevLight});
            return color;
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
            <div className="flex flex-col items-center space-y-8">
                <div className={`w-32 h-32 
                     ${light === 'red' ? colors[light] : 'bg-gray-500'}
                    rounded-full`}></div>
                <div className={`w-32 h-32 
                     ${light === 'yellow' ? colors[light] : 'bg-gray-500'}
                    rounded-full`}></div>
                <div className={`w-32 h-32
                     ${light === 'green' ? colors[light] : 'bg-gray-500'}
                    rounded-full`}></div>

                {/* Botón para cambiar el estado de la luz */}
                <div className="flex gap-2">
                    <button onClick={() => handlerColorChange('red')}
                        className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer">
                        Rojo
                    </button>
                    <button onClick={() => handlerColorChange('yellow')}
                        className="bg-yellow-500 text-white px-4 py-2 rounded-md cursor-pointer">
                        Amarillo
                    </button>
                    <button onClick={() => handlerColorChange('green')}
                        className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer">
                        Verde
                    </button>
                </div>
            </div>
        </div>
    );
};