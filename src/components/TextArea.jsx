import PropTypes from "prop-types";

function TextArea(props) {
    const {name, label, rows, cols, value, onChange} = props;
    return (
        <label>{label}<textarea
            name={name}
            rows={rows}
            cols={cols}
            value={value}
            onChange={onChange}
        ></textarea></label>
    );
}

TextArea.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    rows: PropTypes.number.isRequired,
    cols: PropTypes.number.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default TextArea;