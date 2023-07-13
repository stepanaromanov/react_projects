const containerStyles = {
    height: 25,
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50,
    width: "100%"
};

const labelStyles = {
    padding: 15,
    margin: 10,
    color: "#fff",
    fontWeight: "bold",
};

type ProgressBarProps =  {
    bgColor: string,
    completed: number
};

const ProgressBar = ({ bgColor, completed }: ProgressBarProps) => {
    const fillerStyles = {
        backgroundColor: `${bgColor}`,
        height: "100%",
        width: `${completed}%`,
        borderRadius: "inherit",
        textAlignment: "right",
        transition: "width 1s ease-in-out"
    };

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>{`${completed}%`}</span>
            </div>
        </div>
    );
};

export default ProgressBar;