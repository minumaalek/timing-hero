
import { Link, useNavigate } from "react-router-dom";
import { useModal } from "./ModalContext";
import TodayGoalCard from "./TodayGoalCard";



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
        <div className="bg-white w-full md:w-2/4 flex justify-center items-center flex-col gap-3 p-2 rounded-none md:rounded-3xl">
            <div className="w-full flex flex-col gap-3">

                <TodayGoalCard borderColor="none" statusColor="red" title="سئو" titleColor="green" />
                <TodayGoalCard borderColor="blue" statusColor="blue" title="ریکت" titleColor="blue" />
                <TodayGoalCard borderColor="none" statusColor="gray" title="انگولار" titleColor="red" />
                <TodayGoalCard borderColor="none" statusColor="gray" title="جاوااسکریپت" titleColor="yellow" />

            </div>
            <Link to="/GoalsPage">همه هدف‌ها...</Link>
        </div>
    )
}

export default TodayGoals