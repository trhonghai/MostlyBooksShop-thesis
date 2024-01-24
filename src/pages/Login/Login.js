import images from "~/assets/images";
function Login() {
  return (
    <div className="border-red-500 bg-gray-200  flex items-center justify-center">
      <div className="bg-gray-100 p-1 flex rounded-2xl shadow-lg max-w-4xl">
        <div className="w-1/2 h-full md:block hidden ">
          <img src={images.Login} className="rounded-2xl" alt="page img" />
        </div>
        <div className="md:w-1/2 px-5">
          <h2 className="text-2xl font-bold text-gray-700">Đăng nhập</h2>
          {/* <p className="text-sm mt-4 text-gray-700">
            If you have an account, please login
          </p> */}
          <form className="mt-6" action="#" method="POST">
            <div>
              <label className="block text-left text-gray-700">Email</label>
              <input
                type="email"
                name=""
                id=""
                placeholder="Nhập vào địa chỉ Email"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                // autofocus
                // autocomplete
                required
              />
            </div>

            <div className="mt-4">
              <label className="block text-left text-gray-700">Mật khẩu</label>
              <input
                type="password"
                s
                name=""
                id=""
                placeholder="Nhập vào mật khẩu"
                minlength="6"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none"
                required
              />
            </div>

            <div className="text-right mt-2">
              <a
                href="#"
                className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
              >
                Quên mật khẩu?
              </a>
            </div>

            <button
              type="submit"
              className="w-full block bg-gray-800 hover:bg-gray-400 focus:bg-grey-900 text-white font-semibold rounded-lg
                px-4 py-3 mt-6"
            >
              Đăng nhập
            </button>
          </form>

          <div className="text-sm flex justify-between items-center mt-3">
            <p>Chưa có tài khoản?</p>
            <button className="py-2 px-5 ml-3 bg-white border rounded-xl hover:scale-110 duration-300 border-gray-800  ">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
