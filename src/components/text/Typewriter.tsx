import { useEffect, useState, useMemo } from 'react';

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState<(JSX.Element | string)[]>([]);
  const keywords = [
    'COP',
    '8 horas',
    '5 casas locales',
    '5 instalaciones diarias',
    '20 instalaciones diarias',
    '50 instalaciones en 30 días',
    '100 hogares',
    '300 instalaciones',
    '$50,000',
    '$75,000',
    '$100,000',
    '$200,000',
    '$300,000',
  ];

  // Usar `useMemo` para calcular `fullText` solo una vez
  const fullText = useMemo(() => {
    const result = [];
    let i = 0;

    while (i < text.length) {
      const remainingText = text.slice(i);
      const keyword = keywords.find((kw) => remainingText.startsWith(kw));

      if (keyword) {
        result.push(
          <span
            style={{ color: 'rgb(34, 211, 238)', fontWeight: 'bold' }}
            key={i}
          >
            {keyword}
          </span>
        );
        i += keyword.length;
      } else {
        result.push(text[i]);
        i += 1;
      }
    }

    return result;
  }, [text, keywords]);

  // Mostrar el texto completo si `animationFinished` es verdadero
  useEffect(() => {
    if (animationFinished) {
      setDisplayText(fullText);
      onComplete(); // Llama a la función cuando la animación termina
    }
  }, [animationFinished, onComplete]);

  // Lógica de animación por letra si `animationFinished` es falso
  useEffect(() => {
    if (animationFinished || currentIndex >= fullText.length)
    {
      onComplete();
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText((prev) => [...prev, fullText[currentIndex]]);
      setCurrentIndex(currentIndex + 1);
    }, delay);

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, fullText, animationFinished]);

  return <span>{displayText}</span>;
};

export default Typewriter;
