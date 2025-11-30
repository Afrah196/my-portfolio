import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { gsap } from 'gsap';
import BlurText from './BlurText';
import './ExperienceAccordion.css';

const ExperienceAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="experience-accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="accordion-item">
            <motion.button
              className="accordion-header"
              onClick={() => toggleItem(index)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="accordion-header-content">
                <div>
                  <p className="accordion-period">{item.period}</p>
                  <h3 className="accordion-title">{item.role}</h3>
                  <p className="accordion-org">{item.org} · {item.location}</p>
                </div>
                <motion.div
                  className="accordion-chevron"
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ▼
                </motion.div>
              </div>
            </motion.button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="accordion-content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="accordion-body">
                    <BlurText
                      className="accordion-summary"
                      animateBy="words"
                      direction="top"
                      text={item.summary}
                      delay={50}
                    />
                    <ul className="accordion-achievements">
                      {item.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceAccordion;

