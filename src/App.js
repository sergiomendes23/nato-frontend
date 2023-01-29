import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Biografy from "./pages/Biografy/Biografy";
import Albuns from "./pages/Albuns/Albuns";
import Career from "./pages/Career/Career";
import Schedule from "./pages/Schedule/Schedule";
import Shop from "./pages/Shop/Shop";
import Contact from "./pages/Contact/Contact";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/biografia" element={<Biografy />} />
				<Route path="/albuns" element={<Albuns />} />
				<Route path="/carreira" element={<Career />} />
				<Route path="/agenda" element={<Schedule />} />
				<Route path="/loja" element={<Shop />} />
				<Route path="/contato" element={<Contact />} />
			</Routes>
		</BrowserRouter>
	);
}
