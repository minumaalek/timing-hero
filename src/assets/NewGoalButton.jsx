import { useNavigate } from "react-router-dom";


function NewGoalButton() {
    let navigate = useNavigate();
    return (
        <div
            onClick={() => {
                navigate("/NewGoal");
            }}
            className="h-14 w-14 rounded-full fixed blue1 hover:blue2 bottom-5 left-5 flex justify-center items-center"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="white"
                class="size-8"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                />
            </svg>
        </div>
    )
}

export default NewGoalButton