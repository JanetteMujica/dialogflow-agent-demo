// src/App.js
import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
	const [isLoaded, setIsLoaded] = useState(false);
	const [hasError, setHasError] = useState(false);
	const scriptLoadedRef = useRef(false);

	useEffect(() => {
		// Check if script is already loaded
		if (window.dfMessenger || scriptLoadedRef.current) {
			setIsLoaded(true);
			return;
		}

		// Check if script tag already exists
		const existingScript = document.querySelector(
			'script[src*="dialogflow-console/fast/messenger/bootstrap.js"]'
		);
		if (existingScript) {
			setIsLoaded(true);
			scriptLoadedRef.current = true;
			return;
		}

		// Load DialogFlow Messenger script only once
		const script = document.createElement('script');
		script.src =
			'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
		script.async = true;

		script.onload = () => {
			setIsLoaded(true);
			scriptLoadedRef.current = true;
			setHasError(false);
		};

		script.onerror = () => {
			console.error('Failed to load DialogFlow Messenger script');
			setHasError(true);
			setIsLoaded(false);
		};

		document.head.appendChild(script);
	}, []);

	return (
		<div className='app'>
			{/* Header Banner */}
			<div className='header-banner'>
				<div className='banner-content'>
					<img
						src={`${process.env.PUBLIC_URL}/assets/images/eCarePD_logo.svg`}
						alt='eCarePD Logo'
						className='ecare-logo'
						onError={(e) => {
							e.target.style.display = 'none';
							e.target.nextSibling.style.display = 'block';
						}}
					/>
					<div className='ecare-logo-fallback' style={{ display: 'none' }}>
						eCare-PD
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className='main-content'>
				<div className='content-wrapper'>
					{/* CAFY Logo */}
					<div className='cafy-logo-container'>
						<img
							src={`${process.env.PUBLIC_URL}/assets/images/cafy_logo.svg`}
							alt='CAFY Logo'
							className='cafy-logo'
							onError={(e) => {
								e.target.style.display = 'none';
								e.target.nextSibling.style.display = 'block';
							}}
						/>
						<div className='cafy-logo-fallback' style={{ display: 'none' }}>
							CAFY
						</div>
					</div>

					{/* Text Content */}
					<div className='text-content'>
						<h1 className='main-heading'>
							Hi, I'm CAFY — your assistant designed to help you navigate
							Parkinson's pain, one day at a time.
						</h1>

						<p className='description'>
							<span
								style={{
									fontSize: '1.2em',
									backgroundColor: 'yellow',
									fontWeight: 'bold',
								}}
							>
								Before trying the demo, &nbsp;
								<a
									href='https://dti5125-dialogflow-fastapi-webhook.onrender.com'
									target='_blank'
									rel='noopener noreferrer'
								>
									please activate Render by visiting this URL
								</a>
							</span>
						</p>

						<p className='description'>
							<span
								style={{
									fontSize: '1.2em',
									backgroundColor: 'yellow',
									fontWeight: 'bold',
								}}
							>
								Then, write in the chatbot: "I have pain"
							</span>
							.
						</p>

						<p className='description'>
							Our Conversational Recommendation System (CRS) is designed to help
							people manage pain related to Parkinson’s disease by offering
							practical self-care tips tailored to the severity of their
							symptoms.
						</p>
						<p className='description'>
							When a user mentions a pain symptom—such as saying,{' '}
							<strong>"I have pain"</strong> —the CRS explains what that might
							mean and suggests a relevant care goal. It then asks a few simple
							follow-up questions, such as where the pain is, what type it is,
							and how it's affecting sleep, mood, and daily activities.
						</p>

						<p className='description'>
							Based on the user’s responses, the CRS estimates the level of pain
							and provides personalized care suggestions, ranging from basic
							education to more advanced support. These tips may include helpful
							complementary media—such as videos or podcasts—sourced from
							trusted Parkinson’s organizations.
						</p>
					</div>
				</div>

				{/* DialogFlow Messenger - positioned bottom right */}
				{isLoaded && !hasError && (
					<df-messenger
						intent='WELCOME'
						chat-title='DTI_A4_Chat_Bot'
						agent-id='66c17bfb-da8e-4123-897d-b9220a2e0dd8'
						language-code='en'
						className='chatbot-messenger'
					></df-messenger>
				)}

				{hasError && (
					<div className='error-message'>
						Failed to load chatbot. Please refresh the page.
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
