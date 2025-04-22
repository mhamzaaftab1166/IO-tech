import * as React from "react";
import Image from "next/image";
import { FaTwitter, FaFacebookSquare, FaGooglePlus } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { subscribeEmail, resetStatus } from "@/store/features/emailSubscribe/emailSubscribeSlice";

function Footer() {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.emailSubscribe);

  const [isInputVisible, setIsInputVisible] = React.useState(false);
  const [toast, setToast] = React.useState(null);

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: (values) => {
      dispatch(subscribeEmail(values.email));
    },
  });
  React.useEffect(() => {
    if (success) {
      setToast({ type: "success", message: "Subscribed successfully!" });
      formik.resetForm();
      setIsInputVisible(false);
      dispatch(resetStatus());
    }
    if (error) {
      setToast({ type: "error", message: error });
      dispatch(resetStatus());
    }
  }, [success, error, dispatch]);

  React.useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleToggle = () => {
    setIsInputVisible((prev) => !prev);
    if (isInputVisible) formik.resetForm();
  };

  return (
    <div className="relative flex flex-col justify-center items-center px-5 md:px-20 py-12 w-full bg-yellow-950 mt-2">

      {toast && (
        <div
          className={`
            fixed top-4 right-4 px-4 py-2 rounded shadow
            ${toast.type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"}
          `}
        >
          {toast.message}
        </div>
      )}

      <div className="flex flex-col w-full max-w-[1171px]">
        <div className="flex flex-col md:flex-row justify-end items-center gap-5 md:gap-7">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex flex-col bg-white rounded-md px-4 py-1.5 mt-2 sm:mt-0">
              <div className="flex items-center gap-4">
                {isInputVisible ? (
                  <div className="flex flex-col">
                    <input
                      name="email"
                      type="email"
                      placeholder="Enter email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="text-sm text-black focus:outline-none"
                    />
                    {formik.touched.email && formik.errors.email && (
                      <div className="bg-white text-red-500 text-sm mt-1">
                        {formik.errors.email}
                      </div>
                    )}
                  </div>
                ) : (
                  <div
                    className="text-base text-black cursor-pointer hover:opacity-80 transition"
                    onClick={handleToggle}
                  >
                    Email
                  </div>
                )}

                <button
                  type="button"
                  onClick={isInputVisible ? formik.handleSubmit : handleToggle}
                  disabled={loading}
                  className={`
                    flex items-center justify-center px-5 py-1.5 text-xs font-medium 
                    text-white rounded-lg cursor-pointer transition
                    ${loading ? "bg-gray-400" : "bg-yellow-950 hover:opacity-90"}
                  `}
                >
                  {loading && (
                    <span className="animate-spin h-4 w-4 mr-2 border-t-2 border-white rounded-full"></span>
                  )}
                  {loading ? "Submitting..." : "Subscribe"}
                </button>
              </div>
            </div>

            <div className="text-base text-white leading-loose cursor-pointer hover:opacity-80 transition">
              Contacts
            </div>
            <div className="flex gap-4 text-lg text-white">
              <FaTwitter className="cursor-pointer hover:opacity-80 transition" />
              <FaFacebookSquare className="cursor-pointer hover:opacity-80 transition" />
              <FaGooglePlus className="cursor-pointer hover:opacity-80 transition" />
            </div>
          </div>
        </div>

        <div className="relative w-full h-6 mt-10">
          <Image
            src="/Footer/Divider.png"
            alt="Divider"
            layout="fill"
            objectFit="contain"
            className="stroke-[2px] stroke-white"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-12 text-base text-white leading-loose gap-6">
          <div className="flex flex-wrap gap-6">
            {["About","Our Strategy","Our Advantages","Social Responsibility","Our Services"].map((item, idx) => (
              <div key={idx} className="cursor-pointer hover:opacity-80 transition">
                {item}
              </div>
            ))}
          </div>
          <div className="text-sm md:text-right">© 2024. All rights reserved.</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
