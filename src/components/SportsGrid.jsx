import React from 'react';
import '../SportsGrid.css';

const SportsGrid = ({ items }) => {
  // 1. Define a diverse set of default images
  const defaultImages = [
    { src: '/images/archer.png' },
    { src: '/images/basketball.png' },
    { src: '/images/bike.png' },
    { src: '/images/boxing.png' },
    { src: '/images/football.png' },
    { src: '/images/hike.png' },
  ];

  const images = items && items.length > 0 ? items : defaultImages;

  // 2. Create the infinite list (duplicated for scrolling)
  const infiniteList = [...images, ...images, ...images];

  // 3. Helper to shuffle or offset the array so columns don't look identical
  const getColumnList = (offset) => {
    return [...infiniteList.slice(offset), ...infiniteList.slice(0, offset)];
  };

  return (
    <div className="sports-grid-container">
      <div className="sports-masonry">
        {/* Column 1 - Normal Order */}
        <div className="column column-move">
          {infiniteList.map((img, i) => (
            <img key={`col1-${i}`} src={img.src} className="sports-img" alt="sport" />
          ))}
        </div>

        {/* Column 2 - Offset by 2 images */}
        <div className="column column-move col-middle">
          {getColumnList(2).map((img, i) => (
            <img key={`col2-${i}`} src={img.src} className="sports-img" alt="sport" />
          ))}
        </div>

        {/* Column 3 - Offset by 4 images */}
        <div className="column column-move">
          {getColumnList(4).map((img, i) => (
            <img key={`col3-${i}`} src={img.src} className="sports-img" alt="sport" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SportsGrid;