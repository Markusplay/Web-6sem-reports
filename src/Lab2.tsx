import LabList from "../components/LabList.tsx";
import {useState} from "react";

const Lab2 = () => {
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
                <button style={{width: 'fit-content'}} onClick={() => setTab(2)}>Тема:
                    Мета
                    Місце розташування лаби №2
                </button>
                <button style={{width: 'fit-content'}} onClick={() => setTab(8)}>Способи підключення стилів</button>
                <button style={{width: 'fit-content'}} onClick={() => setTab(3)}>Селектор тегу </button>
                <button style={{width: 'fit-content'}} onClick={() => setTab(4)}>Селектор класу</button>
                <button style={{width: 'fit-content'}} onClick={() => setTab(5)}>Селектори ідентифікаторів</button>
                <button style={{width: 'fit-content'}} onClick={() => setTab(6)}>CSS: Шрифти Текст Таблиці Фон Контур Списки CSS просунутий</button>
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
                        Тема: КАСКАДНІ ТАБЛИЦІ СТИЛІВ. СЕЛЕКТОРИ .ІДЕНТИФІКАТОРИ. СТИЛЬОВЕ ОФОРМЛЕННЯ ТЕКСТОВИХ ЕЛЕМЕНТІВ В HTML-ДОКУМЕНТАХ.
                        РОБОТА З ПОСИЛАННЯМИ, ТАБЛИЦЯМИ, ЗОБРАЖЕННЯМИ, СПИСКАМИ в HTML-ДОКУМЕНТІ.

                        Мета: придбати практичні навички роботи з селекторами, ідентифікаторами,
                        списками, різноманітними властивостями кольору і фону, зовнішними та
                        внутрішними відступами, плаваючими елементами, оформленням текстових
                        елементів
                        <br />
                        Резюме: <a>https://github.com/Markusplay/web-resume</a>
                        <br />
                        Звіти: <a>https://github.com/Markusplay/Web-6sem-reports</a>
                        <br />
                        Проєкт: <a>https://github.com/Markusplay/pizzeria</a>
                    </p>
                    }
                    {tab === 8 &&
                    <div style={{width:'100%'}}>
                        <h3>Зовнішні стилі</h3>
                        <img src="lab2/sl1.png"/>
                        <h3>Таблиці стилів документу</h3>
                        <img src="lab2/sl2.png"/>
                        <h3>Inline-стилі</h3>
                        <img src="lab2/sl3.png"/> 
                    </div>
                    }
                    {tab === 3 &&
                    <div style={{width:'100%'}}>
                        <img src="lab2/image3.png" />
                        <img src="lab2/image4.png" />
                    </div>
                    }
                    {tab === 4 &&
                        <div style={{width:'100%'}}>
                        <img src="lab2/image5.png" />
                        <img src="lab2/image6.png" />
                    </div>
                    }
                    {tab === 5 &&
                        <div style={{width:'100%'}}>
                            <img src="lab2/image.png" />
                            <img src="lab2/image2.png" />
                        </div>
                        }
                    {tab === 6 && 
                        <code style={{width:'100%'}}>
                            <img src="lab2/image7.png" />
                            <img src="lab2/image8.png" />
                        </code>
                    }
                    {tab === 7 &&
                        <p style={{width:'100%'}}>
                            Під час виконання лабораторної роботи ми придбали практичні навички роботи з селекторами, ідентифікаторами,
                        списками, різноманітними властивостями кольору і фону, зовнішними та
                        внутрішними відступами, плаваючими елементами, оформленням текстових
                        елементів
                        </p>
                    }
                </div>
            </div>
        </div>
        </>
    );
};

export default Lab2;