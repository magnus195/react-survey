import PropTypes from "prop-types";
import Radio from "./Radio.jsx";

function Checkbox(props) {
    const {id, name, checked, label, onChange} = props;
    return (
        <li>
            <label><input id={id} name={name} type="checkbox" checked={checked} onChange={onChange}/>{label}</label>
        </li>
    );
}

Radio.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Checkbox;