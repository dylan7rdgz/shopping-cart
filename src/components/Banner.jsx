import "../component-styles.css";

function Banner({ text, color }) {
    return (
        <h3 className={`banner banner-${color}`}>{text}</h3>
    );
}

export default Banner;