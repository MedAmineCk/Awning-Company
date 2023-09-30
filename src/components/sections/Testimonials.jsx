import {AiFillStar} from "react-icons/ai";
import {FaQuoteLeft} from "react-icons/fa";
import comments from "../../data/Comments.js";

export const Testimonials = () => {
    return (
        <section className="testimonial highlight">
            <div className="section-container">
                <div className="section-label"><span>Testimonial</span></div>
                <p>Que dicen los clientes de mi</p>
                <div className="comments-container flex">
                    {comments.map(({id, name, comment, rating}) => (
                        <div className="comment-card" key={id}>
                            <div className="ratting">
                                <div className="icons">
                                    <div className="icon-container"><AiFillStar/></div>
                                    <div className="icon-container"><AiFillStar/></div>
                                    <div className="icon-container"><AiFillStar/></div>
                                    <div className="icon-container"><AiFillStar/></div>
                                    <div className="icon-container"><AiFillStar/></div>
                                </div>
                                {rating}
                            </div>
                            <div className="quote-icon">
                                <FaQuoteLeft/>
                            </div>
                            <p className="comment">{comment}</p>
                            <div className="commenter">- {name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}