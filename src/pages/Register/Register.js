import { useState } from "react";
import images from "~/assets/images";
import { useRegister } from "~/hooks";

const Sex = {
  male: 0,
  female: 1,
};
function Register() {
  const [data, setData] = useState({
    lastName: "",
    firstName: "",
    email: "",
    password: "",
    cPassword: "",
    dateOfBirth: "",
    phone: "",
    sex: Sex.male,
  });

  const [error, setError] = useState({
    lastName: "",
    firstName: "",
    email: "",
    password: "",
    cPassword: "",
    dateOfBirth: "",
    phone: "",
    sex: "",
  });

  const { register } = useRegister();

  const handleChange = (e) => {
    const { name } = e.target;
    let { value } = e.target;

    if (name === "sex") {
      value = Number(value);
    }
    console.log(name, value);

    setError((prev) => ({ ...prev, [name]: "" }));
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password, cPassword } = data;
    if (password !== cPassword) {
      setError((prev) => ({ ...prev, cPassword: "Mật khẩu không khớp" }));
      return;
    } else {
      setError((prev) => ({ ...prev, cPassword: "" }));
    }
    try {
      await register(data);
      alert("Đăng ký thành công");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="border-red-500 bg-gray-200   flex items-center justify-center">
      <div className="bg-gray-100 p-1 flex rounded-2xl shadow-lg max-w-4xl">
        <div className="w-1/2  md:block hidden ">
          <img
            src={images.Login}
            className="rounded-2xl object-cover h-full"
            alt="page img"
          />
        </div>
        <div className="md:w-1/2 px-5">
          <h2 className="text-2xl font-bold text-gray-700">Đăng ký</h2>
          <form
            className="mt-2"
            action="#"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block text-left text-gray-700">Họ</label>
              <input
                type="text"
                name="lastName"
                value={data.firstName}
                placeholder="Nhập vào họ"
                onChange={handleChange}
                className="w-full h-10 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block mt-2 text-left text-gray-700">Tên</label>
              <input
                type="text"
                name="firstName"
                value={data.lastName}
                placeholder="Nhập vào tên"
                onChange={handleChange}
                className="w-full h-10 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block mt-2 text-left text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={data.email}
                placeholder="Nhập vào email"
                onChange={handleChange}
                className="w-full h-10 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block mt-2 text-left text-gray-700">
                Mật khẩu
              </label>
              <input
                type="password"
                name="password"
                value={data.password}
                placeholder="Nhập vào mật khẩu"
                onChange={handleChange}
                className="w-full h-10 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none"
                autoComplete="true"
                required
              />
            </div>
            <div>
              <label className="block mt-2 text-left text-gray-700">
                Nhập lại mật khẩu
              </label>
              <input
                type="password"
                name="cPassword"
                value={data.cPassword}
                placeholder="Nhập lại mật khẩu"
                onChange={handleChange}
                className="w-full h-10 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none"
                autoComplete="true"
                required
              />
            </div>
            <div>
              <label className="block mt-2 text-left text-gray-700">
                Ngày sinh
              </label>
              <input
                type="date"
                name="dateOfBirth"
                value={data.dateOfBirth}
                onChange={handleChange}
                className="w-full h-10 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block mt-2 text-left text-gray-700">
                Số điện thoại
              </label>
              <input
                type="text"
                name="phone"
                value={data.phone}
                onChange={handleChange}
                className="w-full h-10 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none"
                required
              />
            </div>
            <div className="flex mt-2">
              <label className="block  text-left mr-4 text-gray-700">
                Giới tính
              </label>
              <div className="flex items-center me-4">
                <input
                  id="inline-radio"
                  type="radio"
                  name="sex"
                  value={Sex.male}
                  checked={data.sex === Sex.male}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  htmlFor="male"
                >
                  Nam
                </label>
              </div>
              <div className="flex items-center me-4">
                <input
                  id="inline-2-radio"
                  type="radio"
                  value={Sex.female}
                  name="sex"
                  checked={data.sex === Sex.female}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  htmlFor="female"
                >
                  Nữ
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full block bg-gray-800 hover:bg-gray-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-2"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
