import confetti from "canvas-confetti";
import { useRef, useState } from "react";

import { Button } from "src/components/Button";
import { Dialog } from "src/components/Dialog";

enum Step {
  INITIAL,
  REWARD_SELECTION,
  CONFIRMATION_DIALOG,
}

const HomePage = () => {
  const [currentStep, setCurrentStep] = useState<Step>(Step.INITIAL);
  const [showDialog, setShowDialog] = useState(false);
  const leastDestructiveRef = useRef<HTMLButtonElement>(null);

  const openDialog = () => {
    if (!showDialog) {
      setShowDialog(true);
    }
  };

  const closeDialog = () => {
    if (showDialog) {
      setShowDialog(false);
    }
  };

  switch (currentStep) {
    case Step.INITIAL:
      closeDialog();

      break;
    case Step.REWARD_SELECTION:
      break;
    case Step.CONFIRMATION_DIALOG:
      confetti({
        particleCount: 300,
      });
      openDialog();

      break;
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col max-w-xs min-h-screen p-4 space-y-4 bg-white border border-gray-300 sm:min-h-full">
        <div className="flex flex-col items-center justify-center flex-grow text-center">
          <img alt="" className="w-40 h-40" src="/assets/medal.png" />
          <h1 className="font-serif text-2xl font-black leading-9 text-gray-900">
            <span className="text-orange-500">Fidelizar</span> cliente
          </h1>
          <p className="text-sm leading-6 text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            consectetur mauris ut ex fermentum.
          </p>
        </div>
        <form className="p-4 space-y-4 bg-orange-100 border border-orange-300">
          {currentStep === Step.INITIAL && (
            <>
              <div className="space-y-1">
                <label
                  className="text-sm font-medium leading-6 text-gray-900"
                  htmlFor="amountPaid"
                >
                  Telefone celular{" "}
                  <span className="font-normal text-gray-800">
                    (apenas números)
                  </span>
                </label>
                <div className="grid grid-cols-8">
                  <input
                    id="amountPaid"
                    className="col-span-5 p-4 font-mono text-sm leading-6 text-gray-900 border border-r-0 border-gray-500 focus:border-orange-500 focus:shadow-outline-orange"
                    type="text"
                  />
                  <Button
                    className="col-span-3"
                    iconName="search"
                    onClick={() => {
                      setCurrentStep(Step.REWARD_SELECTION);
                    }}
                  />
                </div>
              </div>
            </>
          )}
          {[Step.REWARD_SELECTION, Step.CONFIRMATION_DIALOG].includes(
            currentStep
          ) && (
            <>
              <Dialog
                controls={
                  <>
                    <Button
                      isExpanded
                      type="button"
                      onClick={() => {
                        setCurrentStep(Step.INITIAL);
                      }}
                    >
                      Atualizar cadastro
                    </Button>
                    <Button
                      ref={leastDestructiveRef}
                      isExpanded
                      isSecondary
                      type="button"
                      onClick={() => {
                        setCurrentStep(Step.INITIAL);
                      }}
                    >
                      Retornar ao início
                    </Button>
                  </>
                }
                isOpen={showDialog}
                leastDestructiveRef={leastDestructiveRef}
                title={<span className="text-orange-500">Parabéns!</span>}
              >
                <img
                  alt=""
                  className="w-40 h-40 mx-auto"
                  src="/assets/handshake.png"
                />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                consectetur mauris ut ex fermentum.
              </Dialog>
              <p className="text-sm font-medium leading-6 text-gray-900">
                Telefone celular:{" "}
                <span className="font-mono text-gray-800">(11) 99164-7998</span>
              </p>
              <div className="border-t border-orange-300" />
              <div className="space-y-1">
                <label
                  className="text-sm font-medium leading-6 text-gray-900"
                  htmlFor="amountPaid"
                >
                  Valor pago{" "}
                  <span className="font-normal text-gray-800">
                    (apenas reais)
                  </span>
                </label>
                <div className="grid grid-cols-8">
                  <input
                    id="amountPaid"
                    className="col-span-4 p-4 font-mono text-sm leading-6 text-gray-900 border border-gray-500 focus:border-orange-500 focus:shadow-outline-orange"
                    type="text"
                  />
                </div>
              </div>
              <Button
                isExpanded
                type="button"
                onClick={() => {
                  setCurrentStep(Step.CONFIRMATION_DIALOG);
                }}
              >
                Fidelizar cliente
              </Button>
            </>
          )}
        </form>
      </div>
    </main>
  );
};

export default HomePage;
