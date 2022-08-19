function PersonCard(props) {
    const { data } = props;
    const style = {
        color : "white",
        backgroundColor : "black"
    };
    return (
        <div style={ style } >
            <h3>{props.data.name } ({data.grade }) </h3>
            <p style={ {textAlign : "right"} }>
                HP : {data.hp} // E-Mail : {data.email }
            </p>
        </div>
    );
}

export default PersonCard;  // module.exports = PersonCard