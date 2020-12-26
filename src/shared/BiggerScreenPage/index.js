import './css/BiggerScreenPage.css';

const BiggerScreenPage = () => {
	return (
		<div id='BSP'>
			<div className='fof'>
				<h2>Larger Screen Required</h2>
				<p
					style={{
						paddingBottom: 10,
						paddingTop: 10,
						maxWidth: 575,
						fontSize: 14,
					}}
				>
					We have detected that you are on a device smaller than the minimum
					screen width required please shift to a larger device
				</p>
			</div>
		</div>
	);
};

export default BiggerScreenPage;
