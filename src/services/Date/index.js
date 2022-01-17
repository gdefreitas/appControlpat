export function getDate(){
    return new Date().getTime();
}

export function dateFormated(date){
    const data = new Date(date);
    const listSemana = {
        0: "DOM",
        1: "SEG",
        2: "TER",
        3: "QUA",
        4: "QUI",
        5: "SEX",
        6: "SAB"
    }
    const listMes = {
        0: "JAN",
        1: "FEV",
        2: "MAR",
        3: "ABR",
        4: "MAIO",
        5: "JUN",
        6: "JUL",
        7: "AGO",
        8: "SET",
        9: "OUT",
        10: "NOV",
        11: "DEZ"
    }
    const semana = listSemana[data.getDay()];
    const dia = data.getDate().toString().padStart(2, '0');
    const mes  = listMes[data.getMonth()];
    const ano  = data.getYear()-100;
    const horas = data.getHours().toString().padStart(2, '0');
    const minutos = data.getMinutes().toString().padStart(2, '0');
    return `${semana} ${dia} ${mes} ${ano} - ${horas}:${minutos}`;
}