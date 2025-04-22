import * as React from "react";
import Image from "next/image";
import { FaTwitter, FaFacebookSquare, FaGooglePlus } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";

function Footer() {
  const [isInputVisible, setIsInputVisible] = React.useState(false);

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Subscribed with:", values.email);
      resetForm();
      setIsInputVisible(false);
    },
  });

  const handleToggle = () => {
    setIsInputVisible((prev) => !prev);
    // Reset errors when toggling off
    if (isInputVisible) {
      formik.resetForm();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center px-5 md:px-20 py-12 w-full bg-yellow-950 mt-2">
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

                <div
                  className="flex items-center justify-center px-5 py-1.5 text-xs font-medium text-white rounded-lg bg-yellow-950 cursor-pointer hover:opacity-90 transition"
                  onClick={isInputVisible ? formik.handleSubmit : handleToggle}
                >
                  Subscribe
                </div>
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
            {[
              "About",
              "Our Strategy",
              "Our Advantages",
              "Social Responsibility",
              "Our Services",
            ].map((item, idx) => (
              <div
                key={idx}
                className="cursor-pointer hover:opacity-80 transition"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="text-sm md:text-right">
            © 2024 . All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
