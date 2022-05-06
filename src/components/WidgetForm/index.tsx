import { useState } from "react";

import { CloseButton } from "../CloseButton";
import bug from "../../assets/images/bug.svg";
import idea from "../../assets/images/idea.svg";
import thought from "../../assets/images/thought.svg";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bug,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: idea,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thought,
      alt: "Imagem de uma nuvem de pensamento azul",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackType(null)
    setFeedbackSent(false)
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestart={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep 
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}
      

      <footer className="text-neutral-400 text-xs">
        Feito com ❤ por DaniCaus na{" "}
        <a
          className="underline underline-offset-2"
          href="https://rocketseat.com.br"
        >
          NLW Return
        </a>
      </footer>
    </div>
  );
}
