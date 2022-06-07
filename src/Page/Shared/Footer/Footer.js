import React from 'react';
import linkedin from '../../../Image/footer img/linkdin.png';
import github from '../../../Image/footer img/github.png';
import facebook from '../../../Image/footer img/facebook.png';
import { Link } from 'react-router-dom';

// import footer from '../../assets/images/footer.png';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-slate-100 text-base-content rounded">
            <div className="grid grid-flow-col text-xl gap-4">
                <Link to='/products' className="link link-hover">Products</Link>
                <Link to='/review' className="link link-hover">Review</Link>
                <Link to='/blog' className="link link-hover">Blog</Link>
                <Link to='/portfolio' className="link link-hover">Portfolio</Link>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a href='https://github.com/rakips' target='blank' ><img width="30" height="30" src={github} alt="" /></a>

                    <a href='
                    https://app.netlify.com/teams/rakips' target='blank' ><img width="30" height="30" src={linkedin} alt="" /></a>

                    <a href='https://www.facebook.com/profile.php?id=100041548471306/' target='blank' ><img width="30" height="30" src={facebook} alt="" /></a>

                </div>
            </div>
            <div>
                <p>Copyright © 2022 - All right reserved by <span className='font-bold'>KHAN' CAM</span></p>
            </div>
        </footer >
    );
};

export default Footer;