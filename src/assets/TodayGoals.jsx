
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useModal } from "./ModalContext";



function TodayGoals() {
    let navigate = useNavigate();
    const { showModal } = useModal();
    let rejectGoal = () => {
        showModal(
            <div className="flex flex-col gap-3">
                <p>بیخیال سئو شدی...</p>
                <button className="red1 text-white p-1 rounded-full">نه هنوز</button>
            </div>
        );
    };
    return (
        <div className="bg-white w-full md:w-2/4 flex justify-center items-center flex-col gap-3 p-3">
            <div className="w-full flex flex-col gap-3">
                <div className=" text-black p-2 shadow-md shadow-slate-500 flex justify-between items-center w-full bg-red-50">
                    <div className="flex w-2/4 sm:w-3/5 lg:w-4/6 items-center gap-2">
                        <svg
                            onClick={rejectGoal}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="stroke-red-500 size-6 hover:stroke-red-700"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>
                        <div className="flex flex-col w-2/4 ">
                            <h3 className="text-green-600 font-extrabold">سئو</h3>
                            <h4 className="">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                                چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                                صنعت چاپ
                            </h4>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-red-300 to-red-200 w-2/4 sm:w-2/5 lg:w-2/6 h-16 px-3 py-1 gap-2 flex items-center justify-between rounded-full ">
                        <div className="flex justify-center items-center w-3/5 bg-white p-1">
                            <span className="text-xl text-red-600">12:30</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 26 26"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-6"
                            >
                                <path
                                    className="stroke-red-600"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                                />
                            </svg>
                        </div>

                        <button
                            className="red1 hover:red2 hover:blue1 text-white p-2 rounded-full w-2/5 hover:bg-sky-950"
                            onClick={() => navigate("/Timing")}
                        >
                            شروع
                        </button>
                    </div>
                </div>
                <div className=" text-black p-2 border-4 border-sky-600 flex justify-between items-center w-full shadow-md shadow-slate-500 relative">
                    <div className="flex  items-center gap-2 w-2/4 sm:w-3/5 lg:w-4/6 ">
                        <svg
                            onClick={rejectGoal}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="stroke-red-500 size-6 hover:stroke-red-700"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>
                        <div className="flex flex-col w-3/4">
                            <h3 className="text-blue-600 font-extrabold">ریکت</h3>
                            <h4 className="">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                                چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                                صنعت چاپ
                            </h4>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-sky-100 to-cyan-100 h-16 px-3 py-1 gap-2 flex items-center justify-between rounded-full w-2/4 sm:w-2/5 lg:w-2/6">
                        <div className="flex justify-center items-center w-3/5 bg-white p-1">
                            <span className="text-xl text-sky-600">13:45</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 27 27"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-6"
                            >
                                <path
                                    className="stroke-sky-600"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                            </svg>
                        </div>

                        <button
                            className="blue1 hover:blue2 text-white p-2 rounded-full w-2/5 "
                            onClick={() => navigate("/Timing")}
                        >
                            شروع
                        </button>
                    </div>
                </div>
                <div className=" text-black p-2  flex justify-between items-center w-full shadow-md shadow-slate-500">
                    <div className="flex items-center gap-2 w-2/4 sm:w-3/5 lg:w-4/6 ">
                        <svg
                            onClick={rejectGoal}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="stroke-red-500 size-6 hover:stroke-red-700"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>
                        <div className="flex flex-col w-3/4">
                            <h3 className="text-red-600 font-extrabold">انگولار</h3>
                            <h4 className="">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                                چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                                صنعت چاپ
                            </h4>
                        </div>
                    </div>
                    <div className="bg-gradient-to-bl from-gray-100 to-slate-300 h-16 px-3 py-1 gap-2 flex items-center justify-between rounded-full w-2/4 sm:w-2/5 lg:w-2/6">
                        <div className="flex justify-center items-center w-3/5 bg-white p-1">
                            <span className="text-xl">15:00</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 27 27"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                            </svg>
                        </div>

                        <button
                            className="silver1 hover:silver2 text-white p-2 rounded-full w-2/5"
                            onClick={() => navigate("/Timing")}
                        >
                            شروع
                        </button>
                    </div>
                </div>
                <div className=" text-black p-2 shadow-md shadow-slate-500 flex justify-between items-center w-full">
                    <div className="flex items-center gap-2 w-2/4 sm:w-3/5 lg:w-4/6 ">
                        <svg
                            onClick={rejectGoal}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="stroke-red-500 size-6 hover:stroke-red-700"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>
                        <div className="flex flex-col w-3/4">
                            <h3 className="text-yellow-600 font-extrabold">
                                جاوااسکریپت
                            </h3>
                            <h4 className="">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                                چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                                صنعت چاپ
                            </h4>
                        </div>
                    </div>
                    <div className="bg-gradient-to-bl from-gray-100 to-slate-300 h-16 px-3 py-1 gap-2 flex items-center justify-between rounded-full w-2/4 sm:w-2/5 lg:w-2/6">
                        <div className="flex justify-center items-center w-3/5 bg-white p-1">
                            <span className="text-xl">16:15</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 27 27"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                            </svg>
                        </div>

                        <button
                            className=" silver1 hover:silver2 text-white p-2 rounded-full w-2/5 "
                            onClick={() => navigate("/Timing")}
                        >
                            شروع
                        </button>
                    </div>
                </div>
            </div>
            <Link to="/GoalsPage">همه هدف‌ها...</Link>
        </div>
    )
}

export default TodayGoals