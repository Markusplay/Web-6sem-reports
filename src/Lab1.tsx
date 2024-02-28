import LabList from "../components/LabList.tsx";
import {useState} from "react";

const Lab1 = () => {
    const [tab, setTab] = useState(1)
    return (
        <>
        <LabList/>
        <div style={{display: "flex", width:'100%'}}>  
            <div style={{display: "flex", gap: '20px',width:'100%'}}>
                <div style={{display: "flex", flexDirection: "column", gap: '20px'}}>
                <button style={{width: 'fit-content', marginTop: '20px'}} onClick={() => setTab(1)}>Опис предметного
                    середовища
                </button>
                <button style={{width: 'fit-content'}} onClick={() => setTab(2)}>Тема мета місце розташування лаби №1
                </button>
                <button style={{width: 'fit-content'}} onClick={() => setTab(3)}>Структура документу</button>
                <button style={{width: 'fit-content'}} onClick={() => setTab(4)}>HTML-код таблиць</button>
                <button style={{width: 'fit-content'}} onClick={() => setTab(5)}>HTML-код форми</button>
                <button style={{width: 'fit-content'}} onClick={() => setTab(6)}>HTML-код зображення</button>
                <button style={{width: 'fit-content'}} onClick={() => setTab(7)}>Висновки</button>
                </div>
                <div style={{display: "flex", width:'990px'}}>
                    {tab === 1 &&
                        <p style={{width:'100%'}}>
                            Веб-додаток для клієнтів, які можуть дивитися список піц, отримувати детальну інформацію по кожній, додавати в кошик
                        </p>
                    }
                    {tab === 2 && 
                    <p style={{width:'100%'}}>
                        Тема: СТРУКТУРА HTML-ДОКУМЕНТА. ВИБІР ПРЕДМЕТНОЇ ГАЛУЗІ.
                        РОБОТА З ПОСИЛАННЯМИ, ТАБЛИЦЯМИ, ЗОБРАЖЕННЯМИ, СПИСКАМИ в HTML-ДОКУМЕНТІ.

                        Мета: придбати практичні навички роботи  з HTML-документом, таблицями, , зображеннями, посиланнями, списками, формами
                        Створити шаблон звітного HTML-документом для відображення результатів роботи всіх лабораторних робіт.
                        Резюме: https://github.com/Markusplay/web-resume
                        Звіти: https://github.com/Markusplay/Web-6sem-reports
                        Проєкт: https://github.com/Markusplay/pizzeria
                    </p>
                    }
                    {tab === 3 &&
                        <code style={{width:'100%'}}>
                            &lt;header&gt;
                            &lt;h1&gt;
                            &lt;/h1&gt;
                            &lt;header/&gt;
                            &lt;main&gt;

                            &lt;h2&gt;
                            &lt;h2/&gt;

                            &lt;img/&gt;

                            &lt;p&gt;
                            &lt;/p&gt;

                            &lt;ol&gt;
                            &lt;li&gt;
                            &lt;/li&gt;
                            &lt;/ol&gt;

                            &lt;/main&gt;

                            &lt;footer&gt;
                            &lt;ul&gt;
                            &lt;li&gt;
                            &lt;/li&gt;
                            &lt;/ul&gt;
                            &lt;/footer&gt;
                        </code>
                    }
                    {tab === 4 &&
                        <code style={{width:'100%'}}>
                            &lt;table&gt;
                            &lt;thead&gt;
                            &lt;tr&gt;
                            &lt;th&gt;Pepperoni&lt;/th&gt;
                            &lt;th&gt;Pepperoni&lt;/th&gt;
                            &lt;th&gt;Pepperoni&lt;/th&gt;
                            &lt;/tr&gt;
                            &lt;/thead&gt;
                            &lt;tbody&gt;
                            &lt;tr&gt;
                            &lt;td&gt;Fresh basil&lt;/td&gt;
                            &lt;td&gt;Fresh basil&lt;/td&gt;
                            &lt;td&gt;Fresh basil&lt;/td&gt;
                            &lt;/tr&gt;
                            &lt;tr&gt;
                            &lt;td&gt;Crushed Red Pepper Flakes&lt;/td&gt;
                            &lt;td&gt;Crushed Red Pepper Flakes&lt;/td&gt;
                            &lt;td&gt;Crushed Red Pepper Flakes&lt;/td&gt;
                            &lt;/tr&gt;
                            &lt;tr&gt;
                            &lt;td&gt;Jalapeño Slices&lt;/td&gt;
                            &lt;td&gt;Jalapeño Slices&lt;/td&gt;
                            &lt;td&gt;Jalapeño Slices&lt;/td&gt;
                            &lt;/tr&gt;
                            &lt;/tbody&gt;
                            &lt;/table&gt;
                        </code>
                    }
                    {tab === 5 &&
                        <code style={{width:'100%'}}>
                            &lt;form&gt;
                            &lt;label&gt;
                            &lt;/input&gt;
                            &lt;/label&gt;
                            &lt;button&gt;
                            &lt;/button&gt;
                            &lt;/form&gt;
                        </code>}
                    {tab === 6 && 
                    <code style={{width:'100%'}}>
                        &lt;img src="/main-pizza.svg" alt="Nice big pizza"/&gt;
                        </code>
                    }
                    {tab === 7 &&
                        <p style={{width:'100%'}}>
                            Під час виконання лабораторної роботи ми створили макет свого проєкту, створили першу весртку проєкту.
                            Придбали практичні навички роботи  з HTML-документом, таблицями, зображеннями, посиланнями, списками, формами
                            Створили шаблон звітного HTML-документом для відображення результатів роботи всіх лабораторних робіт.
                        </p>
                    }
                </div>
            </div>
        </div>
        </>
    );
};

export default Lab1;