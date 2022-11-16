import React from 'react'
import place from '../data/place'
import { AiFillStar } from 'react-icons/ai'
import Location from '../assets/images/location-icon.png'

const Places = () => {
    return (
        <>
            <section className="flex flex-wrap gap-5 justify-between items-center px-7 md:px-24 py-8">
                <p>Restaurant</p>
                <p>Cottage</p>
                <p>Castle</p>
                <p>Fantastic city</p>
                <p>Beach</p>
                <p>Carbins</p>
                <p>Off-grid</p>
                <p>Farm</p>
                <button className="border rounded-lg py-3 px-6 flex items-center gap-6">Location <img src={Location} alt="" /></button>
            </section>
            <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-4 px-8 sm:px-12 md:px-10 lg:px- xl:px-24 max-w-screen-2xl">
                {place.map((item) => (
                    <div key={item?.sn} className="border border-[#d7d7d7] rounded-lg p-3 text-xs">
                        <img src={item?.img} alt="" className="object-contain w-[500px] h-auto" />
                        <div className="flex justify-between mt-3">
                            <p>Desert King</p>
                            <p className="font-semibold">1MBT per night</p>
                        </div>
                        <div className="flex justify-between mt-3 ">
                            <p>2345Km away</p>
                            <p>available for 2weeks stay</p>
                        </div>
                        <div className="flex mt-2 gap-1.5">
                            {Array.from({ length: 5 }, (_, index) => <AiFillStar className="text-primary" key={index} />)}
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}

export default Places