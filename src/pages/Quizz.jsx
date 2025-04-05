const Quizz = () => {
  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-primary mb-6">
        ¡Desafío Quizizz!
      </h1>
      <iframe
        src="https://quizizz.com/join/quiz/67ec35ab82d458a948fd33b3/start"
        width="100%"
        height="600"
        className="rounded-xl shadow-lg max-w-4xl w-full"
        allowFullScreen
        title="Quizizz Integrado"
      />
    </div>
  );
};

export default Quizz;
