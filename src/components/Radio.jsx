import PropTypes from "prop-types";

function Radio(props) {
    const { name, options, value, onChange } = props;
    let radioElements = [];

    options.map((option, i) => {
        const id = `radio-${name}-${i}`;

        radioElements.push(
            <li>
                <input type="radio" id={id} name={name} value={option.value} checked={value === option.value} onChange={onChange} />
                <label for={id}>{option.label}</label>
            </li>
        );
    });

    return (
        <ul>
            {radioElements}
        </ul>
    );
}

Radio.propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
    })).isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Radio;