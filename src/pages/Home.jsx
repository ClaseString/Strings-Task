import { useState, useEffect, useMemo } from 'react';
import Modal from '../components/Modal';
import StringCard from '../components/StringCard';
import stringsMethods from '../data/methods.json';
import { groupNames } from '../data/names';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(null);

  const handleOpenModal = (stringMethod) => {
    setSelectedMethod(stringMethod);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // 🔀 Mezclar nombres una sola vez
  const shuffledNames = useMemo(() => {
    return [...groupNames].sort(() => 0.5 - Math.random());
  }, []);

  const fullText = shuffledNames.join(', ');
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText[currentIndex]);
      setCurrentIndex((prev) => prev + 1);
    }, 60); // velocidad de escritura (ms por letra)

    if (currentIndex >= fullText.length) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [currentIndex, fullText]);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto p-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">
            String Methods
          </h1>
          <p className="text-base-content text-opacity-70 text-lg">
            Directo desde el corazón del
            <span className="text-primary"> Dream Team </span>
          </p>
          <p className="text-base-content text-opacity-80 text-lg">
            <span className="text-primary">{displayedText}</span>
            <span className="animate-pulse">|</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stringsMethods.map((stringMethod) => (
            <StringCard
              key={stringMethod.title}
              stringMethod={stringMethod}
              onClick={() => handleOpenModal(stringMethod)}
            />
          ))}
        </div>
      </div>

      {isModalOpen && selectedMethod && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          stringMethod={selectedMethod}
        />
      )}
    </div>
  );
};

export default Home;
