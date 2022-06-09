import React from 'react';
import './mywork.css'
import projectone from "../../assets/image 1.png"
import projecttwo from "../../assets/image 2.png"
import projectthree from "../../assets/image 3.png"
const Myworks = () => {
    return (
        <div className='mywork'>
            <div className='container'>
            <h2 className='mywork-heading text-center pb-5'>My work</h2>
            <div className='work-grid'>
                <div className="card" data-aos="fade-up" data-aos-duration="2000">
                    <img src={projectone} class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Parts Manufacturer</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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