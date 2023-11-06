const colorBoxes = document.querySelectorAll('.boxcolor');
const colorMixer = document.getElementById('colorMixer');

colorBoxes.forEach((box) => {
    box.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('color', box.id);
    });
});

colorMixer.addEventListener('dragover', (event) => {
    event.preventDefault();
});

colorMixer.addEventListener('drop', (event) => {
    event.preventDefault();

    const color = event.dataTransfer.getData('color');
    const currentColor = colorMixer.style.backgroundColor;

    if (color === 'x') {
        colorMixer.style.backgroundColor = 'rgb(255, 255, 255)';
    } else if (currentColor) {
        const newColor = `color-mix(in srgb, ${currentColor} 100%, ${color} 100%)`;
        colorMixer.style.backgroundColor = newColor;
    } else {
        colorMixer.style.backgroundColor = color;
    }

    colorMixer.textContent = '';
});
