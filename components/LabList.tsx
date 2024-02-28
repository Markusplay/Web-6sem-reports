const LabList = () => {
    const labs=["/lab1","/lab2","/lab3","/lab4","/lab5"]
    return (
        <>
            <h2>Звіти з лабораторних робіт</h2>
            <h2>З дисципліни "Web-Орієнтовані технології.</h2>
            <h2>Основи Frontend та Backend розробок"</h2>
            <h3>Студент групи ІС-11 Шило Михайло Олександрович</h3>
            <div style={{display: 'flex', gap: '10px'}}>

                {
                    labs.map((lab, index) => (
                        <button key={index}><a href={lab}>Лабораторна робота №{index + 1}</a></button>
                    ))
                }
            </div>
        </>
    );
};

export default LabList;