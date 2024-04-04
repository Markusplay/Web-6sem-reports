import LabList from "../components/LabList.tsx";
import {useState} from "react";

const Lab4 = () => {
    const [tab, setTab] = useState(1)
    const desktop = `
        .first-pizza {
  width: 365px;
  height: 365px;
}
    `
    const tablet = `
@media screen and (max-width:992px) {
  .first-pizza {
    width: 265px;
    height: 265px;
  }
}
    `
    const mobile = `
@media screen and (max-width:480px) {
  .first-pizza {
    display: none;
  }
}`
    return (
        <>
        <LabList/>
        <div style={{display: "flex", width:'100%'}}>  
            <div style={{display: "flex", gap: '20px',width:'100%'}}>
                <div style={{display: "flex", flexDirection: "column", gap: '20px'}}>
                <button style={{width: 'fit-content',  marginTop: '20px'}} onClick={() => setTab(1)}>Тема:
                    Мета
                    Місце розташування лаби №4
                </button>
                <button style={{width: 'fit-content'}} onClick={() => setTab(2)}>Десктопна верстка</button>
                <button style={{width: 'fit-content'}} onClick={() => setTab(3)}>Плантештна верстка</button>
                <button style={{width: 'fit-content'}} onClick={() => setTab(4)}>Мобільна верстка</button>
                <button style={{width: 'fit-content'}} onClick={() => setTab(5)}>Висновки</button>
                </div>
                <div style={{display: "flex", width:'990px'}}>
                    {tab === 1 && 
                    <div style={{width:'100%'}}>
                        Тема:  АДАПТИВНА ВЕРСТКА. МЕДІА-ЗАПИТИ. МЕТАТЕГ VIEWPORT. СТРАТЕГІЯ MOBILE FIRST.<br/>
                        Мета:<br /> 
                        Адаптивна верстка. Медіа-запити. Медіа-типи. Медіа-функції.Метатег viewport. Інструменти розробника. Стратегія Mobile First. 
                        <br />
                        Резюме: <a href="https://github.com/Markusplay/web-resume">https://github.com/Markusplay/web-resume</a>
                        <br />
                        Звіти: <a href="https://github.com/Markusplay/Web-6sem-reports">https://github.com/Markusplay/Web-6sem-reports</a>
                        <br />
                        Проєкт: <a href="https://github.com/Markusplay/pizzeria">https://github.com/Markusplay/pizzeria</a>
                    </div>
                    }
                    { tab === 2 &&
                    <div style={{width:'100%'}}>
                        {desktop}
                        <img src="lab4/desktop.png" style={{width:'1300px', height:'1200px'}}/>
                    </div>
                    }
                    { tab === 3 &&
                      <div style={{width:'100%'}}>
                          {tablet}
                          <img src="lab4/tablet.png" />
                      </div>
                    }
                    { tab === 4 &&
                      <div style={{width:'100%'}}>
                          {mobile}
                          <img src="lab4/mobile.png" />
                      </div>
                    }
                    { tab === 5 &&
                      <p style={{width:'100%'}}>
                          Під час виконання лабораторної роботи ми придбали практичні навички роботи з адаптивною версткою та медіа запитами.
                      </p>
                    }
                </div>
            </div>
        </div>
        </>
    );
};

export default Lab4;