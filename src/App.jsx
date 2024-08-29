import Player from "./components/Player.jsx";
import TimerChallange from "./components/TimerChallanges.jsx";

function App() {
	return (
		<>
			<Player />
			<div id="challenges">
				<TimerChallange title="Easy" targetTime={1} />
				<TimerChallange title="Moderate" targetTime={5} />
				<TimerChallange title="Hard" targetTime={10} />
				<TimerChallange title="Pros Only" targetTime={15} />
			</div>
		</>
	);
}

export default App;
