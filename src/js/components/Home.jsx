import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import DataCard from "./DataCard";
import Footer from "./Footer";
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {
	return (
		<div>
			<Navbar/>
			<Jumbotron/>
			<DataCard/>
			<Footer/>      
		</div>
	);
};

export default Home;