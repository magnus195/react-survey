import PropTypes from "prop-types";

function TextField(props) {
    const {name, label, value, onChange} = props;
    return (
        <label>{label}<input type={"text"} name={name} value={value} onChange={onChange}></input></label>
    );
}

TextField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default TextField;