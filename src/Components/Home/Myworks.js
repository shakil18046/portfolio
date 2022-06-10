import React from 'react';
import './mywork.css'
import projectone from "../../assets/image 1.png"
import projecttwo from "../../assets/image 2.png"
import projectthree from "../../assets/image 3.png"
const Myworks = () => {
    return (
        <div className='mywork'>
            <div className='container'>
            <h2 className='mywork-heading text-center pb-5'>My <span className='heading-color'>work</span></h2>
            <div className='work-grid'>
                <div className="card" data-aos="fade-up" data-aos-duration="2000">
                    <img src={projectone} class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Parts Manufacturer</h5>
                        <p className="card-text pb-4">this is a parts manufacturer website. I have implement firebase authentication system. product load via mongodb and i make dashboard. User can see their order product and admin can update product quantity</p>
                        <a href="https://assignment-twelve-ac886.web.app/" target="_blank" className="btn btn-primary mb-2">View Project</a>
                        <br></br>
                        <a href="https://github.com/shakil18046/parts-manufacturer" target="_blank" className="btn btn-primary mb-2">client site Code</a>
                        <br></br>
                        <a href="https://github.com/shakil18046/parts-manufacturer-server" target="_blank" className="btn btn-primary mb-2">Server site Code</a>
                    </div>
                </div>
                <div className="card" data-aos="fade-down" data-aos-duration="2000">
                    <img src={projecttwo} class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Fresh food</h5>
                        <p className="card-text pb-4">I have implemented an authentication system using firebase code. Designed many components, and also worked on reusable. User can update their product quantity after login and one more important thing is users can add
products. And this data is stored on the MongoDB server</p>
                        <a href="https://assignment-eleven-47636.web.app/" target="_blank" className="btn btn-primary mb-2">View Project</a>
                        <br></br>
                        <a href="https://github.com/shakil18046/wareHouse-product-management" target="_blank" className="btn btn-primary mb-2">client site Code</a>
                        <br></br>
                        <a href="https://github.com/shakil18046/warehouse-product-management-server" target="_blank" className="btn btn-primary mb-2">Server site Code</a>
                    </div>
                </div>
                <div className="card" data-aos="fade-up" data-aos-duration="2000">
                    <img src={projectthree} class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Gym trainer</h5>
                        <p className="card-text pb-4">I have implemented an authentication system using firebase. If a user wants to take a service, he needs to sign up or log in first. After login user can visit the protected route</p>
                        <a href="https://gym-trainer-4e31f.web.app/" target="_blank" className="btn btn-primary mb-2">View Project</a>
                        <br></br>
                        <a href="https://github.com/shakil18046/gym-trainer" target="_blank" className="btn btn-primary mb-2">client site Code</a>
                       
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Myworks;