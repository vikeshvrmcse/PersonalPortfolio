/** @format */

import React from 'react';
import p1 from '../images/first.jpg';
import p2 from '../images/second.jpg';
import p3 from '../images/third.jpg';
export default function MyCollegeProject() {
	return (
		<>
			<div className='row d-flex justify-content-center bg-light-subtle shadow align-items-center m-0 p-5' >
				<div
					id='carouselExampleAutoplaying'
					class='carousel slide w-75 p-3 mt-5 mb-5'
					data-bs-ride='carousel' >
					<div class='carousel-inner'>
						<div class='carousel-item active'>
							<img
								src={p2}
								class='d-block w-100'
								alt='...'
								style={{ height: '50vh' }}
							/>
						</div>
						<div class='carousel-item'>
							<img
								src={p1}
								class='d-block w-100'
								alt='...'
								style={{ height: '50vh' }}
							/>
						</div>
						<div class='carousel-item'>
							<img
								src={p3}
								class='d-block w-100'
								alt='...'
								style={{ height: '50vh' }}
							/>
						</div>
					</div>
					<button
						class='carousel-control-prev'
						type='button'
						data-bs-target='#carouselExampleAutoplaying'
						data-bs-slide='prev'>
						<span
							class='carousel-control-prev-icon'
							aria-hidden='true'></span>
						<span class='visually-hidden'>Previous</span>
					</button>
					<button
						class='carousel-control-next'
						type='button'
						data-bs-target='#carouselExampleAutoplaying'
						data-bs-slide='next'>
						<span
							class='carousel-control-next-icon'
							aria-hidden='true'></span>
						<span class='visually-hidden'>Next</span>
					</button>
				</div>
			</div>

			<div
				class='accordion  p-3'
				id='accordionExample' style={{marginTop:'100px',marginBottom:'100px'}}>
				<div class='accordion-item'>
					<h2 class='accordion-header '>
						<button
							class='accordion-button collapsed bg-white fs-5'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#collapseOne'
							aria-expanded='false'
							aria-controls='collapseOne'>
							Requirement Analysis
						</button>
					</h2>
					<div
						id='collapseOne'
						class='accordion-collapse collapse'
						data-bs-parent='#accordionExample'>
						<div class='accordion-body'>
							<strong>This is the first item's accordion body.</strong> It is
							shown by default, until the collapse plugin adds the appropriate
							classes that we use to style each element. These classes control
							the overall appearance, as well as the showing and hiding via CSS
							transitions. You can modify any of this with custom CSS or
							overriding our default variables. It's also worth noting that just
							about any HTML can go within the <code>.accordion-body</code>,
							though the transition does limit overflow.
						</div>
					</div>
				</div>
				<div class='accordion-item'>
					<h2 class='accordion-header'>
						<button
							class='accordion-button bg-white collapsed fs-5 '
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#collapseTwo'
							aria-expanded='false'
							aria-controls='collapseTwo'>
							Software Designing
						</button>
					</h2>
					<div
						id='collapseTwo'
						class='accordion-collapse collapse'
						data-bs-parent='#accordionExample'>
						<div class='accordion-body'>
							<strong>This is the second item's accordion body.</strong> It is
							hidden by default, until the collapse plugin adds the appropriate
							classes that we use to style each element. These classes control
							the overall appearance, as well as the showing and hiding via CSS
							transitions. You can modify any of this with custom CSS or
							overriding our default variables. It's also worth noting that just
							about any HTML can go within the <code>.accordion-body</code>,
							though the transition does limit overflow.
						</div>
					</div>
				</div>
				<div class='accordion-item'>
					<h2 class='accordion-header'>
						<button
							class='accordion-button bg-white collapsed fs-5 '
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#collapseThree'
							aria-expanded='false'
							aria-controls='collapseThree'>
							Software Maintenance
						</button>
					</h2>
					<div
						id='collapseThree'
						class='accordion-collapse collapse'
						data-bs-parent='#accordionExample'>
						<div class='accordion-body'>
							<strong>This is the third item's accordion body.</strong> It is
							hidden by default, until the collapse plugin adds the appropriate
							classes that we use to style each element. These classes control
							the overall appearance, as well as the showing and hiding via CSS
							transitions. You can modify any of this with custom CSS or
							overriding our default variables. It's also worth noting that just
							about any HTML can go within the <code>.accordion-body</code>,
							though the transition does limit overflow.
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
