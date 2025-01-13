/** @format */

import logo from './logo.svg';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.css';
import MyNavbar from './components/MyNavbar';
import HeroSection from './components/HeroSection';
import MyCollegeProject from './components/MyCollegeProject';
import Footer from './components/Footer';
function App() {
	AOS.init();
	return (
		<>
			<MyNavbar />
			<section>
				<HeroSection />
			</section>
      <section>
        <MyCollegeProject />
      </section>
      <Footer/>
			
		</>
	);
}

export default App;
