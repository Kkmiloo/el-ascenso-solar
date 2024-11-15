import { useEffect, useState, useMemo } from 'react';
import { ReactTyped } from 'react-typed';

interface TypewriterProps {
  text: string;
  delay: number;
  animationFinished: boolean;
  onComplete: () => void;
}

const Typewriter = ({
  text,
  delay,
  animationFinished,
  onComplete,
}: TypewriterProps) => {
  const [displayText, setDisplayText] = useState<(JSX.Element | string)[]>([]);
  const keywords = useMemo(
    () => [
      '8 horas',
      '5 casas locales',
      '"incapacidad operativa"',
      '3 instalaciones',
      '5 instalaciones',
      '5 instalaciones diarias',
      '20 instalaciones diarias',
      '12 instalaciones',
      'empresas comerciales',
      '50 instalaciones',
      '"incumplimiento de contrato"',
      '100 hogares',
      '50 paneles',
      '30 paneles',
      '100 instalaciones solares',
      'proyectos municipales',
      '100 hogares',
      '300 instalaciones',
      '"mala gestión logística"',
      '50 instalaciones',
      '3 ciudades',
      '300 instalaciones',
      '"mala planificación de expansión"',
      '150 instalaciones',
      '500 instalaciones',
      '"incapacidad operativa internacional"',
      '300 instalaciones',
      'mega proyecto solar',
      'Chile',
      '1,000 paneles solares',
      '"incapacidad operativa en mega proyectos"',
      '500 instalaciones',
      '$50,000 COP',
      '$75,000 COP',
      '$100,000 COP',
      '$150,000 COP',
      '$200,000 COP',
      '$300,000 COP',
    ],
    []
  );

  const highlightKeywords = (text: string) => {
    const keywordPattern = keywords
      .sort((a, b) => b.length - a.length) // Ordenar de más largo a más corto
      .map(
        (keyword) => keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // Escapar caracteres especiales
      )
      .join('|');

    const regex = new RegExp(`(${keywordPattern})`, 'gi');

    return text.split(regex).map((part, index) => {
      const isKeyword = keywords.some(
        (keyword) => keyword.toLowerCase() === part.toLowerCase()
      );

      return isKeyword ? (
        <span key={index} style={{ color: '#3b82f6', fontWeight: 'bold' }}>
          {part}
        </span>
      ) : (
        part
      );
    });
  };

  useEffect(() => {
    if (animationFinished) {
      setDisplayText(highlightKeywords(text));
      onComplete();
    }
  }, [animationFinished, text, onComplete]);

  return (
    <div>
      {animationFinished ? (
        <div>{displayText}</div>
      ) : (
        <ReactTyped
          strings={[text]}
          typeSpeed={delay}
          onComplete={() => {
            setDisplayText(highlightKeywords(text)); // Resaltar después de completar
            onComplete();
          }}
          loop={false}
          style={{ whiteSpace: 'pre-wrap' }} // Mantener el formato
        />
      )}
    </div>
  );
};

export default Typewriter;
