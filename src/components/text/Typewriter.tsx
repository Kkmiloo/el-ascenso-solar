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

  // Usar `useMemo` para calcular `fullText` solo una vez
  const fullText = useMemo(() => {
    const result = [];
    let i = 0;

    while (i < text.length) {
      const remainingText = text.slice(i);
      const keyword = keywords.find((kw) => remainingText.startsWith(kw));

      if (keyword) {
        result.push(
          <span style={{ color: '#3b82f6', fontWeight: 'bold' }} key={i}>
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
