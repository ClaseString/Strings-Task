import React, { useEffect, useState, useMemo } from "react";
import { groupNames } from "../data/names";

export default function Home() {
  // 🔀 Mezclar nombres una sola vez
  const shuffledNames = useMemo(() => {
    return [...groupNames].sort(() => 0.5 - Math.random());
  }, []);

  const fullText = shuffledNames.join(", ");
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText[currentIndex]);
      setCurrentIndex((prev) => prev + 1);
    }, 60);

    if (currentIndex >= fullText.length) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [currentIndex, fullText]);

  return (
    <div className="container mx-auto p-10">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary mb-2">String Methods</h1>
        <p className="text-base-content text-opacity-70 text-lg">
          Directo desde el corazón del
          <span className="text-primary"> Dream Team </span>
        </p>
        <p className="text-base-content text-opacity-80 text-lg">
          <span className="text-primary">{displayedText}</span>
          <span className="animate-pulse">|</span>
        </p>
      </div>

      {/* Sección de slides colapsables */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-4/5 mx-auto">
        {/* Slide 1 */}
        <div className="collapse collapse-arrow bg-base-100 text-primary">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-semibold">
            🎓 Integrantes
          </div>
          <div className="collapse-content text-sm text-base-content">
            <p>
              <strong>Alumnos:</strong>
              <br /> Domingo Fleitas
              <br /> Javier Cordero
              <br /> Kevin Jiménez
              <br /> Adán Pérez
            </p>
            <br />
            <p>
              <strong>Ciclo:</strong> 2º DAW
            </p>
            <br />
            <p>
              <strong>Módulo:</strong> Desarrollo Web (DEW)
            </p>
            <br />
            <p>
              <strong>Unidad:</strong> 4 – Tarea Grupal
            </p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="collapse collapse-arrow bg-base-100 text-primary">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-semibold">
            🧠 ¿Qué es un String?
          </div>
          <div className="collapse-content text-sm text-base-content">
            <ul className="list-disc list-inside mb-2">
              <li>Es un tipo de dato primitivo.</li>
              <li>Representa una secuencia de caracteres (texto).</li>
              <li>
                Se puede declarar con comillas simples, dobles o backticks.
              </li>
            </ul>
            <pre className="bg-base-200 p-2 rounded overflow-x-auto">
              <code>const mensaje = "Hola, mundo!";</code>
            </pre>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="collapse collapse-arrow bg-base-100 text-primary">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-semibold">
            ✍️ Cómo se declara un String
          </div>
          <div className="collapse-content text-sm text-base-content">
            <pre className="bg-base-200 p-2 rounded overflow-x-auto mb-2">
              <code>
                {`const nombre = "Javier";
let saludo = 'Hola';
var frase = \`Bienvenido \${nombre}\`;`}
              </code>
            </pre>
            <p>
              Las <strong>template strings</strong> permiten interpolación con{" "}
              <code>${"{nombre}"}</code>.
            </p>
          </div>
        </div>

        {/* Slide 4 */}
        <div className="collapse collapse-arrow bg-base-100 text-primary">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-semibold">
            📘 ¿Qué es el objeto String?
          </div>
          <div className="collapse-content text-sm text-base-content">
            <p>
              Aunque los Strings son primitivos, JavaScript los convierte
              temporalmente en objetos para acceder a sus métodos.
            </p>
            <p className="mt-2">Algunos métodos útiles:</p>
            <ul className="list-disc list-inside">
              <li>
                <code>.length</code>
              </li>
              <li>
                <code>.toUpperCase()</code> / <code>.toLowerCase()</code>
              </li>
              <li>
                <code>.charAt()</code> / <code>.charCodeAt()</code>
              </li>
              <li>
                <code>.includes()</code>, <code>.replace()</code>,{" "}
                <code>.slice()</code>, etc.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
