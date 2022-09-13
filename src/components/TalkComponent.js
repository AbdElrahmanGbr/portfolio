import {Link} from "react-router-dom";

const TalkComponent = () => {
    return (
        <section className="flex justify-between items-center">
            <h3 className="middle-title">Interested in doing a project together?</h3>
            <div className="border h-0 w-1/4 bg-[#E5E7EB] tablet:w-1/2"></div>
            <Link className="button button-contact" to="/contact">CONTACT ME</Link>
        </section>
    );
}

export default TalkComponent;