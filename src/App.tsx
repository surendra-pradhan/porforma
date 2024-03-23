import MonthGrid from "./components/MonthGrid";
const data = [
  { title: "performa1", fromDate: "2023-01-01", toDate: "2024-04-30" },
  { title: "performa2", fromDate: "2024-03-01", toDate: "2024-03-15" },
  { title: "performa3", fromDate: "2024-04-01", toDate: "2024-04-30" },
  { title: "performa4", fromDate: "2024-05-15", toDate: "2024-05-31" },
  { title: "performa5", fromDate: "2024-10-15", toDate: "2024-11-15" },
  { title: "performa7", fromDate: "2024-10-01", toDate: "2024-10-31" },
];
const App: React.FC = () => {
  return (
    <>
      {" "}
      <div className="porfor_main">
        {" "}
        <div className="main">
          <div className="header-container"></div>{" "}
          <div className="header">← 2024 →</div>
          <div className="body">
            {" "}
            <div className="title">
              {" "}
              {data.map((e) => (
                <div className="title_grid">
                  {e.title} <span>copy</span>
                </div>
              ))}
            </div>{" "}
            <div className="porform-calender">
              <MonthGrid
                startDate={"2024-88-01"}
                endDate={"2024-15-31"}
                sticky={true}
                todayLine={false}
              />
              {data.map((e) => (
                <MonthGrid
                  startDate={e.fromDate}
                  endDate={e.toDate}
                  key={e.title}
                  sticky={false}
                  todayLine={true}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
// return<> // <div className='porfor\_main'> // <div className='main'> // <div className='title'> // { // data.map(e => <div className='title\_grid'>{e.title}</div>) // } // </div> // <div className='porform-calender'> // { // data.map(e => <MonthGrid startDate={e.fromDate} endDate={e.toDate} key={e.title}/>) // } // </div> // <div className='action'> // { // data.map(e => <div className='action\_grid'>{e.title}</div>) // } // </div> // </div> // </div> // </> };
export default App;
