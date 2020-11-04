// React
import React from "react";
// MUI components
// Custom Components
import Card from "../../components/Card";
// Styles
import "./styles.scss";

const Homepage = () => {
	return (
		<>
			<div className="homepage">
				<Card
					title="LECTURA"
					subtitle="Cuentos para aprender ortografía"
					isNew={true}
					isLate={false}
					isInProgress={false}
					completed={false}
				/>
				<Card
					title="LECTURA"
					subtitle="Cuentos para aprender ortografía"
					isNew={false}
					isLate={true}
					isInProgress={false}
					completed={false}
				/>
				<Card
					title="LECTURA"
					subtitle="Cuentos para aprender ortografía"
					isNew={false}
					isLate={false}
					isInProgress={true}
					completed={false}
				/>
				<Card
					title="LECTURA"
					subtitle="Cuentos para aprender ortografía"
					isNew={false}
					isLate={false}
					isInProgress={false}
					completed={true}
				/>
			</div>
		</>
	);
};
export default Homepage;
