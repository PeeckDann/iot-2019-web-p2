import {CustomSelect} from "../Components.styled/Select.styled";

function Select({options, state: [value, setValue] }) {
    return (
        <CustomSelect name="filter" value={value} onChange={e => setValue(e.target.value)}>
            <option value="None">Default</option>
                {options.map((thisOption) =>
                    <option key={thisOption} value={thisOption}>{thisOption}</option>
                )}
        </CustomSelect>
    );
}

export default Select;