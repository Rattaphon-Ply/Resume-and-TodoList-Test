import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/utils/ProjectList";
import { Link } from "react-router";
import { useModalStore } from "@/store/modalStore";
import { SwiperSlide } from 'swiper/react';
import SwiperShow from "@/utils/SwiperShow";






const ProjectSection = () => {

    const { isModalOpen, setModalOpen } = useModalStore();
    const [selectedProject, setselectedProject] = useState(null);
    const isExternalLink = (url) => url?.startsWith("http");
        
    const handleMoreClick = (card) => {
        setselectedProject(card);
        setModalOpen(true);
    };
    
  return (
    <div className="relative px-6 pr-6 py-6">
        <div className="p-4 max-w-screen-lg mx-auto flex justify-center z-0 relative">
            <SwiperShow>
                {projects.map((proj, i) => (
                    <SwiperSlide key={i}>
                        <div className="flex justify-center">
                            <ProjectCard {...proj} onMoreClick={() => handleMoreClick(proj)} />
                        </div>
                    </SwiperSlide>
                ))}
            </SwiperShow>
        </div>

        {/* Modal */}
        {isModalOpen && selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Overlay */}
                <div
                    className="absolute inset-0 backdrop-blur-sm"
                    onClick={() => {
                        setModalOpen(false);
                        setselectedProject(null);
                    }}         
                />

                {/* Modal Content */}
                <div className="z-10 bg-white rounded-lg shadow-lg max-w-lg w-full max-h-[80vh] h-auto overflow-y-auto">
                    <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-auto"
                    />
                    <div className="p-6">
                        <h2 className="text-gray-700 text-2xl font-bold mb-2">{selectedProject.head}</h2>
                        <h3 className="text-gray-700 text-xl font-semibold mb-2">{selectedProject.title}</h3>

                        {Object.entries(selectedProject.description).map(([section, items], idx) => (
                            <div key={idx}>
                                <div className="font-semibold text-lg mt-4 text-gray-700">{section}</div>
                                <ul className="list-disc ml-6 space-y-1 text-gray-700">
                                    {items.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                            
                        <div className="mt-4">
                            {isExternalLink(selectedProject.projectUrl) ? (
                                <a
                                    href={selectedProject.projectUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                >
                                    ดูโปรเจกต์
                                </a>
                                ) : (
                                <Link
                                    to={selectedProject.projectUrl}
                                    className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                    onClick={() => {
                                        setModalOpen(false);
                                        setselectedProject(null);
                                    }} // ปิด modal เมื่อเปลี่ยน route
                                >
                                    ดูที่โปรเจกต์
                                </Link>
                                )}
                        </div>

                        <button
                            className="mt-6 px-4 py-2 bg-red-500 text-white rounded"
                            onClick={() => {
                                setModalOpen(false);
                                setselectedProject(null);
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
export default ProjectSection