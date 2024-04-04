import LabList from "../components/LabList.tsx";
import {useState} from "react";

const Lab5 = () => {
    const [tab, setTab] = useState(1)
    return (
        <>
            <LabList/>
            <div style={{display: "flex", width:'100%'}}>
                <div style={{display: "flex", gap: '20px',width:'100%'}}>
                    <div style={{display: "flex", flexDirection: "column", gap: '20px'}}>
                        <button style={{width: 'fit-content', marginTop: '20px'}} onClick={() => setTab(1)}>Тема:
                            Мета
                            Місце розташування лаби №5
                        </button>
                        <button style={{width: 'fit-content'}}>Способи функціонального застовування JavaScript</button>
                        <button style={{width: 'fit-content'}} onClick={() => setTab(2)}>Схема URL</button>
                        <button style={{width: 'fit-content'}} onClick={() => setTab(3)}>Обробник подій</button>
                        <button style={{width: 'fit-content'}} onClick={() => setTab(4)}>Підстановка</button>
                        <button style={{width: 'fit-content'}} onClick={() => setTab(5)}>Вставка (тег Script)</button>
                        <button style={{width: 'fit-content'}} onClick={() => setTab(6)}>Масиви (4 пункт)</button>
                        <button style={{width: 'fit-content'}} onClick={() => setTab(7)}>Виконання 6 пункту</button>
                        <button style={{width: 'fit-content'}} onClick={() => setTab(8)}>Висновки</button>
                    </div>
                    <div style={{display: "flex", width: '990px'}}>
                        {tab === 1 &&
                            <div style={{width:'100%'}}>
                                Тема:  ФУНКЦІОНАЛЬНЕ ЗАСТОСУВАННЯ JAVASCRIPT У HTML-ДОКУМЕНТІ.
                                ВИКОРИСТАННЯ МАСИВІВ У JS-СЦЕНАРІЯХ. РЕАЛІЗАЦІЯ ПРОГРАМ ЗАСОВАМИ МОВИ JAVASCRIPT
                                <br/>
                                Мета:<br />
                                Придбати практичні навички роботи з масивами у js-сценаріях.  Реалізація програм засобами мови JAVASCRIPT
                                <br />
                                Резюме: <a href="https://github.com/Markusplay/web-resume">https://github.com/Markusplay/web-resume</a>
                                <br />
                                Звіти: <a href="https://github.com/Markusplay/Web-6sem-reports">https://github.com/Markusplay/Web-6sem-reports</a>
                                <br />
                                Проєкт: <a href="https://github.com/Markusplay/pizzeria">https://github.com/Markusplay/pizzeria</a>
                                <br/>
                                Лабораторна 5: <a href="https://github.com/Markusplay/lab5-web">https://github.com/Markusplay/lab5-web</a>
                            </div>
                        }
                        { tab === 2 &&
                          <img src="lab5/url.png" style={{objectFit:"none"}}alt=""/>
                        }
                        { tab === 3 &&
                          <img src="lab5/event-handler.png" style={{objectFit:"none"}}alt=""/>
                        }
                        { tab === 4 &&
                          <img src="lab5/entity.png" style={{objectFit:"none"}} alt=""/> 
                        }
                        { tab === 5 &&
                          <img src="lab5/script.png" style={{ objectFit: 'none' }} alt=""/>
                        }
                        { tab === 6 &&
                          <img src="lab5/array.png" style={{ objectFit: 'none' }} alt=""/>
                        }
                        { tab === 7 &&
                          <div style={{display:'flex', flexDirection:'column'}}>
                              <img src="lab5/task6-res.png" style={{ objectFit: 'none' }} alt=""/>
                              <img src="lab5/task6-code.png" style={{ objectFit: 'none' }} alt=""/>
                          </div>
                        }
                        {tab === 8 &&
                          <p style={{width:'100%'}}>
                              Під час виконання лабораторної роботи ми придбали практичні навички з фунціонального застосування JAVASCRIPT У HTML-документі,
                              використання масивів у JS-сценаріях. Реалізація програм засобами мови JAVASCRIPT.
                          </p>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Lab5;