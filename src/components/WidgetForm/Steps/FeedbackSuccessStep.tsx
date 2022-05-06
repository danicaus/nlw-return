import { CloseButton } from "../../CloseButton";
import checkImg from '../../../assets/images/success.svg';

interface FeedbackSuccessStepProps {
  onFeedbackRestart: () => void
}

export function FeedbackSuccessStep({onFeedbackRestart}: FeedbackSuccessStepProps) {
  return (
    <>
      <header >
        <CloseButton />
      </header>

      <div className="">
        <img src={checkImg} alt="Marcação de check branco com fundo verde" />
      </div>

      <span className="text-xl mt-2">Agradecemos seu feedback!</span>
      
      <button
        type="button"
        onClick={onFeedbackRestart}
        className="py-2 px-6 my-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
      >
        Quero enviar outro
      </button>

    </>
  )
}