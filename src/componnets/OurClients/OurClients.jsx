import React from "react";

function OurClients() {
  return (
    <section className="flex flex-col items-start px-20 py-24 w-full bg-yellow-950 max-md:px-5 max-md:max-w-full">
      <h2 className="text-4xl font-bold leading-tight text-white max-md:max-w-full">
        What our clients are saying
      </h2>
      <p className="mt-7 text-lg text-white opacity-60 w-[579px] max-md:max-w-full">
        Our clients range from individual investors, to local, international as
        well as fortune 500 companies.Our clients range from individual
        investors, to local, international as well as fortune 500 companies.
      </p>

      <div className="self-end mt-16 w-full max-w-[1196px] max-md:mt-10 max-md:max-w-full">
        <article className="flex gap-5 max-md:flex-col">
          <figure className="w-[33%] max-md:ml-0 max-md:w-full">
            <img
              src="/OurClient/clientImage.png"
              alt="Testimonial client"
              className="object-cover w-full aspect-square max-md:mt-10"
            />
          </figure>

          <div className="ml-5 w-[67%] max-md:ml-0 max-md:w-full">
            <div className="w-full max-md:mt-10 max-md:max-w-full">
              <blockquote className="mr-11 opacity-60 text-2xl leading-10 text-white max-md:mr-2.5 max-md:max-w-full">
                &quot;With the help of the hospitable staff of Al Safar and
                Partners I was able to get my work done without any hassle. The
                help I received helped me a great deal to overcome the issues
                that I faced. I was always updated about my case and my queries
                never went unanswered.
              </blockquote>

              <div className="flex flex-wrap gap-5 justify-between items-start mt-28 max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col self-start text-white">
                  <h3 className="text-2xl font-semibold leading-loose">
                    Mohammed Saif
                  </h3>
                  <p className="self-start mt-7 text-base">CEO/Company</p>
                </div>

                <div className="flex flex-col self-end mt-5">
                  <p className="self-center text-base font-medium text-yellow-950">
                    9/102 Reviews
                  </p>
                  <div className="flex gap-5 justify-between mt-6">
                    <button aria-label="Previous testimonial">
                      <img
                        src="/OurClient/leftArrow.png"
                        alt="Previous"
                        className="object-contain shrink-0 aspect-square w-[67px] cursor-pointer"
                      />
                    </button>
                    <button aria-label="Next testimonial">
                      <img
                        src="/OurClient/rightArrow.png"
                        alt="Next"
                        className="object-contain shrink-0 aspect-square w-[67px] cursor-pointer"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default OurClients;
