import { useRef, useEffect, useState, CSSProperties } from 'react';
import ProgressBar from './components/ProgressBar';

const ProgressBarsContainer = () => {
    const [completed, setCompleted] = useState(0);
    const [status, setStatus] = useState({
        ui: 55,
        ux: 73,
        data: 31,
    });

    const projectData = [
        {bgColor: "#00A7FA", completed: status.ui},
        {bgColor: "#DE5ADB", completed: status.ux},
        {bgColor: "#FF136A", completed: status.data}
    ];

    const inputStyle = {
        width: 50,
        border: "none",
        outline: "none",
        textAlign: "center",
        borderBottom: "1px solid lightgray"
    } as CSSProperties;

    const uiInput = useRef(document.createElement("input"));

    useEffect(() => {
        uiInput.current?.focus();
        setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
    }, []);
    
    return (
        <div className='container container-sm mx-auto text-center'>
            <div className='title'>
                Progress Bar
            </div>
            <h2>Project status: </h2>
            <ul>
                <li>
                    UI status:{" "} 
                    <input 
                        type="number" 
                        style={inputStyle} 
                        value={status.ui} 
                        onChange={event => setStatus({...status, ui: parseInt(event.target.value)})}
                    />
                </li>
                <li>
                    UX status:{" "} 
                    <input 
                        type="number" 
                        style={inputStyle} 
                        value={status.ux} 
                        onChange={event => setStatus({...status, ux: parseInt(event.target.value)})}
                    />
                </li>
                <li>
                    Data status:{" "} 
                    <input 
                        type="number" 
                        style={inputStyle} 
                        value={status.data} 
                        onChange={event => setStatus({...status, data: parseInt(event.target.value)})}
                    />
                </li>
            </ul>
            {/* progress bars */}
            {projectData.map((data, idx) => (
                <ProgressBar key={idx}
                    bgColor={data.bgColor} 
                    completed={data.completed} 
                />
            ))}

            <ProgressBar
                bgColor={completed > 50 ? "#48EB12" :  "#fdd344"} 
                completed={completed} 
            />
        </div>
    );
};

export default ProgressBarsContainer;