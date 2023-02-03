import styled from "styled-components";
import { useState } from "react"
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export default function Sidebar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar)

	return (
		<>
			<Link to="#" className="menu-bars">
				<FaIcons.FaBars onClick={showSidebar} />
			</Link>
			<nav className={sidebar ? "nav-menu active" : "nav-menu"}>
				<ul className="nav-menu-itens">
					<li className="navbar-toggle">
						<Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose />
                        </Link>
					</li>
				</ul>
			</nav>
		</>
	);
}
