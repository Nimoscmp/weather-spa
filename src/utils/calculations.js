export const calculateDay = (day, lang) => {

    let stringDay;

    if (lang === 'eng') {
        switch (day) {
            case 1:
                stringDay = 'Monday';
                break;
            case 2:
                stringDay = 'Tuesday';
                break;
            case 3:
                stringDay = 'Wednesday';
                break;
            case 4:
                stringDay = 'Thursday';
                break;
            case 5:
                stringDay = 'Friday';
                break;
            case 6:
                stringDay = 'Saturday';
                break;
            case 7:
                stringDay = 'Sunday';
                break;
            default:
                stringDay = '';
                break;
        } 
    } else {
        switch (day) {
            case 1:
                stringDay = 'Lunes';
                break;
            case 2:
                stringDay = 'Martes';
                break;
            case 3:
                stringDay = 'Miércoles';
                break;
            case 4:
                stringDay = 'Jueves';
                break;
            case 5:
                stringDay = 'Viernes';
                break;
            case 6:
                stringDay = 'Sábado';
                break;
            case 7:
                stringDay = 'Domingo';
                break;
            default:
                stringDay = '';
                break;
        }
    }

    return stringDay;
}