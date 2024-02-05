import { Button, Form, Input, Space, DatePicker } from "antd";
import { CreateTodo } from "./useTodoHooks";

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

export function TodoForm({onCreateClicked}:{onCreateClicked: (todo: CreateTodo) => void}){
    const [form] = Form.useForm();
    const onFinish = (todo: CreateTodo) => {
        onCreateClicked(todo);
        form.resetFields();
    };
    return (
        <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
      >
        <Form.Item name="description" label="Description" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="date"
          rules={[{ required: true }]}
          label="Date" 
        >
          <DatePicker/>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Space>
        </Form.Item>
      </Form>
    )
}