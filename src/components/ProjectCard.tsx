// components/ProjectCard.tsx
import Image from 'next/image';
import React from 'react';

interface Project {
    title: string;
    description: string;
    imageUrl: string;
}

const ProjectCard: React.FC<Project> = ({ title, description, imageUrl }) => {
    return (
        <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md mb-6">
            <Image className="w-full h-64 object-cover" width={900} height={900} src={imageUrl} alt={title} />
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-700">{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
