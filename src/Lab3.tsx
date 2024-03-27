import LabList from "../components/LabList.tsx";
import {useState} from "react";

const Lab3 = () => {
    const [tab, setTab] = useState(1)
    return (
        <>
        <LabList/>
        <div style={{display: "flex", width:'100%'}}>  
            <div style={{display: "flex", gap: '20px',width:'100%'}}>
                <div style={{display: "flex", flexDirection: "column", gap: '20px'}}>
                <button style={{width: 'fit-content'}} onClick={() => setTab(1)}>Тема:
                    Мета
                    Місце розташування лаби №3
                </button>
                <button style={{width: 'fit-content'}} onClick={() => setTab(11)}><a href="Labs3/Task1/index.html">Завдання №1. Зовнішній вигляд макету. Код макету</a></button>
                <button style={{width: 'fit-content'}}>Завдання №2</button>
                <a href="Labs3/Task2-1/index.html">Фіксована таблична верстка</a>
                <a href="Labs3/Task2-2/index.html">Гумова таблична верстка</a>
                <a href="Labs3/Task2-3/index.html">Фіксована блокова верстка</a>
                <a href="Labs3/Task2-4/index.html">Гумова блокова верстка</a>
                <button style={{width: 'fit-content'}}>Завдання №3 FLEXBOX</button>
                <a href="Labs3/Task3-1/index.html">Зовнішній вигляд</a>
                <button style={{width: 'fit-content'}} onClick={() => setTab(3)}>HTML-код</button>
                <button style={{width: 'fit-content'}} onClick={() => setTab(4)}>CSS-код сторінки</button>
                <button style={{width: 'fit-content'}} onClick={() => setTab(5)}>Висновки</button>
                </div>
                <div style={{display: "flex", width:'990px'}}>
                    {tab === 1 && 
                    <p style={{width:'100%'}}>
                        Тема: ВЕРСТКА HTML-ДОКУМЕНТУ. БЛОКОВА ВЕРСТКА. ВЕРСТКА
                            ЗАСОБАМИ CSS та FLEXBOX.<br/>

                            Мета:<br/>
                            ⎯ придбати практичні навички роботи верстки сторінок засобами CSS, верстки на
                            основі плаваючих елементів, з’ясувати переваги та недоліки типів макетів веб-
                            сторінок<br/>
                            ⎯ придбати практичні навички роботи верстки сторінок засобами CSS та FLEXBOX
                        <br />
                        Резюме: <a>https://github.com/Markusplay/web-resume</a>
                        <br />
                        Звіти: <a>https://github.com/Markusplay/Web-6sem-reports</a>
                        <br />
                        Проєкт: <a>https://github.com/Markusplay/pizzeria</a>
                    </p>
                    }
                    {tab === 11 &&
                    <div style={{width:'100%'}}>
                        <img src="lab3/maket.png" style={{width:'800px', height:'1200px'}}/>
                        <img src="lab3/maket-code.png" style={{width:'800px', height:'1200px'}}/>
                    </div>
                    }
                    {tab === 2 &&
                    <div style={{width:'100%'}}>
                        <h3>Зовнішній стилі</h3>
                        <img src="lab3/res.png" style={{width:'800px', height:'1200px'}}/>
                    </div>
                    }
                    {tab === 3 &&
                    <div style={{width:'100%'}}>
                        <h3>HTML код</h3>
                        <img src="lab3/html-code.png" style={{width:'800px', height:'1200px'}}/>
                    </div>
                    }
                    {tab === 4 &&
                    <div style={{width:'100%'}}>
                        <h3>CSS код</h3>
                        <img src="lab3/cs-code.png" />
                    </div>
                    }
                    {tab === 5 &&
                    <p style={{width:'100%'}}>
                    Під час виконання лабораторної роботи ми придбали практичні навички роботи верстки сторінок засобами CSS, верстки на основі плаваючих елементів, з’ясувати переваги та недоліки типів макетів веб- сторінок
                    і придбали практичні навички роботи верстки сторінок засобами CSS та FLEXBOX
                </p>
                    }
                </div>
            </div>
        </div>
        </>
    );
};

export default Lab3;