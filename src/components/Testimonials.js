import React from 'react'

const Testimonials = () => {
    return (
        <div className="container-fluid testimonials-container">
            <h1><u>Testimonials</u></h1>
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol> 
                <div class="carousel-inner">
                    <div class="item carousel-item active">
                        <div class="img-box"><img src="https://i.imgur.com/Ur43esv.jpg" alt="" /> /</div>
                        <p class="testimonial">Working with TEN as a digital marketing intern has been a great experience. I learnt a lot of new stuff and worked on different tasks which helped me understand the marketing field better.</p>
                        <p class="overview"><b>Harsh Rajput</b>General Management Intern</p>
                        <div class="star-rating"> </div>
                    </div>
                    <div class="item carousel-item">
                        <div class="img-box"><img src="https://i.imgur.com/8RKXAIV.jpg" alt="" /></div>
                        <p class="testimonial">I thoroughly enjoyed my internship during this pandemic situation and gained valuable experience under my belt. I know this internship will be instrumental in getting myself a job and it would be glowing reference on my CV.</p>
                        <p class="overview"><b>Kshema Unni</b>Business Development Intern</p>
                        <div class="star-rating"> </div>
                    </div>
                    <div class="item carousel-item">
                        <div class="img-box"><img src="https://i.imgur.com/J6l19aF.jpg" alt="" /></div>
                        <p class="testimonial">Working with TEN is a great opportunity for the students who want to extend their career in digital marketing!</p>
                        <p class="overview"><b>Aakriti Malik</b>DM Intern</p>
                        <div class="star-rating"> </div>
                    </div>
                </div> <a class="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev"> <i class="fa fa-angle-left"></i> </a> <a class="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next"> <i class="fa fa-angle-right"></i> </a>
            </div>
        </div>
    )
}

export default Testimonials
