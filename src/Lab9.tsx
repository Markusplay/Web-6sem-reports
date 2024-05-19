import LabList from "../components/LabList.tsx";
import { useState } from "react";

const Lab9 = () => {
    const [tab, setTab] = useState(0)

    return (
    <>
        <LabList/>
            <div style={{display: "flex", width:'100%'}}>
                <div style={{display: "flex", gap: '20px',width:'100%'}}>
                    <div style={{display: "flex", flexDirection: "column", gap: '20px'}}>
                        <button style={{width: 'fit-content', marginTop: '20px'}} onClick={() => setTab(0)}>Тема:
                            Місце розташування лаби №9
                        </button>
                        <button style={{width: 'fit-content'}} onClick={() => setTab(1)}>Завдання 1</button>
                        <button style={{width: 'fit-content'}} onClick={() => setTab(2)}>Завдання 2</button>
                        <button style={{width: 'fit-content'}} onClick={() => setTab(3)}>Завдання 3</button>
                        <button style={{width: 'fit-content'}} onClick={() => setTab(4)}>Сертифікат + оцінки</button>
                    </div>
                    <div style={{display: "flex", marginTop:'15px'}}>
                        {tab === 0 &&
                            <div style={{width:'100%'}}>
                                Тема:   
                                Створення інтерфейсів WEB-застосувань з використанням React
                                <br/>
                                Звіти: <a href="https://github.com/Markusplay/Web-6sem-reports">https://github.com/Markusplay/Web-6sem-reports</a>
                                <br />
                            </div>
                        }
                        { tab === 1 &&
                        <div style={{display:'flex', width:'700px', flexDirection:'column'}}>
                            <img src="lab9/week1/c1.JPG" style={{objectFit:"cover"}} alt=""/>
                            <img src="lab9/week1/c2.JPG" style={{objectFit:"cover"}} alt=""/>
                            <img src="lab9/week1/c3.JPG" style={{objectFit:"cover"}} alt=""/>
                            <img src="lab9/week1/c4.JPG" style={{objectFit:"cover"}} alt=""/>
                            <img src="lab9/week1/c5.JPG" style={{objectFit:"cover"}} alt=""/>
                        </div>
                        }
                        { tab === 2 &&
                        <div style={{display:'flex', width:'700px', flexDirection:'column'}}>
                            <img src="lab9/week2/c1.JPG" style={{objectFit:"cover"}} alt=""/>
                            <img src="lab9/week2/c2.JPG" style={{objectFit:"cover"}} alt=""/>
                            <img src="lab9/week2/c3.JPG" style={{objectFit:"cover"}} alt=""/>
                            <img src="lab9/week2/c4.JPG" style={{objectFit:"cover"}} alt=""/>
                            <img src="lab9/week2/c5.JPG" style={{objectFit:"cover"}} alt=""/>
                        </div>
                        }
                        { tab === 3 &&
                        <div style={{display:'flex', width:'700px', flexDirection:'column'}}>
                            <img src="lab9/week3/c1.JPG" style={{objectFit:"cover"}} alt=""/>
                            <img src="lab9/week3/c2.JPG" style={{objectFit:"cover"}} alt=""/>
                            <img src="lab9/week3/c3.JPG" style={{objectFit:"cover"}} alt=""/>
                            <img src="lab9/week3/c4.JPG" style={{objectFit:"cover"}} alt=""/>
                        </div>
                        }
                        { tab === 4 &&
                        <div style={{display:'flex', width:'700px', flexDirection:'column'}}>
                            <img src="lab9/certificate.JPG" style={{objectFit:"cover"}} alt=""/>
                            <img src="lab9/grades.JPG" style={{objectFit:"cover"}} alt=""/>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Lab9;