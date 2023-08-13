import { Card } from "./shared/card/Card";

export function App() {
	const cardsMock = [
		{
			id: 1,
			front_content: "What is the capital of Great Britain",
			back_content: "London is the capital of Great Britain",
			creation_date: "2023-02-02",
		},
		{
			id: 2,
			front_content: "What is the capital of Great Britain",
			back_content: "London is the capital of Great Britain",
			creation_date: "2023-02-02",
		},
		{
			id: 3,
			front_content: "What is the capital of Great Britain",
			back_content: "London is the capital of Great Britain",
			creation_date: "2023-02-02",
		},
		{
			id: 4,
			front_content: "What is the capital of Great Britain",
			back_content: "London is the capital of Great Britain",
			creation_date: "2023-02-02",
		},
	];

	return (
		<div className="d-flex flex-column gap-3 p-3 h-100">
			<h3 className="text-white">Cards:</h3>

			<div className="flex-grow-1 position-relative overflow-auto">
				<div className="h-100 position-absolute">
					<div className="d-flex flex-column gap-3">
						{cardsMock.map((card) => (
							<Card key={card.id} card={card} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
