import React from 'react'
import teachers from '../images/teachers.svg';
import community from '../images/community.svg';
import curriculum from '../images/curriculum.svg';

const Benefits = () => {
    return (
        <div className="container-fluid benefits-container">
                <h1><u>Benefits</u></h1>
                <div className="d-flex">
                    <div className="row pt-5 px-5 justify-content-between">
                        <div className="col-lg-3 card">
                            <img className="card-img-top" src={teachers} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Expert Teachers</h5>
                                <p className="card-text">Our instructors are more adept at monitoring student problems and assessing their level of understanding and progress, and they provide much more relevant, useful feedback.
                                We are experts in developing and testing hypotheses about learning difficulties or instructional strategies.</p>
                            </div>
                        </div> 
                        <div className="col-lg-3 card">
                            <img className="card-img-top" src={community} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Online Community</h5>
                                <p className="card-text">Feel like home, with a "family of invisible friends.</p>
                            </div>
                        </div> 
                        <div className="col-lg-3 card">
                            <img className="card-img-top" src={curriculum} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Flexible Curriculum</h5>
                                <p className="card-text">Our expert teachers design and curate the curriculum using best practices and careful consideration of how people learn and retain information with the ongoing tech trends in
                                the professional domain. We've debated every facet of our methodology, from the order in which to teach concepts, the analogies used to clarify them and how exercises should be structured to deliver 
                                the maximum educational punch.</p>
                            </div>
                        </div>
                    </div>    
                </div>
        </div>
            
    )
}

export default Benefits
