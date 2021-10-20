import React, { useContext, useState } from 'react';
import { Tabs, TabList, Tab, TabPanel} from 'react-tabs';
import { bgImageContext } from '../context/imageConfig-context';

function BackgroundController() {
	const [bgImage, setBgImage] = useContext(bgImageContext);

	const [bgUrl, setBgUrl] = useState("");
	const [bgColor, setBgColor] = useState("");

	// unsplash images query
	const [query, setQuery] = useState([]);
	const [results, setResults] = useState([]);

	const clientId = process.env.REACT_APP_CLIENT_ID;

	const handleSearchQuery = (e) => {
		setQuery(e.target.value);
	}

	const handleSearch = (e) => {
		e.preventDefault();

		const url =
			"https://api.unsplash.com/search/photos?page=1&query=" +
			query +
			"&client_id=" +
			clientId;

		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setResults(data.results);
			})
			.catch((err) => console.log(err));
	};

	// upload image 
	const getFile = (e) => {
		let file = e.target.files[0];
		let reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => {
			setBgImage({
				file: reader.result
			});
		};
	}

    return (
        <div>
			<Tabs className="tabs">
				<TabList className="tablist d-flex justify-content-between p-3 mb-0">
					<Tab className="tab">Upload files</Tab>
					<Tab className="tab">URL</Tab>
					<Tab className="tab">Color</Tab>
					<Tab className="tab">Search</Tab>
				</TabList>
				<hr className="m-0" />
				<TabPanel className="tabpanel">
					<input
						type="file"
						accept="image/*"
						className="form-control-sm m-3"
						onChange={getFile}
					/>
				</TabPanel>
				<TabPanel className="tabpanel px-3">
					<div className="input-group my-3 d-flex flex-cloumn">
						<input
							type="text"
							className="form-control w-75"
							placeholder="Image URL"
							value={bgUrl}
							onChange={(e) => setBgUrl(e.target.value)}
						/>
						<button
							className="btn btn-primary w-100 mt-3 mx-auto"
							onClick={() => setBgImage({ link: bgUrl })}
						>
							Submit
						</button>
					</div>
				</TabPanel>
				<TabPanel className="tabpanel">
					<div className="m-3">
						<label htmlFor="color" className="mb-0">
							Select color
						</label>
						<input
							type="color"
							className="ml-2"
							id="color"
							value={bgColor}
							onChange={(e) => {
								setBgColor(e.target.value);
								setBgImage({ color: bgColor });
							}}
						/>
					</div>
				</TabPanel>
				<TabPanel className="tabpanel ">
					<form className="d-flex m-3">
						<input
							className="form-control"
							type="search"
							placeholder="i.e. Dog"
							aria-label="Search"
							onChange={handleSearchQuery}
						/>
						<button
							className="btn btn-outline-primary ml-2"
							type="submit"
							onClick={handleSearch}
						>
							Search
						</button>
					</form>
					<hr className="m-0" />
					<div className="search-section">
						{results.map((photo) => (
							<img
								key={photo.id}
								src={photo.urls.thumb}
								alt="unsplash images"
								className="search-img"
								onClick={() => setBgImage({ search: photo.urls.raw })}
							/>
						))}
					</div>
				</TabPanel>
			</Tabs>
		</div>
    )
}

export default BackgroundController
