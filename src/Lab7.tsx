import LabList from "../components/LabList.tsx";
import { useEffect, useState } from "react";

const Lab7 = () => {
    const [tab, setTab] = useState(0)
    const [textOne, setTextOne] = useState('')
    const [passwordIsHidden, setPasswordIsHidden] = useState(false);
    const handleClick = () => {
        console.log(true);
    };

    const handleOutsideClick = (event: MouseEvent) => {
        if (event.target && event.target instanceof HTMLElement && !event.target.closest('#place')) {
            console.log(false);
        }
    };

    useEffect(() => {
        window.addEventListener('click', handleOutsideClick);
        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, []);
    return (
    <>
        <LabList/>
            <div style={{display: "flex", width:'100%'}}>
                <div style={{display: "flex", gap: '20px',width:'100%'}}>
                    <div style={{display: "flex", flexDirection: "column", gap: '20px'}}>
                        <button style={{width: 'fit-content', marginTop: '20px'}} onClick={() => setTab(0)}>Тема:
                            Мета
                            Місце розташування лаби №7
                        </button>
                        <button style={{width: 'fit-content'}} onClick={() => setTab(1)}>Завдання 1</button>
                        <button style={{width: 'fit-content'}} onClick={() => setTab(2)}>Завдання 3</button>
                        <button style={{width: 'fit-content'}} onClick={() => setTab(3)}>Завдання 5</button>
                        <button style={{width: 'fit-content'}} onClick={() => setTab(4)}>Завдання 7</button>
                        <button style={{width: 'fit-content'}} onClick={() => setTab(5)}>Завдання 8</button>
                        <button style={{width: 'fit-content'}} onClick={() => setTab(6)}>Завдання 9</button>
                        <button style={{width: 'fit-content'}} onClick={() => setTab(7)}>Завдання 10</button>
                        <button style={{width: 'fit-content'}} onClick={() => setTab(8)}>Висновки</button>
                    </div>
                    <div style={{display: "flex", marginTop:'15px'}}>
                        {tab === 0 &&
                            <div style={{width:'100%'}}>
                                Тема:   
                                КЛАСИ. ОБ'ЄКТНА МОДЕЛЬ ДОКУМЕНТА (DOM). ПОДІЇ. ОБ'ЄКТ ПОДІЇ. ДЕЛЕГУВАННЯ ПОДІЙ. THROTTLE. МОДУЛЬНОСТЬ КОДУ
                                <br/>
                                Мета:<br />
                                придбати практичні навички роботи з об'єктами. Методи об'єкта. Callback. Стрілочні функції. Стрілочні функції як колбеки. Реалізація програм засовами мови JAVASCRIPT

                                <br />
                                Звіти: <a href="https://github.com/Markusplay/Web-6sem-reports">https://github.com/Markusplay/Web-6sem-reports</a>
                                <br />
                                Проєкт: <a href="https://github.com/Markusplay/pizzeria">https://github.com/Markusplay/pizzeria</a>
                                <br/>
                            </div>
                        }
                        { tab === 1 &&
                            <label>
                                <input value={textOne} onChange={(e)=> setTextOne(e.target.value)}/>
                                <button onClick={()=>console.log(textOne)}>Show me</button>
                            </label>
                        }
                        { tab === 2 &&
                        <label>
                            <input type={passwordIsHidden ? 'password' : 'text'} />
                            <button onClick={()=>setPasswordIsHidden(!passwordIsHidden)}>{passwordIsHidden ? 'Розкрити' : 'Приховати'}</button>
                        </label>
                        }
                        { tab === 3 &&
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <div className="taskTitle">Завдання 5</div>
                            <div id="place" onClick={handleClick} style={{backgroundColor:'green', height:'40px', width:"20px"}} />
                        </div>
                        }
                        { tab === 4 &&
                            <img src="lab7/task7.png" style={{objectFit:"none"}} alt=""/>
                        }
                        { tab === 5 &&
                            <img src="lab7/task8.png" style={{objectFit:"none"}} alt=""/>
                        }
                        { tab === 6 &&
                            <img src="lab7/task9.png" style={{objectFit:"none"}} alt=""/>
                        }
                        { tab === 7 &&
                            <img src="lab7/task10.png" style={{objectFit:"none"}} alt=""/>
                        }
                        {tab === 8 &&
                          <p style={{width:'100%'}}>
                              Під час виконання лабораторної роботи ми придбали практичні навички роботи з об'єктами. Методи об'єкта. Callback. Стрілочні функції. Стрілочні функції як колбеки. Реалізація програм засовами мови JAVASCRIPT
                          </p>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Lab7;