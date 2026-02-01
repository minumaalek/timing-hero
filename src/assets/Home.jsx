import NewGoalButton from "./NewGoalButton";
import AppBar from "./AppBar";
import Header from "./Header";
import TodayGoals from "./TodayGoals";
import FocusChart from "./FocusChart";
import BigCard from "./BigCard";
import SmallCard from "./SmallCard";
import { toFutureDays, freeDays, recentGoals } from "./shortViewContents";
import { h3 } from "framer-motion/client";
function Home() {
  return (

    <>
      <AppBar />

      <div className=" flex flex-col justify-center items-center gap-5 w-full">
        <NewGoalButton />

        <header className="w-full">
          <Header />
        </header>

        <main className="w-full flex flex-col items-center gap-7 p-10">
          <div className=" flex flex-col justify-center items-center gap-10 w-full ">
            <div className="flex flex-col items-center w-full gap-3">
              <h2>امروز چیکاره‌ایم؟</h2>
              <TodayGoals />
            </div>
            <div className="flex flex-col items-center w-full gap-3">
              <h2 className="">میزان تمرکز شما در هفته اخیر</h2>
              <div className="border-4 border-sky-950 w-full md:w-2/4 h-80">
                <FocusChart />
              </div>
            </div>
          </div>
          <div className="flex gap-4 justify-center text-white w-full items-center">
            <BigCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-12"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                  />
                </svg>
              }

              title="تاریخ بیشترین تمرکز"
              details="30 مهر 1404"

            />
            <BigCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-12"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
                </svg>
              }

              title="مهم‌ترین هدف"
              details="برنامه‌نویسی"

            />
            <BigCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-12"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              }

              title="بیشترین زمان تمرکز"
              details="130 دقیقه پرقدرت"

            />

          </div>
          <div className="blue2 w-3/4 flex items-center justify-around text-center text-white flex-col md:flex-row p-4 gap-5">
            <SmallCard title="اهداف اخیر شما">
              {recentGoals.map((i) => <h3>{i}</h3>)}
            </SmallCard>
            <SmallCard title="روزهای آینده‌دار">
              {toFutureDays.map((i) => <h3>{i}</h3>)}
            </SmallCard>
            <SmallCard title="روزهای رهایی">
              {freeDays.map((i) => <h3>{i}</h3>)}
            </SmallCard>

          </div>
        </main>
      </div>
    </>
  );
}

export default Home;
