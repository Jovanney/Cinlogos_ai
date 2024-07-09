import { createContext, useCallback, useEffect, useRef, useState } from "react";
import StepFormsContainer from "./step-form-container";
import StepFormMenuButton from "./step-form-menu-button";
import { multiModalType } from "./form-types";
import { Button } from "../button";

export const CurrentFormRef = createContext<React.MutableRefObject<
  HTMLFormElement | undefined
> | null>(null);

const MultiStepForm = ({
  Forms,
  continueState,
  goToForm,
  disableControls,
  setGoToForm,
}: {
  Forms: multiModalType;
  continueState: [boolean, (x: boolean) => void];
  goToForm?: number;
  setGoToForm: (x: number | undefined) => void;
  disableControls: boolean;
}) => {
  const [canContinue, setContinue] = continueState;
  const [currentForm, setCurrentForm] = useState(1);
  const [previous, setPrevious] = useState(1);
  const [goToFormTemp, setGTFTemp] = useState(false);
  const currentFormRef = useRef<HTMLFormElement>();

  const footerButtosHandler = useCallback(
    (
      e: React.MouseEvent<HTMLParagraphElement | HTMLButtonElement, MouseEvent>,
      value: number
    ) => {
      e.currentTarget.blur();

      //Waits till the sliding animations end to let change to another form
      if (currentForm === previous)
        if (value < 0 && currentForm + value >= 1)
          //If value is negative
          setCurrentForm((prev) => prev + value);
        //If value is positive
        else if (value > 0 && !canContinue)
          currentFormRef.current?.requestSubmit();
    },
    [canContinue, currentForm, previous]
  );

  function setTempGTF(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.currentTarget.blur();
    setGTFTemp(true);
  }

  useEffect(() => {
    if (
      canContinue &&
      previous === currentForm &&
      currentForm + 1 <= Forms.length
    ) {
      setContinue(false);
      setCurrentForm((prev) => prev + 1);
    }
  }, [Forms.length, canContinue, currentForm, previous, setContinue]);

  return (
    <main
      className="h-full w-full min-w-375 flex flex-col lg:flex-row lg:p-4  
                         lg:rounded-2xl  sm-lg:overflow-hidden shadow-2xl"
    >
      <section className="w-full h-40 min-w-fit max-h-40 p-4 lg:p-8 lg:h-full lg:max-w-[10%] lg:max-h-full lg:rounded-inherit font-medium">
        <div className="m-auto w-dynamic-w-mobile h-[42%] lg:h-auto lg:w-full lg:py-4">
          <nav className="h-full">
            <ul className="sm-lg:flex sm-lg:items-center sm-lg:flex-row sm-lg:h-full sm-lg:justify-center">
              {Forms.map(({ formLabel }, index) => (
                <StepFormMenuButton
                  key={formLabel}
                  number={index + 1}
                  curretNumber={goToForm || currentForm}
                  title={formLabel.toUpperCase()}
                />
              ))}
            </ul>
          </nav>
        </div>
      </section>
      <section className="flex flex-col justify-between grow lg:pl-4 lg:overflow-hidden">
        <section className="grow p-4 relative">
          <div className="h-full sm-lg:w-dynamic-w-mobile relative m-auto sm-lg:max-w-lg">
            <div className="w-full sm-lg:h-[calc(100%+5.5rem)] lg:h-full mx-auto absolute sm-lg:mt-[-5.5rem]">
              <CurrentFormRef.Provider value={currentFormRef}>
                <StepFormsContainer
                  forms={Forms}
                  currentNumber={currentForm}
                  previousHook={[previous, setPrevious]}
                  setGoToForm={setGoToForm}
                  goToForm={goToForm}
                  gtfTemp={goToFormTemp}
                  setGtfTemp={setGTFTemp}
                />
              </CurrentFormRef.Provider>
            </div>
          </div>
        </section>
        {!disableControls && (
          <footer className="">
            <div
              className="flex flex-row justify-between h-full w-full lg:w-dynamic-w-mobile 
                                    lg:mx-auto lg:float-none lg:max-w-lg select-none"
            >
              {currentForm !== 1 && !goToForm && (
                <Button>
                  <p
                    tabIndex={0}
                    className="cursor-pointer font-bold outline-none text-marine-blue hover:text-dark-blue
                                               focus:scale-105 focus:text-marine-blue hover:underline focus:underline"
                    onClick={(e) => footerButtosHandler(e, -1)}
                  >
                    Go back
                  </p>
                </Button>
              )}
              <div className="flex items-center h-full"></div>
              <Button
                className="font-bold"
                disabled={canContinue === true || currentForm !== previous}
                onClick={(e) =>
                  goToForm ? setTempGTF(e) : footerButtosHandler(e, 1)
                }
              >
                {goToForm
                  ? "Confirm change"
                  : currentForm === Forms.length
                  ? "Confirm"
                  : "Next Step"}
              </Button>
            </div>
          </footer>
        )}
      </section>
    </main>
  );
};

export default MultiStepForm;
