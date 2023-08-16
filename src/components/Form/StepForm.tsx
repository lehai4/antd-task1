import { Steps } from "antd";
import { CSSProperties } from "react";
import CheckIcon from "@mui/icons-material/Check";

import { SvgIcon } from "@mui/material";
type StepFormProps = {
  currentStep: number;
  titleStart: string;
  titleEnd: string;
  handleChangeStep: () => void;
  styles: CSSProperties;
};
const StepForm = ({
  currentStep,
  titleStart,
  titleEnd,
  styles,
  handleChangeStep,
}: StepFormProps) => {
  return (
    <Steps style={styles} current={currentStep} onChange={handleChangeStep}>
      <Steps.Step
        title={titleStart}
        icon={
          currentStep === 1 && (
            <span
              className="flex items-center rounded-full bg-blue-500"
              style={{ padding: 7 }}
            >
              <SvgIcon
                component={CheckIcon}
                style={{ color: "white", fontSize: 15 }}
              />
            </span>
          )
        }
      />
      <Steps.Step title={titleEnd} style={{ marginRight: 20 }} />
    </Steps>
  );
};

export default StepForm;
