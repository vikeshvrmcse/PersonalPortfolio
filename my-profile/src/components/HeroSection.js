/** @format */

import React from 'react';
import '../App.css';

import p1 from '../images/first.jpg';
import p2 from '../images/second.jpg';
import p3 from '../images/third.jpg';
export default function HeroSection() {
	return (
		<>
			<div className=' d-flex flex-column justify-content-center align-items-center text-center m-0 p-0 '>
				<div className='heroImage m-0 p-0 d-flex flex-column justify-content-center align-items-center  '>
					<div className='d-flex flex-column align-items-center border-3 rounded shadow-lg border-light btn btn-outline-dark'>
						<h1 className='display-1 me-4 ms-4 mt-5'>Hi their,</h1>
						<h3 className='display-3 me-4 ms-4'>how are you?</h3>
					</div>
					<button className='btn btn-outline-dark  m-4 btn-lg border rounded-pill shadow-lg border-light w-25'>
						Let's Start
					</button>
				</div>
				<div class='row setBelow bg-light m-0 p-0'>
					<div className='m-0 p-0 row' data-aos='fade-down'
						data-aos-delay='50'>
						<div
							className='d-flex flex-column align-items-center'
							style={{ marginTop: '80px', marginBottom: '80px' }}>
							<h1 className='text-center display-2 text-warning'>About us</h1>
							<div
								className='scaledDivision'
								style={{
									backgroundColor: 'black',
									width: '200px',
									height: '1vh',
								}}></div>

							<div
								className='text-center fs-4 mt-5 mb-5 text-dark'
								style={{ margin: '0px', padding: '0px' }}>
								<p className='m-0 p-0'>I'm so very happy,</p>
								<p className='m-0 p-0'>
									In the college time I'm work many project and deploy and use
									proper,
								</p>
								<p className='m-0 p-0'>
									software engineering concept and their performance increase.
								</p>
							</div>
						</div>
						<div class='col-lg-4 g-5 col-md-12 col-sm-12 mt-3' data-aos='fade-down'
						data-aos-delay='150'>
							<div class='card text-center scaledDivision'>
								<img
									src={p1}
									class='card-img-top'
									style={{ height: '50vh' }}
									alt='...'
								/>
								<div class='card-header'>Featured</div>
								<div class='card-body'>
									<h5 class='card-title'>Special title treatment</h5>
									<p class='card-text'>
										With supporting text below as a natural lead-in to
										additional content.
									</p>
								</div>
								<div class='card-footer text-body-secondary'>2 days ago</div>
							</div>
						</div>
						<div class='col-lg-4 g-5 col-md-12 col-sm-12 mt-3' data-aos='fade-down'
						data-aos-delay='250'>
							<div class='card text-center scaledDivision'>
								<img
									src={p2}
									class='card-img-top'
									style={{ height: '50vh' }}
									alt='...'
								/>
								<div class='card-header'>Featured</div>
								<div class='card-body'>
									<h5 class='card-title'>Special title treatment</h5>
									<p class='card-text'>
										With supporting text below as a natural lead-in to
										additional content.
									</p>
								</div>
								<div class='card-footer text-body-secondary'>2 days ago</div>
							</div>
						</div>
						<div class='col-lg-4 g-5 col-md-12 col-sm-12 mt-3' data-aos='fade-down'
						data-aos-delay='350'>
							<div class='card text-center scaledDivision'>
								<img
									src={p3}
									class='card-img-top'
									style={{ height: '50vh' }}
									alt=''
								/>
								<div class='card-header'>Featured</div>
								<div class='card-body'>
									<h5 class='card-title'>Special title treatment</h5>
									<p class='card-text'>
										With supporting text below as a natural lead-in to
										additional content.
									</p>
								</div>
								<div class='card-footer text-body-secondary'>2 days ago</div>
							</div>
						</div>
						<div
							className='d-flex flex-column align-items-center p-0'
							style={{ marginTop: '100px', marginBottom: '100px' }} data-aos='fade-down'
							data-aos-delay='50'>
							<h1 className='text-center display-2'>MY College Project</h1>
							<div
								className='scaledDivision'
								style={{
									backgroundColor: 'orange',
									width: '500px',
									height: '1vh',
								}}></div>

							<div
								className='text-center fs-4 mt-3 text-dark'
								style={{ margin: '0px', padding: '0px' }}>
								<p className='m-0 p-0'>I'm so very happy,</p>
								<p className='m-0 p-0'>
									In the college time I'm work many project and deploy and use
									proper,
								</p>
								<p className='m-0 p-0'>
									software engineering concept and their performance increase.
								</p>
							</div>
						</div>
					</div>
					<div
						class='container-fluid text-center mt-5 me-0 ms-0 p-0'
						>
						<div class='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 g-lg-5 m-0 p-0'>
							<div class='col' data-aos='fade-down'
						data-aos-delay='150'>
								<div class='scaledDivision p-3 bg-light shadow border-white border-bottom border-5'>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Fugiat dignissimos quibusdam doloremque quos rem,
										praesentium perferendis tenetur provident aspernatur
										voluptates consectetur. Ipsa numquam necessitatibus nihil.
										Deserunt repellat vel, illum nostrum dolor doloremque
										adipisci consequuntur officiis esse quo possimus aperiam et
										est recusandae voluptatum, voluptatibus praesentium placeat
										ut! Ducimus sint ab id, delectus modi a veniam? Optio,
										aspernatur excepturi veniam consectetur iure sunt, libero,
										tempore iste fuga laborum recusandae unde fugiat.
									</p>
								</div>
							</div>
							<div class='col' data-aos='fade-down'
						data-aos-delay='250'>
								<div class='scaledDivision p-3 bg-light shadow border-white border-bottom border-4'>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Fugiat dignissimos quibusdam doloremque quos rem,
										praesentium perferendis tenetur provident aspernatur
										voluptates consectetur. Ipsa numquam necessitatibus nihil.
										Deserunt repellat vel, illum nostrum dolor doloremque
										adipisci consequuntur officiis esse quo possimus aperiam et
										est recusandae voluptatum, voluptatibus praesentium placeat
										ut! Ducimus sint ab id, delectus modi a veniam? Optio,
										aspernatur excepturi veniam consectetur iure sunt, libero,
										tempore iste fuga laborum recusandae unde fugiat.
									</p>
								</div>
							</div>
							<div class='col' data-aos='fade-down'
						data-aos-delay='350'>
								<div class='scaledDivision p-3 bg-light shadow border-white border-bottom border-4'>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Fugiat dignissimos quibusdam doloremque quos rem,
										praesentium perferendis tenetur provident aspernatur
										voluptates consectetur. Ipsa numquam necessitatibus nihil.
										Deserunt repellat vel, illum nostrum dolor doloremque
										adipisci consequuntur officiis esse quo possimus aperiam et
										est recusandae voluptatum, voluptatibus praesentium placeat
										ut! Ducimus sint ab id, delectus modi a veniam? Optio,
										aspernatur excepturi veniam consectetur iure sunt, libero,
										tempore iste fuga laborum recusandae unde fugiat.
									</p>
								</div>
							</div>
							<div class='col' data-aos='fade-down'
						data-aos-delay='450'>
								<div class='scaledDivision p-3 bg-light shadow border-white border-bottom border-4'>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Fugiat dignissimos quibusdam doloremque quos rem,
										praesentium perferendis tenetur provident aspernatur
										voluptates consectetur. Ipsa numquam necessitatibus nihil.
										Deserunt repellat vel, illum nostrum dolor doloremque
										adipisci consequuntur officiis esse quo possimus aperiam et
										est recusandae voluptatum, voluptatibus praesentium placeat
										ut! Ducimus sint ab id, delectus modi a veniam? Optio,
										aspernatur excepturi veniam consectetur iure sunt, libero,
										tempore iste fuga laborum recusandae unde fugiat.
									</p>
								</div>
							</div>
							<div class='col' data-aos='fade-down'
						data-aos-delay='550'>
								<div class='scaledDivision p-3 bg-light shadow border-white border-bottom border-4'>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Fugiat dignissimos quibusdam doloremque quos rem,
										praesentium perferendis tenetur provident aspernatur
										voluptates consectetur. Ipsa numquam necessitatibus nihil.
										Deserunt repellat vel, illum nostrum dolor doloremque
										adipisci consequuntur officiis esse quo possimus aperiam et
										est recusandae voluptatum, voluptatibus praesentium placeat
										ut! Ducimus sint ab id, delectus modi a veniam? Optio,
										aspernatur excepturi veniam consectetur iure sunt, libero,
										tempore iste fuga laborum recusandae unde fugiat.
									</p>
								</div>
							</div>
							<div class='col' data-aos='fade-down'
						data-aos-delay='650'>
								<div class='scaledDivision p-3 bg-light shadow border-white border-bottom border-4'>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Fugiat dignissimos quibusdam doloremque quos rem,
										praesentium perferendis tenetur provident aspernatur
										voluptates consectetur. Ipsa numquam necessitatibus nihil.
										Deserunt repellat vel, illum nostrum dolor doloremque
										adipisci consequuntur officiis esse quo possimus aperiam et
										est recusandae voluptatum, voluptatibus praesentium placeat
										ut! Ducimus sint ab id, delectus modi a veniam? Optio,
										aspernatur excepturi veniam consectetur iure sunt, libero,
										tempore iste fuga laborum recusandae unde fugiat.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
