import { Button, Form, Input, Modal } from "antd";
import { TitleWrapper, Wrapper } from "./Toolbar.styles";
import { useConfigModal } from "../../hooks";

export const Toolbar = () => {
  const { isOpen, setIsOpen, setApiKey } = useConfigModal();
  const [form] = Form.useForm();
  const handleOnFinish = (values: { apiKey: string }) => {
    setApiKey(values.apiKey);
    setIsOpen(false);
  };

  return (
    <>
      <Wrapper>
        <TitleWrapper>SpanishMate.ai</TitleWrapper>
        <Button onClick={() => setIsOpen(true)} />
      </Wrapper>
      <Modal
        centered
        title="Configuration"
        closable={false}
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        okText="Save"
        onOk={form.submit}
      >
        <Form form={form} layout="vertical" onFinish={handleOnFinish}>
          <Form.Item name="apiKey" label="Enter your OpenAI Api Key">
            <Input placeholder="Enter your key" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
