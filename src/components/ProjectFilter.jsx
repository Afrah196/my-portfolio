import { useState } from 'react';
import { motion } from 'motion/react';
import MagicBento from './MagicBento';
import './ProjectFilter.css';

const ProjectFilter = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedCard, setExpandedCard] = useState(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Full Stack Web' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    setExpandedCard(null); // Collapse any expanded card when filter changes
  };

  const handleCardClick = (cardIndex) => {
    setExpandedCard(expandedCard === cardIndex ? null : cardIndex);
  };

  return (
    <div className="project-filter-container">
      <div className="project-filters">
        {filters.map((filter) => (
          <motion.button
            key={filter.id}
            className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
            onClick={() => handleFilterChange(filter.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: filters.indexOf(filter) * 0.1 }}
          >
            {filter.label}
          </motion.button>
        ))}
      </div>
      
      <motion.div
        key={activeFilter}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <MagicBento
          textAutoHide={false}
          enableStars
          enableSpotlight
          enableBorderGlow
          enableTilt
          enableMagnetism
          clickEffect
          spotlightRadius={320}
          particleCount={14}
          glowColor="132, 0, 255"
          cards={filteredProjects}
          expandedCard={expandedCard}
          onCardClick={handleCardClick}
        />
      </motion.div>
    </div>
  );
};

export default ProjectFilter;

