/** @format */

import React from 'react';

export default function Footer() {
	return (
		<div className='container-fluid text-center bg-secondary-subtle p-0' style={{marginTop:'150px',marginLeft:'0px',marginRight:'0px'}}>
			<div class='row row-cols-2 row-cols-lg-4 g-5 g-lg-5 m-0 p-3'  >
				<div class='col'>
					<div class='p-3 bg-body-secondary d-flex flex-column jusitfy-content-center m-0 p-0'>
						<h1 class='fs-4'>Social media</h1>
						<ul class='list-group list-group-flush shadow border-5 border-top border-bottom border-white'>
							<li class='text-dark text-start ms-3 fs-5' style={{listStyle:'none'}}><a href='#' className='hoverColor' style={{textDecoration:'none'}}>Instagram</a></li>
							<li class='text-dark text-start ms-3 fs-5' style={{listStyle:'none'}}><a href='#' className='hoverColor' style={{textDecoration:'none'}}>Facebook</a></li>
							<li class='text-dark text-start ms-3 fs-5' style={{listStyle:'none'}}><a href='#' className='hoverColor' style={{textDecoration:'none'}}>YouTube</a></li>
							<li class='text-dark text-start ms-3 fs-5' style={{listStyle:'none'}}><a href='#' className='hoverColor' style={{textDecoration:'none'}}>SnapChat</a></li>
							<li class='text-dark text-start ms-3 fs-5' style={{listStyle:'none'}}><a href='#' className='hoverColor' style={{textDecoration:'none'}}>Linkdin</a></li>
						</ul>
					</div>
				</div>
				<div class='col'>
					<div class='p-3 bg-body-secondary'>
                    <h1 class='fs-4'>MY Learnings</h1>
						<ul class='list-group list-group-flush shadow border-5 border-top border-bottom border-white'>
							<li class='text-dark text-start ms-3 fs-5' style={{listStyle:'none'}}><a href='#' className='hoverColor' style={{textDecoration:'none'}}>Java</a></li>
							<li class='text-dark text-start ms-3 fs-5' style={{listStyle:'none'}}><a href='#' className='hoverColor' style={{textDecoration:'none'}}>Python</a></li>
							<li class='text-dark text-start ms-3 fs-5' style={{listStyle:'none'}}><a href='#' className='hoverColor' style={{textDecoration:'none'}}>Javascript</a></li>
							<li class='text-dark text-start ms-3 fs-5' style={{listStyle:'none'}}><a href='#' className='hoverColor' style={{textDecoration:'none'}}>Php</a></li>
							<li class='text-dark text-start ms-3 fs-5' style={{listStyle:'none'}}><a href='#' className='hoverColor' style={{textDecoration:'none'}}>Database</a></li>
						</ul>
                    </div>
				</div>

				<div class='col'>
					<div class='p-3 bg-body-secondary'>
                    <h1 class='fs-4'>MY Certification</h1>
						<ul class='list-group list-group-flush shadow border-5 border-top border-bottom border-white'>
							<li class='text-dark text-start ms-3 fs-5' style={{listStyle:'none'}}><a href='#' className='hoverColor' style={{textDecoration:'none'}}>Hacker Rank</a></li>
							<li class='text-dark text-start ms-3 fs-5' style={{listStyle:'none'}}><a href='#' className='hoverColor' style={{textDecoration:'none'}}>Great Learning</a></li>
							<li class='text-dark text-start ms-3 fs-5' style={{listStyle:'none'}}><a href='#' className='hoverColor' style={{textDecoration:'none'}}>Infosys</a></li>
							<li class='text-dark text-start ms-3 fs-5' style={{listStyle:'none'}}><a href='#' className='hoverColor' style={{textDecoration:'none'}}>ShapMySkill</a></li>
							<li class='text-dark text-start ms-3 fs-5' style={{listStyle:'none'}}><a href='#' className='hoverColor' style={{textDecoration:'none'}}>Microsoft Azure</a></li>
						</ul>
                    </div>
				</div>
				<div class='col'>
					<div class='p-3 bg-body-secondary'>
                    <h1 class='fs-4'>About Us</h1>
						<ul class='list-group list-group-flush shadow border-5 border-top border-bottom border-white'>
							<li class='text-dark text-start ms-3 fs-5' style={{listStyle:'none'}}><a href='#' className='hoverColor' style={{textDecoration:'none'}}>My thought is</a></li>
							<li class='text-dark text-start ms-3 fs-5' style={{listStyle:'none'}}><a href='#' className='hoverColor' style={{textDecoration:'none'}}>Your keep it simple.</a></li>
							<li class='text-dark text-start ms-3 fs-5' style={{listStyle:'none'}}><a href='#' className='text-dark text-start ms-3 fs-5' style={{textDecoration:'none'}}>Address</a></li>
							<li class='text-dark text-start ms-3 fs-5' style={{listStyle:'none'}}><a href='#' className='hoverColor' style={{textDecoration:'none'}}>Nagra, Ballia Uttar pradesh</a></li>
							<li class='text-dark text-start ms-3 fs-5' style={{listStyle:'none'}}><a href='#' className='hoverColor' style={{textDecoration:'none'}}>pincode: 221711</a></li>
						</ul>
                    </div>
				</div>
			</div>
            <div className='row m-0 p-0'>
                <div className='d-flex justify-content-center align-items-center text-dark bg-dark-subtle mt-2'>
                    <div className='col-4'><p className='fs-5 mt-2 mb-2 text-center'>@copyrighted my profile</p></div>
                    <div className='col-4'><p className='fs-5 mt-2 mb-2 text-center'>thanks</p></div>
                    <div className='col-4'><p className='fs-5 mt-2 mb-2 text-center'>Keep it simple</p></div>
                </div>
            </div>
		</div>
	);
}
