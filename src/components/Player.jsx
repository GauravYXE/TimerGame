// import { useState } from "react";

// export default function Player() {
// 	const [enteredPlayerName, setPlayerName] = useState("");
// 	const [submitted, setsubmitted] = useState(false);

// 	function handleChange(e) {
// 		setsubmitted(false);
// 		setPlayerName(e.target.value);
// 	}

// 	function handleClick() {
// 		setsubmitted(true);
// 	}
// 	return (
// 		<section id="player">
// 			<h2>Welcome {submitted ? enteredPlayerName : "unknown entity"}</h2>
// 			<p>
//         <input type="text"
//           onChange={handleChange}
//           value={enteredPlayerName} />

// 				<button onClick={handleClick}>Set Name</button>
// 			</p>
// 		</section>
// 	);
// }

import { useState, useRef } from "react";

export default function Player() {
	const playerName = useRef();
	const [enteredPlayerName, setPlayerName] = useState("");

	function handleClick() {
		setPlayerName(playerName.current.value);
		playerName.current.value = "";
	}
	return (
		<section id="player">
			<h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
			<p>
				<input ref={playerName} type="text" />
				<button onClick={handleClick}>Set Name</button>
			</p>
		</section>
	);
}
