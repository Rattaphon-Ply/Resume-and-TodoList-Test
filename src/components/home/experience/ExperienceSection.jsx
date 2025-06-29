import React, { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import { Experiences } from "@/utils/ExperienceList";
import { useModalStore } from "@/store/modalStore";
import { SwiperSlide } from 'swiper/react';
import SwiperShow from "@/utils/SwiperShow";

const ExperienceSection = () => {

    const { isModalOpen, setModalOpen } = useModalStore();
    const [selectedExperience, setselectedExperience] = useState(null);
    
    const handleMoreClick = (card) => {
        setselectedExperience(card);
        setModalOpen(true);
    };

  return (
    <div className="relative px-6 pr-6 py-6 ">
        <div className="p-4 max-w-screen-lg mx-auto flex justify-center">
            <SwiperShow>
                {Experiences.map((proj, i) => (
                    <SwiperSlide key={i}>
                        <div className="flex justify-center">
                            <ExperienceCard {...proj} onMoreClick={() => handleMoreClick(proj)} />
                        </div>
                    </SwiperSlide>
                ))}
            </SwiperShow>
        </div>

        {/* Modal */}
        {isModalOpen && selectedExperience && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Overlay */}
                <div
                    className="absolute inset-0 backdrop-blur-sm"
                    onClick={() => {
                        setModalOpen(false);
                        setselectedExperience(null);
                    }}
                />

                {/* Modal Content */}
                <div className="z-10 bg-white rounded-lg shadow-lg max-w-lg w-full max-h-[80vh] h-auto overflow-y-auto">
                    <img
                        src={selectedExperience.image}
                        alt={selectedExperience.title}
                        className="w-full h-auto"
                    />
                    <div className="p-6">
                        <h2 className="text-gray-700 text-2xl font-bold mb-2">{selectedExperience.head}</h2>
                        <h3 className="text-gray-700 text-xl font-semibold mb-2">{selectedExperience.title}</h3>
                        <p className="text-gray-700 break-words whitespace-normal">{selectedExperience.description}</p>
                        <button
                            className="mt-6 px-4 py-2 bg-red-500 text-white rounded"
                            onClick={() => {
                                setModalOpen(false);
                                setselectedExperience(null);
                            }}
                        >
                            ปิด
                        </button>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}
export default ExperienceSection