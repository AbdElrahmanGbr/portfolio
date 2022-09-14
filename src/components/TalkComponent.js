import {Link} from "react-router-dom";

const TalkComponent = () => {
    return (
        <section className="flex flex-col justify-between items-center tablet:flex-row my-10 text-center">
            <h3 className="middle-title w-full tablet:w-1/2">Interested in doing a project together?</h3>
            <div className="border tablet:flex hidden h-0 w-1/2"></div>
            <Link className="button button-contact" to="/contact">CONTACT ME</Link>
        </section>
    );
}

export default TalkComponent;