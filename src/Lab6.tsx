import LabList from "../components/LabList.tsx";
import {useState} from "react";

const Lab6 = () => {
    const [tab, setTab] = useState(0)
    return (
        <>
            <LabList/>
            <div style={{display: "flex", width:'100%'}}>
                <div style={{display: "flex", gap: '20px',width:'100%'}}>
                    <div style={{display: "flex", flexDirection: "column", gap: '20px'}}>
                        <button style={{width: 'fit-content', marginTop: '20px'}} onClick={() => setTab(0)}>Тема:
                            Мета
                            Місце розташування лаби №6
                        </button>
                        <button style={{width: 'fit-content'}} onClick={() => setTab(1)}>Завдання 1</button>
                        <button style={{width: 'fit-content'}} onClick={() => setTab(2)}>Завдання 3</button>
                        <button style={{width: 'fit-content'}} onClick={() => setTab(3)}>Завдання 5</button>
                        <button style={{width: 'fit-content'}} onClick={() => setTab(4)}>Завдання 7</button>
                        <button style={{width: 'fit-content'}} onClick={() => setTab(5)}>Завдання 9</button>
                        <button style={{width: 'fit-content'}} onClick={() => setTab(6)}>Завдання 10</button>
                        <button style={{width: 'fit-content'}} onClick={() => setTab(7)}>Висновки</button>
                    </div>
                    <div style={{display: "flex", width: '990px'}}>
                        {tab === 0 &&
                            <div style={{width:'100%'}}>
                                Тема:   
                                ОБ`ЄКТ. МЕТОДИ ОБ`ЄКТА. МАСИВ ОБ`ЄКТІВ. ДЕСТРУКТУРИЗАЦІЯ ОБ`ЄКТІВ. CALLBACK. СТРІЛОЧНІ ФУНКЦІЇ. СТРІЛОЧНІ ФУНКЦІЇ ЯК КОЛБЕКИ.
                                <br/>
                                Мета:<br />
                                придбати практичні навички роботи з об`єктами. Методи об`єкта. Callback. Стрілочні функції. Стрілочні функції як колбеки.Реалізація програм засовами мови JAVASCRIPT
                                <br />
                                Звіти: <a href="https://github.com/Markusplay/Web-6sem-reports">https://github.com/Markusplay/Web-6sem-reports</a>
                                <br />
                                Проєкт: <a href="https://github.com/Markusplay/pizzeria">https://github.com/Markusplay/pizzeria</a>
                                <br/>
                            </div>
                        }
                        { tab === 1 &&
                            <img src="lab6/task1.png" style={{objectFit:"none"}} alt=""/>
                        }
                        { tab === 2 &&
                            <img src="lab6/task3.png" style={{objectFit:"none"}} alt=""/>
                        }
                        { tab === 3 &&
                            <img src="lab6/task5.png" style={{objectFit:"none"}} alt=""/>
                        }
                        { tab === 4 &&
                            <img src="lab6/task7.png" style={{objectFit:"none"}} alt=""/>
                        }
                        { tab === 5 &&
                            <img src="lab6/task9.png" style={{objectFit:"none"}} alt=""/>
                        }
                        { tab === 6 &&
                            <img src="lab6/task10.png" style={{objectFit:"none"}} alt=""/>
                        }
                        {tab === 7 &&
                          <p style={{width:'100%'}}>
                              Під час виконання лабораторної роботи ми придбали практичні навички роботи з об`єктами. Методи об`єкта. Callback. Стрілочні функції. Стрілочні функції як колбеки.Реалізація програм засовами мови JAVASCRIPT
                                <br />
                          </p>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Lab6;