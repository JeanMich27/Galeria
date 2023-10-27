// Obtén una lista de todos los elementos .box
const boxes = document.querySelectorAll('.box');

// Recorre los elementos y agrega un evento de escucha para el evento hover
boxes.forEach((box, index) => {
    box.addEventListener('mouseover', () => {
        // Cuando el mouse entra en un elemento .box
        // Ajusta las columnas de la cuadrícula según el índice
        const container = box.closest('.container');
        const columnConfig = getColumnConfig(index);
        container.style.gridTemplateColumns = columnConfig;
    });
});

function getColumnConfig(index) {
    const defaultConfig = '1fr 1fr 1fr 1fr 1fr';

    switch (index) {
        case 0:
            return '3fr 1fr 1fr 1fr 1fr';
        case 1:
            return '1fr 3fr 1fr 1fr 1fr';
        case 2:
            return '1fr 1fr 3fr 1fr 1fr';
        case 3:
            return '1fr 1fr 1fr 3fr 1fr';
        case 4:
            return '1fr 1fr 1fr 1fr 3fr';
        default:
            return defaultConfig;
    }
}

