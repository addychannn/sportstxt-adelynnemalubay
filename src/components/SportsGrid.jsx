import React from 'react';
import '../SportsGrid.css';

const SportsGrid = ({ items }) => {
  // Use your basketball asset
  const images = items || Array(6).fill({ src: '/src/assets/basketball.png' });

  // Create the infinite list (duplicated)
  const infiniteList = [...images, ...images, ...images];

  return (
    <div className="sports-grid-container">
      <div className="sports-masonry">
        {/* Column 1 */}
        <div className="column column-move">
          {infiniteList.map((img, i) => (
            <img key={i} src={img.src} className="sports-img" alt="sport" />
          ))}
        </div>

        {/* Column 2 (Middle - Staggered) */}
        <div className="column column-move col-middle">
          {infiniteList.map((img, i) => (
            <img key={i} src={img.src} className="sports-img" alt="sport" />
          ))}
        </div>

        {/* Column 3 */}
        <div className="column column-move">
          {infiniteList.map((img, i) => (
            <img key={i} src={img.src} className="sports-img" alt="sport" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SportsGrid;