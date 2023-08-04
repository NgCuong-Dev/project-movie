import { Button, Checkbox, Form, Input, Select, message } from "antd";
import bg_register from "../../Assets/background_register.jpg";
import { userServ } from "../../service/userService";
import { useNavigate } from "react-router-dom";
import { localUserServ } from "../../service/localService";
import { useDispatch } from "react-redux";
import { SET_USER_REGISTER } from "../../Redux/Contant/userContant";
const RegisterPage = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const onFinish = (values) => {
    console.log(values);
    userServ
      .register(values)
      .then((res) => {
        message.success("Đăng Ký Thành Công");
        dispatch({
          type: SET_USER_REGISTER,
          payload: res.data.content,
        });
        localUserServ.setRegister(res.data.content);
        navigate("/");
      })
      .catch((err) => {
        message.error(err.response.data.content);
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div
      className=" mx-auto p-20 w-screen  lg:w-full h-full sm:h-full "
      style={{
        position: "relative",
        background: `url(${bg_register})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className=" container flex justify-center items-center p-20 bg-white font-bold rounded-2xl ">
        <h1
          style={{
            position: "absolute",
            fontSize: "30px",
            left: "48%",
            top: "10%",
            zIndex: "9999999",
          }}
        >
          Đăng Ký
        </h1>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 24,
          }}
          className="w-full"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
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
          {/* ----------------------------- */}
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
          {/* -------------------------------------- */}
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
          {/* ---------------------------------------- */}
          <Form.Item
            label="Số Điện Thoại"
            name="soDt"
            rules={[
              {
                required: true,
                message: "Please input your telephone number!",
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
          {/* -------------------------------------------- */}
          <Select
            showSearch
            style={{
              width: 200,
            }}
            placeholder="Code Group"
            name="maNhom"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={[
              {
                value: "GP01",
                label: "GP01",
              },
              {
                value: "GP02",
                label: "GP02",
              },
              {
                value: "GP03",
                label: "GP03",
              },
              {
                value: "GP04",
                label: "GP04",
              },
              {
                value: "GP05",
                label: "GP05",
              },
              {
                value: "GP06",
                label: "GP06",
              },
              {
                value: "GP07",
                label: "GP07",
              },
            ]}
          />
          {/* ----------------------------------------- */}
          <Form.Item
            label="Họ Tên"
            name="hoTen"
            rules={[
              {
                required: true,
                message: "Please input your fullname 6!",
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
          {/* ------------------------------------------- */}
          <Form.Item
            wrapperCol={{
              offset: 0,
              span: 24,
            }}
          >
            <Button danger type="primary" htmlType="submit">
              Đăng Ký
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default RegisterPage;
