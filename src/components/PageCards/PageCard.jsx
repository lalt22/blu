import { Link } from "react-router-dom";
import "./PageCard.scss";
const PageCard = ({pagename, pageDetails, pageRoute}) => {
    return (
        <div className="card">
            <Link to={pageRoute}>
                <h2>{pagename}</h2>
                <p>{pageDetails}</p>
            </Link>
        </div>
    )
}

export default PageCard;