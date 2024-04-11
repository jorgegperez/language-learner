import { Button, Form, Input, Select } from "antd";
import { useGenerateExercise, useLearningForm } from "../../hooks";
import { Wrapper } from "./LearningForm.styles";
import { ELevel, IFormData } from "../../common";
import { useMemo } from "react";

export const LearningForm = () => {
  const { step, setStep } = useLearningForm();
  const { generateExercise } = useGenerateExercise();
  const [form] = Form.useForm();

  const options = useMemo(
    () =>
      Object.values(ELevel).map((level) => ({
        label: level,
        value: level,
      })),
    []
  );

  if (step !== 0) return null;

  const handleOnFinish = (values: IFormData) => {
    generateExercise(values);
    setStep(1);
  };

  return (
    <Wrapper>
      <h2>Select your desired learning options</h2>
      <Form form={form} layout="vertical" onFinish={handleOnFinish}>
        <Form.Item
          name="level"
          label="Select your level"
          rules={[
            { required: true, message: "Please select your Spanish level" },
          ]}
        >
          <Select placeholder="Select your level" options={options} />
        </Form.Item>
        <Form.Item name="topic" label="Select a topic (optional)">
          <Input placeholder="Enter a topic you would like to learn of" />
        </Form.Item>
      </Form>
      <Button type="primary" onClick={form.submit}>
        Start Learning
      </Button>
    </Wrapper>
  );
};
