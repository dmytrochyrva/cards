import "./Card.css";
import rotateIcon from "../../../assets/rotate_icon.svg";

export function Card({ card }) {
	return (
		<div className="Card d-flex flex-column p-3">
			<div className="d-flex justify-content-between">
				<p>
					<b>Deck: </b>Name
				</p>
				<p>
					<b>Topic: </b>Name
				</p>
			</div>

			<div className="flex-grow-1 text-center">
				<div className="h-100 d-flex justify-content-center align-items-center">
					<h3>{card.front_content}</h3>
				</div>
			</div>

			<div className="d-flex justify-content-between opacity-25">
				<b>{card.creation_date}</b>

				<img src={rotateIcon} alt="rotate-icon" />
			</div>
		</div>
	);
}
