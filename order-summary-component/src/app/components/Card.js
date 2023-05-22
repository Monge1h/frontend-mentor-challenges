import Image from 'next/image'

// import images
import Ilustration from './images/illustration-hero.svg'
import MusicIcon from './images/icon-music.svg'

export default function Card (){
	return (
		<div className="w-[300px] min-h[700px] bg-white rounded-xl">
			<Image src={Ilustration} alt="hero" className="rounded-t-xl" />
			{/* info container */}
			<div className="flex flex-col items-center justify-center p-6">
				<h3 className=" font-bold">Order Summary</h3>
				<p className="text-[12px] text-[#878EAA] text-center mt-2 mb-4">
					You can now listen to millions of songs, audiobooks and podcasts on
					any device anywhere you like!
				</p>
				{/* price container */}
				<div className="flex justify-between bg-[#F7F9FE] py-2 w-[250px] rounded-md ">
					<div className="items-center flex px-4">
						<Image
							src={MusicIcon}
							alt="music icon"
							height={30}
							className="text-sm"
						/>
						{/* plan container */}
						<div className="text-[13px] px-4">
							<h5>Anual Plan</h5>
							<span className="text-[#8991A9]">$59.99/year</span>
						</div>
					</div>
					<a
						className="self-center text-[10px] text-[#3B29D7] font-bold underline pr-4"
						href="#"
					>
						Change
					</a>
				</div>
				{/* button */}
				<button className="bg-[#382BE1] text-[13px] text-white w-[250px] mt-4 p-2 rounded-md">
					Proceed to payment
				</button>
				{/* cancel order */}
				<button className="mt-4 text-[13px] text-[#8991A9] font-semibold">Cancel order</button>
			</div>
		</div>
	);
}