import LabList from "../components/LabList.tsx";
import { useState } from "react";

const Lab8 = () => {
    const [tab, setTab] = useState(0)

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
                        <button style={{width: 'fit-content'}} onClick={() => setTab(2)}>Завдання 2</button>
                        <button style={{width: 'fit-content'}} onClick={() => setTab(8)}>Висновки</button>
                    </div>
                    <div style={{display: "flex", marginTop:'15px'}}>
                        {tab === 0 &&
                            <div style={{width:'100%'}}>
                                Тема:   
                                WEB-СХОВИЩЕ. WEB STORAGE API. МОДУЛЬНОСТЬ  КОДУ. СТВОРЕННЯ МОДАЛЬНОГО ВІКНА. ДЕЛЕГУВАННЯ ПОДІЙ.
                                <br/>
                                Мета:<br />
                                придбати практичні навички роботи створення модального вікна; повторити процес створення макету, зокрема створення макету галереї довільних зображень; закріпити навички роботи з делегуванням подій.
                                <br />
                                Звіти: <a href="https://github.com/Markusplay/Web-6sem-reports">https://github.com/Markusplay/Web-6sem-reports</a>
                                <br />
                            </div>
                        }
                        { tab === 1 &&
                        <div style={{display:'flex', width:'700px', flexDirection:'column'}}>
                            <img src="lab8/task1-code.png" style={{objectFit:"cover"}} alt=""/>
                            <img src="lab8/task1-html.png" style={{objectFit:"cover"}} alt=""/>
                            <img src="lab8/task1-styles.png" style={{objectFit:"cover"}} alt=""/>
                        </div>
                        }
                        { tab === 2 &&
                        <div style={{display:'flex', width:'700px', flexDirection:'column'}}>
                            <img src="lab8/task2-code.png" style={{objectFit:"cover"}} alt=""/>
                            <img src="lab8/task2-html.png" style={{objectFit:"cover"}} alt=""/>
                            <img src="lab8/task2-styles.png" style={{objectFit:"cover"}} alt=""/>
                        </div>
                        }
                        { tab === 4 &&
                            <img src="lab7/task7.png" style={{objectFit:"none"}} alt=""/>
                        }
                        { tab === 5 &&
                            <img src="lab7/task8.png" style={{objectFit:"none"}} alt=""/>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Lab8;