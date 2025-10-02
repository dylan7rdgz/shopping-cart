import "../component-styles.css";
import { useNavigate } from "react-router";

function DropDown({ dropDownItem, dropDownList}) {
    const navigate = useNavigate();
    return (
        <details className="dropdown-list">
        <summary>{dropDownItem}</summary>
            <ul>
                {dropDownList.map((e, i) => 
                    <li key={i}>
                        <button onClick={() => navigate(e.url)}>{e.itemName}</button>
                    </li>
                )}
            </ul>
        </details>
    )
}

export default DropDown;