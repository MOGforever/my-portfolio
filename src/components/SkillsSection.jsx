import React, { useState } from 'react';

const skills = [
    //Frontend
    {name: "HTML/CSS", level: "Advanced", category: "Frontend"},
    {name: "JavaScript", level: "Advanced", category: "Frontend"},
    {name: "React", level: "Intermediate", category: "Frontend"},
    {name: "Tailwind CSS", level: "Intermediate", category: "Frontend"},
    {name: "Sass", level: "Beginner", category: "Frontend"},
    {name: "TypeScript", level: "Beginner", category: "Frontend"},

    //Backend
    {name: "Node.js", level: "Intermediate", category: "Backend"},
    {name: "Express.js", level: "Intermediate", category: "Backend"},
    {name: "MongoDB", level: "Beginner", category: "Backend"},
    {name: "SQL", level: "Beginner", category: "Backend"},
    {name: "Python", level: "Advanced", category: "Backend"},
    {name: "Django", level: "Intermediate", category: "Backend"},
    {name: "PostgreSQL", level: "Beginner", category: "Backend"},

    //Tools
    {name: "Git", level: "Intermediate", category: "Tools"},
    {name: "GitHub", level: "Intermediate", category: "Tools"},
    {name: "VS Code", level: "Advanced", category: "Tools"},
    {name: "Docker", level: "Beginner", category: "Tools"},
    {name: "C++", level: "Intermediate", category: "Tools"},
];

const SkillLevelBar = ({ level }) => {
    const getSegmentColor = (segmentIndex, skillLevel) => {
        const levelMap = {
            "Beginner": 1,
            "Intermediate": 2,
            "Advanced": 3
        };
        
        const currentLevel = levelMap[skillLevel];
        
        if (segmentIndex <= currentLevel) {
            if (currentLevel === 1) return "bg-purple-200"; // Beginner - very light purple
            if (currentLevel === 2) return "bg-purple-400"; // Intermediate - medium purple
            if (currentLevel === 3) return "bg-purple-700"; // Advanced - dark purple
        }
        
        return "bg-gray-300"; // Inactive segment
    };

    return (
        <div className="flex gap-1 w-full">
            {[1, 2, 3].map((segment) => (
                <div
                    key={segment}
                    className={`h-2 flex-1 rounded-sm transition-all duration-500 ease-out ${getSegmentColor(segment, level)}`}
                    style={{
                        animationDelay: `${segment * 0.1}s`,
                        animation: `fadeIn 0.6s ease-out ${segment * 0.1}s both`
                    }}
                />
            ))}
        </div>
    );
};

export const SkillsSection = () => {
    const [selectedCategory, setSelectedCategory] = React.useState('All');
    
    const categories = ['All', 'Frontend', 'Backend', 'Tools'];
    
    const filteredSkills = selectedCategory === 'All' 
        ? skills 
        : skills.filter(skill => skill.category === selectedCategory);

    return (
        <section id="skills" className="py-24 px-4 relative bg-gray-50">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
                    My <span className="text-purple-600">Skills</span>
                </h2>

                {/* Category Filter Buttons */}
                <div className="flex justify-center mb-12">
                    <div className="flex gap-2 bg-gray-800 p-2 rounded-lg">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                                    selectedCategory === category
                                        ? 'bg-purple-600 text-white shadow-lg'
                                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg text-gray-800">
                                    {skill.name}
                                </h3>
                            </div>
                            
                            <SkillLevelBar level={skill.level} />
                            
                            <div className="text-right mt-3">
                                <span className={`text-sm font-medium ${
                                    skill.level === "Advanced" ? "text-purple-700" : 
                                    skill.level === "Intermediate" ? "text-purple-400" : 
                                    "text-gray-600"
                                }`}>
                                    {skill.level}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: scaleX(0);
                    }
                    to {
                        opacity: 1;
                        transform: scaleX(1);
                    }
                }
            `}</style>
        </section>
    );
};