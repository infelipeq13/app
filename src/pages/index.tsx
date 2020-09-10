import confetti from "canvas-confetti";
import { useRef, useState } from "react";

import { Button } from "src/components/Button";
import { Box } from "src/components/Box";
import { Dialog } from "src/components/Dialog";
import { Divider } from "src/components/Divider";
import { Field } from "src/components/Field";
import { Illustration } from "src/components/Illustration";
import { Layout } from "src/components/Layout";

enum Step {
  INITIAL,
  REWARD_SELECTION,
  CONFIRMATION_DIALOG,
  EDIT_USER,
}

const HomePage = () => {
  const leastDestructiveRef = useRef<HTMLButtonElement>(null);
  const [currentStep, setCurrentStep] = useState<Step>(Step.INITIAL);
  const [showDialog, setShowDialog] = useState(false);

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
    <Layout
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur mauris ut ex fermentum."
      illustrationName={currentStep === Step.EDIT_USER ? "edit-user" : "medal"}
      title={
        currentStep === Step.EDIT_USER ? (
          <>
            <span className="text-orange-500">Atualizar</span> cadastro
          </>
        ) : (
          <>
            <span className="text-orange-500">Fidelizar</span> cliente
          </>
        )
      }
    >
      <Box color="orange">
        <form className="space-y-4">
          {currentStep === Step.INITIAL && (
            <Field
              addon={
                <Button
                  className="col-span-3"
                  iconName="search"
                  onClick={() => {
                    setCurrentStep(Step.REWARD_SELECTION);
                  }}
                />
              }
              columnSpan={5}
              hint="apenas números"
              isNumeric
              label="Telefone celular"
              name="mobileNumber"
            />
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
                        setCurrentStep(Step.EDIT_USER);
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
                <Illustration name="handshake" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                consectetur mauris ut ex fermentum.
              </Dialog>
              <span className="text-sm font-medium leading-6 text-gray-900">
                Telefone celular:{" "}
                <span className="font-mono text-gray-800">(11) 99164-7998</span>
              </span>
              <Divider borderColor="orange" />
              <Field
                columnSpan={4}
                hint="apenas reais"
                isNumeric
                label="Valor pago"
                name="amountPaid"
              />
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
          {currentStep === Step.EDIT_USER && (
            <>
              <Field
                columnSpan={5}
                hint="apenas números"
                isNumeric
                label="Telefone celular"
                name="mobileNumber"
              />
              <Field hint="recomendado" label="Nome completo" name="fullName" />
              <Field
                columnSpan={4}
                hint="recomendado"
                isNumeric
                label="Aniversário"
                name="birthday"
              />
              <Button
                isExpanded
                type="button"
                onClick={() => {
                  setCurrentStep(Step.INITIAL);
                }}
              >
                Atualizar cadastro
              </Button>
            </>
          )}
        </form>
      </Box>
      {currentStep === Step.EDIT_USER && (
        <Button
          isExpanded
          isSecondary
          type="button"
          onClick={() => {
            setCurrentStep(Step.INITIAL);
          }}
        >
          Retornar ao início
        </Button>
      )}
    </Layout>
  );
};

export default HomePage;
