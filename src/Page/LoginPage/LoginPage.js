import { Button, Form, Input, message } from "antd";
import Background_login from "../../Assets/Background_login.jpg";
import { useNavigate } from "react-router-dom";
import { userServ } from "../../service/userService";
import { useDispatch } from "react-redux";
import animate_login from "../../Assets/animate_login.json";
import Lottie from "lottie-react";
import {
  setLoginAction,
  setLoginActionServ,
} from "../../Redux/Action/userAction";

const LoginPage = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  // const onFinish = (values) => {
  //   userServ
  //     .login(values)
  //     .then((res) => {
  //       //dispatch data
  //       dispatch(setLoginAction(res.data.content));
  //       //switch page to homepage
  //       navigate("/");
  //     })
  //     .catch((err) => {
  //       message.error("Đăng Nhập Thất Bại");
  //     });
  // };
  const onFinishThunk = (values) => {
    let handleSuccess = () => {
      message.success("Đăng Nhập Thành Công");
      navigate("/");
    };
    dispatch(setLoginActionServ(values, handleSuccess));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div
      style={{
        backgroundImage: `url(${Background_login})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="w-screen h-screen p-20 flex justify-center items-center lg:w-full sm:flex-col"
    >
      <div
        style={{ opacity: "0.8" }}
        className="container bg-gray-300 p-10 rounded-2xl flex"
      >
        <div className="w-1/2 h-full">
          <Lottie animationData={animate_login} loop={true} />
        </div>
        <div className="w-1/2 h-full">
          <Form
            name="basic"
            labelCol={{
              span: 0,
            }}
            wrapperCol={{
              span: 0,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinishThunk}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
            className="font-bold w-full"
          >
            <Form.Item
              label="Username"
              name="taiKhoan"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="matKhau"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 0,
                span: 24,
              }}
            >
              <Button
                style={{ color: "white", background: "black" }}
                type="primary"
                htmlType="submit"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
