import Link from "next/link";
import React from "react";
import { IoIosAirplane } from "react-icons/io";
import { IoChevronBackSharp } from "react-icons/io5";
type Props = {};

const ResultPage = (props: Props) => {
  return (
    <div className="container flex flex-col items-center mx-auto">
      <div className="mt-4 mb-4 w-full">
        {" "}
        {/* Back to Home */}
        <Link href="/" className="flex flex-row items-center space-x-2">
          <IoChevronBackSharp className="text-[#ff6f2a] hover:text-[#d8581d] w-6 h-6" />
          <p className="text-[#ff6f2a] hover:text-[#d8581d] text-lg">
            Back to Home
          </p>
        </Link>
      </div>
      <div className="mt-4 mb-4 w-full flex flex-col items-center space-y-4">
        {" "}
        {/* result */}
        <div className="h-52 bg-fuchsia-600 w-full  max-w-6xl"></div>{" "}
        {/* prediction box */}
        <div className="w-full max-w-6xl flex flex-col space-y-6">
          {" "}
          {/* flight cards */}
          <div className="">
            <div className="max-w-full bg-white dark:bg-gray-700 flex flex-col rounded overflow-hidden shadow-lg">
              <div className="flex flex-row items-baseline flex-nowrap bg-gray-100 dark:bg-gray-900 p-2">
                <IoIosAirplane className="text-gray-500" />
                <h1 className="ml-2 uppercase font-bold text-gray-500">
                  departure
                </h1>
                <p className="ml-2 font-normal text-gray-500">
                  Wednesday 18 Aug
                </p>
              </div>
              <div className="mt-2 flex justify-start bg-white dark:bg-gray-700 p-2">
                <div className="flex mx-2 ml-6 h8 px-2 flex-row items-baseline rounded-full bg-gray-100 dark:bg-gray-900 p-1">
                  <IoIosAirplane className="text-gray-500" />
                  <p className="font-normal text-sm ml-1 text-gray-500">
                    Economy
                  </p>
                </div>
              </div>
              <div className="mt-2 flex sm:flex-row mx-6 sm:justify-between flex-wrap ">
                <div className="flex flex-row place-items-center p-2">
                  <img
                    alt="Qatar Airways"
                    className="w-10 h-10"
                    src="data:image/png;base64,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"
                    style={{
                      opacity: 1,
                      transformOrigin: "0% 50% 0px",
                      transform: "none",
                    }}
                  />
                  <div className="flex flex-col ml-2">
                    <p className="text-md dark:text-white font-bold">
                      Qatar Airways
                    </p>
                    <p className="text-xs dark:text-white">QR1456</p>
                    <div className="text-xs dark:text-white">2*23kg</div>
                  </div>
                </div>

                <div className="flex flex-col p-2">
                  <p className="font-bold">18:25</p>
                  <p className="">
                    <span className="font-bold">HRE</span> Harare
                  </p>
                  <p className="">Zimbabwe</p>
                </div>
                <div className="flex flex-col flex-wrap p-2">
                  <p className="font-bold">19:25</p>
                  <p className="dark:text-gray-200">
                    <span className="font-bold">LUN</span> Lusaka
                  </p>
                  <p className="dark:text-gray-200">Zambia</p>
                </div>
              </div>
              <div className="mt-4 bg-gray-100 dark:bg-gray-900 flex flex-row flex-wrap md:flex-nowrap justify-between items-baseline">
                <div className="flex mx-6 py-4 flex-row flex-wrap justify-between items-center w-full">
                  <div className="flex space-x-2">
                    <IoIosAirplane className="w-12 h-10 p-2 mx-2 self-center my-btn-color rounded-full fill-current text-white" />
                    <div className="text-sm mx-2 flex flex-col">
                      <p className="">Standard Ticket</p>
                      <p className="font-bold">$404.73</p>
                      <p className="text-xs text-gray-500">Price per adult</p>
                    </div>
                  </div>
                  <button className="w-32 h-11 rounded flex my-btn-color mx-2 justify-center place-items-center">
                    <div className="text-white">Book</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="max-w-full bg-white dark:bg-gray-700 flex flex-col rounded overflow-hidden shadow-lg">
              <div className="flex flex-row items-baseline flex-nowrap bg-gray-100 dark:bg-gray-900 p-2">
                <IoIosAirplane className="text-gray-500" />
                <h1 className="ml-2 uppercase font-bold text-gray-500">
                  departure
                </h1>
                <p className="ml-2 font-normal text-gray-500">
                  Wednesday 18 Aug
                </p>
              </div>
              <div className="mt-2 flex justify-start bg-white dark:bg-gray-700 p-2">
                <div className="flex mx-2 ml-6 h8 px-2 flex-row items-baseline rounded-full bg-gray-100 dark:bg-gray-900 p-1">
                  <IoIosAirplane className="text-gray-500" />
                  <p className="font-normal text-sm ml-1 text-gray-500">
                    Economy
                  </p>
                </div>
              </div>
              <div className="mt-2 flex sm:flex-row mx-6 sm:justify-between flex-wrap ">
                <div className="flex flex-row place-items-center p-2">
                  <img
                    alt="Qatar Airways"
                    className="w-10 h-10"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAADeUExURUxpcXN+iXN+iXR/ilwEMnN9iVwFMlwEMmMvTVwJM3SCjHSCjHSBi3R/iXN+iVwFMlwFMnN/inN+iVoALXOAinR/inSAilwFMXN/inR/iXN/ilwFMVwIM3N/ilsHMnN+iVwFMnN/inR+iVwFMlwHMlsEMXN/iVwGMnN+iVwFMnN/iXN/iVwFMVwFMnN+iVwFMlwEMXSEjXWFjlwFMl4QOVwHM1wFMlwFMlwFMl0KNWIiR2dAXG9pemhGYWtWbGhDXmpQaGhGYW9oeWhGYXBtfWU7V1wEMnN+iVwGM3N8h4sxaZgAAABGdFJOUwD89wn9BPn+AQMTKB1s7fDnunj+40FMeIGMrxwxVgoxKMY50VkTlKTZls+dTdymr8Vg/kE5g2O8i2/8+vi4+uhkKNachxWwk6uEAAAGsklEQVRYw+1Ya3eiSBDtCDTgC3yiAVEDiviIJD6TTDIzu3s6+P//0FY1KmpAnUk+7Jmz9S0nnkt13Vu3qpuQ/+MPDlVVla9DU1T1a5OD3DpPK4uoXwNHiO0GjDnmVwAinGnoTJxaRPkaOMvTGPU6UEflK+DmU3ELh8f9FOYOTsbDwh/K53SDB7SmosyCGYeKdGPan0jP9ABu4iooaX5ca+EwI/HX0kkoEKdwvTVlTDNsotpwWmLPfJ2xyVPvN7NTlyAUNgXh2YDWcz1A03wrrYZ3BYiHVqter91htHP5rCApMd48ALjJmPPSc6caY3Q6tkmychQiVN9v3uO4yRQHw1K/kOfCxdN6sszoAnOzx5AbVNIwiUIS+llRsGQk/xCliBlidllhlx+msNQgvQD71lpPAI2uMLkkzShnZMS/JEEOnRXA6Us46jIADTLd76SbjZJv30FO7Vwuf5jWQTVUgwKIb5OOj0dlDtKaImiF1IaZqGg3mUyxWB0MhsNuFKVS6fb+vt/4EYRw2g6ZrRBXXI1VQlKdUCKFIy6OWClWq9Xh4IXKzJmRscOQlemcXDKEbK1VKJcbGOUykrLjRMIDmKsK013VnSCc5nfO23TUEee0DORSowdw0HDa2jwPp1ywCWgGjzGvA3ChGGoL8+IQke4Kjf5oNOr3+00IODLokAsRegVoH0+gMWYOE2kF+/fi90kphQ+MzePji8zWc4/JwO3zN+C7WWhfwLxPB9w8bp4rjmtACUXmvKKCRuV6/pKX3pWb+9OWd87ArSH/FFZ812GUAsdXmq+UTopCnkS28kF20CA99FLpgiB4CYmUzWaFj78CO5kCrdAUkN48nrqRiShpeLlmd1CFXoBW482GZbq955T/42BqsgiG4FvjmdUxzV7PVs9TnMuk0vHtGZCOgmqarml/DbulUTmXKB+FZLupeFSM8WQRAgxGDunrqFkutGrZND0KtfLolsc9PyhQXYZ4eA1lKN9J0Am23QWOE7uXuBUmLjS2hwSmZ9a8I2zN9gwpUj6HlrqPLIZggPVRaGG6RxRh6qpHJp4ImR9VMzfoqVEUo6h+r4SUOcQ9AIQcF7U6OhoMwdRTCwPoOgA84eONAR/aklhMd2KmRfayeXzfoOkWB93bRiItjUwCv28V0B4skKTHfIPRfY5iRXu7bd6P+g3ozlpbSixhvtUY3ZZKWzkjyQ+vmJ+OC2mPWuNDLYaVSjA+L2zpI7+Whk61MC3YJhdkdiTuEEJfz+x91yYsCrlaHa0l8lJw07nG5adTC82AdE6UyMWuT42ZaScBCs3qESGb98wzCzkBDp/EHwDhX1SM2nClfkyy+R5LBuXz/vhcCfnP2QJVB5sRk4/6j+4CypwwDdrdE4JfIjyIeQTonhpELCJHSSij1H5ogFvjeAK3RoJ3v95S5MeyofokWE09f2Es3fHc6vQusQx7rr4FpOwJE4QBqm+PDM49Nq9Zy4V2na9vOEhqq1DcdpnGTUUli/jEVNMdTHBtPLncbRNX9NYgqYCU+VtKKJOTS7g7xGl+1Zjm2FHBqjpwiwHN6IeUyDHFFH86Trrc1Qd7He4Ug/XyuKitY7yjBOGjybdFKVcvlHEcP/zNwsBDBLB5XHlhvQyPUKCIk2Dqrxe8iPNOIkV7l8SNyDC5WYkoamU5YcF6re3HgOjPzGvurzCmag8FnCKFujtBlsOKXoOW9hZWViLLOEca5fe0xPRAhWrKBGgU9338JsNYDyv02+Pm/aZaLeLuGrfOSZ8EKZvwHV+ro3h8gwQjPMDfbPh3IrPYtnLMctTrSSm2usWbg1lMX/hQgRgM+OL+ShNS5MpPrWg2l4O7RBQ/f2ajsQfXCj7XVLLed7NMoVc86BTs5dTxLCkXSLMd3pBwvVta9nX3JJJto21z346W4Fw0oDFN6D8x0o4MzRxMvTW6Te/c/qA0iycbbHT5KfI6Qhm/nzAN5nZm01ai4Xwu9k257+azjz4wShulIc8FF8TtSOUrIt+bwNl+aId7k5joM6db7LmawL0nYlrWJgGw7F56AOGLzyFt0dIrCfsgfoi3Wc2IeL6up5Vsrh29BwgJS4ZXiYanrhlX4tWHnGu4fPJ9e7tswxbKYzR6RkSw1al91StX+vWWfwS+0p3gZUU2rn00A67rrTj4g0M7WkThyoF3GTBLNpld/8B19jIDAbtY4Nu/8mC2XZ4VabcZC8eLKkwthP3VVzIiDLfFvOGPA4MhXBebhTqsq7/5AKeUu8AxvluM+turc6teywn/oSdp3jXK6Qvdn/Lg/i8DHKfbg+UHUQAAAABJRU5ErkJggg=="
                    style={{
                      opacity: 1,
                      transformOrigin: "0% 50% 0px",
                      transform: "none",
                    }}
                  />
                  <div className="flex flex-col ml-2">
                    <p className="text-md dark:text-white font-bold">
                      Qatar Airways
                    </p>
                    <p className="text-xs dark:text-white">QR1456</p>
                    <div className="text-xs dark:text-white">2*23kg</div>
                  </div>
                </div>

                <div className="flex flex-col p-2">
                  <p className="font-bold">18:25</p>
                  <p className="">
                    <span className="font-bold">HRE</span> Harare
                  </p>
                  <p className="">Zimbabwe</p>
                </div>
                <div className="flex flex-col flex-wrap p-2">
                  <p className="font-bold">19:25</p>
                  <p className="dark:text-gray-200">
                    <span className="font-bold">LUN</span> Lusaka
                  </p>
                  <p className="dark:text-gray-200">Zambia</p>
                </div>
              </div>
              <div className="mt-4 bg-gray-100 dark:bg-gray-900 flex flex-row flex-wrap md:flex-nowrap justify-between items-baseline">
                <div className="flex mx-6 py-4 flex-row flex-wrap justify-between items-center w-full">
                  <div className="flex space-x-2">
                    <IoIosAirplane className="w-12 h-10 p-2 mx-2 self-center my-btn-color rounded-full fill-current text-white" />
                    <div className="text-sm mx-2 flex flex-col">
                      <p className="">Standard Ticket</p>
                      <p className="font-bold">$404.73</p>
                      <p className="text-xs text-gray-500">Price per adult</p>
                    </div>
                  </div>
                  <button className="w-32 h-11 rounded flex my-btn-color mx-2 justify-center place-items-center">
                    <div className="text-white">Book</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="max-w-full bg-white dark:bg-gray-700 flex flex-col rounded overflow-hidden shadow-lg">
              <div className="flex flex-row items-baseline flex-nowrap bg-gray-100 dark:bg-gray-900 p-2">
                <IoIosAirplane className="text-gray-500" />
                <h1 className="ml-2 uppercase font-bold text-gray-500">
                  departure
                </h1>
                <p className="ml-2 font-normal text-gray-500">
                  Wednesday 18 Aug
                </p>
              </div>
              <div className="mt-2 flex justify-start bg-white dark:bg-gray-700 p-2">
                <div className="flex mx-2 ml-6 h8 px-2 flex-row items-baseline rounded-full bg-gray-100 dark:bg-gray-900 p-1">
                  <IoIosAirplane className="text-gray-500" />
                  <p className="font-normal text-sm ml-1 text-gray-500">
                    Economy
                  </p>
                </div>
              </div>
              <div className="mt-2 flex sm:flex-row mx-6 sm:justify-between flex-wrap ">
                <div className="flex flex-row place-items-center p-2">
                  <img
                    alt="Qatar Airways"
                    className="w-10 h-10"
                    src="data:image/png;base64,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"
                    style={{
                      opacity: 1,
                      transformOrigin: "0% 50% 0px",
                      transform: "none",
                    }}
                  />
                  <div className="flex flex-col ml-2">
                    <p className="text-md dark:text-white font-bold">
                      Qatar Airways
                    </p>
                    <p className="text-xs dark:text-white">QR1456</p>
                    <div className="text-xs dark:text-white">2*23kg</div>
                  </div>
                </div>

                <div className="flex flex-col p-2">
                  <p className="font-bold">18:25</p>
                  <p className="">
                    <span className="font-bold">HRE</span> Harare
                  </p>
                  <p className="">Zimbabwe</p>
                </div>
                <div className="flex flex-col flex-wrap p-2">
                  <p className="font-bold">19:25</p>
                  <p className="dark:text-gray-200">
                    <span className="font-bold">LUN</span> Lusaka
                  </p>
                  <p className="dark:text-gray-200">Zambia</p>
                </div>
              </div>
              <div className="mt-4 bg-gray-100 dark:bg-gray-900 flex flex-row flex-wrap md:flex-nowrap justify-between items-baseline">
                <div className="flex mx-6 py-4 flex-row flex-wrap justify-between items-center w-full">
                  <div className="flex space-x-2">
                    <IoIosAirplane className="w-12 h-10 p-2 mx-2 self-center my-btn-color rounded-full fill-current text-white" />
                    <div className="text-sm mx-2 flex flex-col">
                      <p className="">Standard Ticket</p>
                      <p className="font-bold">$404.73</p>
                      <p className="text-xs text-gray-500">Price per adult</p>
                    </div>
                  </div>
                  <button className="w-32 h-11 rounded flex my-btn-color mx-2 justify-center place-items-center">
                    <div className="text-white">Book</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="max-w-full bg-white dark:bg-gray-700 flex flex-col rounded overflow-hidden shadow-lg">
              <div className="flex flex-row items-baseline flex-nowrap bg-gray-100 dark:bg-gray-900 p-2">
                <IoIosAirplane className="text-gray-500" />
                <h1 className="ml-2 uppercase font-bold text-gray-500">
                  departure
                </h1>
                <p className="ml-2 font-normal text-gray-500">
                  Wednesday 18 Aug
                </p>
              </div>
              <div className="mt-2 flex justify-start bg-white dark:bg-gray-700 p-2">
                <div className="flex mx-2 ml-6 h8 px-2 flex-row items-baseline rounded-full bg-gray-100 dark:bg-gray-900 p-1">
                  <IoIosAirplane className="text-gray-500" />
                  <p className="font-normal text-sm ml-1 text-gray-500">
                    Economy
                  </p>
                </div>
              </div>
              <div className="mt-2 flex sm:flex-row mx-6 sm:justify-between flex-wrap ">
                <div className="flex flex-row place-items-center p-2">
                  <img
                    alt="Qatar Airways"
                    className="w-10 h-10"
                    src="data:image/png;base64,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"
                    style={{
                      opacity: 1,
                      transformOrigin: "0% 50% 0px",
                      transform: "none",
                    }}
                  />
                  <div className="flex flex-col ml-2">
                    <p className="text-md dark:text-white font-bold">
                      Qatar Airways
                    </p>
                    <p className="text-xs dark:text-white">QR1456</p>
                    <div className="text-xs dark:text-white">2*23kg</div>
                  </div>
                </div>

                <div className="flex flex-col p-2">
                  <p className="font-bold">18:25</p>
                  <p className="">
                    <span className="font-bold">HRE</span> Harare
                  </p>
                  <p className="">Zimbabwe</p>
                </div>
                <div className="flex flex-col flex-wrap p-2">
                  <p className="font-bold">19:25</p>
                  <p className="dark:text-gray-200">
                    <span className="font-bold">LUN</span> Lusaka
                  </p>
                  <p className="dark:text-gray-200">Zambia</p>
                </div>
              </div>
              <div className="mt-4 bg-gray-100 dark:bg-gray-900 flex flex-row flex-wrap md:flex-nowrap justify-between items-baseline">
                <div className="flex mx-6 py-4 flex-row flex-wrap justify-between items-center w-full">
                  <div className="flex space-x-2">
                    <IoIosAirplane className="w-12 h-10 p-2 mx-2 self-center my-btn-color rounded-full fill-current text-white" />
                    <div className="text-sm mx-2 flex flex-col">
                      <p className="">Standard Ticket</p>
                      <p className="font-bold">$404.73</p>
                      <p className="text-xs text-gray-500">Price per adult</p>
                    </div>
                  </div>
                  <button className="w-32 h-11 rounded flex my-btn-color mx-2 justify-center place-items-center">
                    <div className="text-white">Book</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
