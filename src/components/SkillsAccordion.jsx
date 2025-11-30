import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import './SkillsAccordion.css';

const SkillsAccordion = ({ skills }) => {
  const [openCategories, setOpenCategories] = useState(new Set(['languages', 'protocols']));

  const toggleCategory = (category) => {
    const newOpen = new Set(openCategories);
    if (newOpen.has(category)) {
      newOpen.delete(category);
    } else {
      newOpen.add(category);
    }
    setOpenCategories(newOpen);
  };

  const categoryLabels = {
    languages: 'Programming Languages',
    protocols: 'Protocols & Stacks',
    media: 'Media & Codecs',
    audio: 'Audio Processing',
    signaling: 'Signaling & Backend',
    android: 'Android',
    ios: 'iOS',
    flutter: 'Flutter',
    web: 'Web',
    monitoring: 'Monitoring',
    logging: 'Logging & Tracing',
    cicd: 'CI/CD & Tools',
    testing: 'Testing',
    practices: 'Engineering Practices',
    reliability: 'Reliability',
    security: 'Security',
  };

  const renderSkillCategory = (category, items, categoryKey) => {
    const isOpen = openCategories.has(categoryKey);
    return (
      <div key={categoryKey} className="skill-category-item">
        <motion.button
          className="skill-category-header"
          onClick={() => toggleCategory(categoryKey)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <h3>{categoryLabels[category] || category}</h3>
          <motion.div
            className="skill-chevron"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            ▼
          </motion.div>
        </motion.button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="skill-category-content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="skills-tags">
                {items.map((skill, i) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.03 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const categories = [];
  
  Object.entries(skills).forEach(([category, items]) => {
    if (Array.isArray(items)) {
      categories.push(renderSkillCategory(category, items, category));
    } else if (typeof items === 'object') {
      // Handle nested objects (like platforms)
      Object.entries(items).forEach(([subCategory, subItems]) => {
        if (Array.isArray(subItems)) {
          categories.push(renderSkillCategory(subCategory, subItems, `${category}-${subCategory}`));
        }
      });
    }
  });

  return (
    <div className="skills-accordion">
      {categories}
    </div>
  );
};

export default SkillsAccordion;

