import { ArrowLeft } from "phosphor-react";
import { useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType
  onFeedbackRestartRequested: () => void
  onFeedbackSent: () => void
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSent
}: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState('')
  const feedbackInfo = feedbackTypes[feedbackType];

  function handleSubmitFeedback(event: React.FormEvent) {
    event.preventDefault();
    console.log("conteúdo: ", comment, screenshot);
    onFeedbackSent();
  }

  return (
    <>
      <header >
        <button 
          onClick={onFeedbackRestartRequested} 
          type="button" 
          className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100"
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2" >
          <img src={feedbackInfo.image.source} alt={feedbackInfo.image.alt} className="w-6 h-6" />
          {feedbackInfo.title}
        </span>
        <CloseButton />
      </header>
      
      <form className="mt-4 w-full" onSubmit={handleSubmitFeedback}>
        <textarea 
          className="min-w-[384-px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-zinc-700 scrollbar-track-transparent scrollbar-thin" 
          placeholder="Conte com detalhes o que está acontecendo..."
          onChange={event => setComment(event.target.value)}
          value={comment}
        />
        <footer className="flex gap-2 my-2 w-full">
          <ScreenshotButton 
            onScreenshotTook={setScreenshot}
            screenshot={screenshot}
          />
          <button
            type="submit"
            disabled={comment.length === 0}
            className="p-2 bg-brand-500 rounded-md border-transparent flex grow shrink-0 justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
          >
            Enviar feedback
          </button>
        </footer>
      </form>
      

    </>
  );
}