import React, {useState, useContext} from 'react';
import BackgroundController from './BackgroundController';
import { themeContext } from '../context/theme-context';
import { bgImageContext } from '../context/imageConfig-context';

function ImageController() {
	const { toggleTheme } = useContext(themeContext);
	const [imgConfig, setImgConfig] = useContext(bgImageContext);

	const [bgOpacity, setBgOpacity] = useState("");
	const [borderRadius, setBorderRadius] = useState("");

	const changeBgOpacity = (e) => {
		setBgOpacity(e.target.value);
		setImgConfig({bgOpacity: bgOpacity});
	}

	const changeBorderRadius = (e) => {
		setBorderRadius(e.target.value);
		setImgConfig({borderRadius})
	}

    return (
        <div className="config-section my-4 border border-1 rounded-lg p-4">
			
			<div className="text-secondary text-center mt-2">
				<h2>Twipi</h2>
				<p className="mt-3">
					Create beautiful posts from your tweets.
				</p>
			</div>

			<div className="border rounded mt-4 shadow-sm">
				<p className="p-2 mb-0">Tweet Background</p>
				<hr className="m-0" />
				<div className="p-3">
					<button
						className="btn btn-sm btn-primary"
						onClick={toggleTheme}
					>
						Toggle theme
					</button>
				</div>
			</div>
			<div className="border rounded mt-3 shadow-sm">
				<details className="outline-none">
					<summary className="m-2 heading">Background Image</summary>
					<hr className="mt-2 mb-0" />
					<div>
						< BackgroundController/>
					</div>
				</details>
			</div>
			<div className="border rounded mt-3 shadow-sm">
				<div className="p-3">
					<label htmlFor="opacity" className="form-label d-block">
						Opacity
					</label>
					<input
						type="range"
						className="form-range w-100"
						min="0"
						max="1"
						step="0.1"
						id="opacity"
						value={bgOpacity}
						onChange={changeBgOpacity}
					/>
				</div>
				<hr className="m-0" />
				<div className="p-3">
					<label htmlFor="radius" className="form-label d-block">
						Border Radius
					</label>
					<input
						type="range"
						className="form-range w-100"
						min="0"
						max="15"
						step="1"
						id="radius"
						value={borderRadius}
						onChange={changeBorderRadius}
					/>
				</div>
			</div>
		</div>
    )
}

export default ImageController
