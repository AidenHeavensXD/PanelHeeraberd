document.addEventListener('DOMContentLoaded', () => {
    const functions = [
        { toggleId: 'toggle-lock-head', controlsId: 'controls-lock-head' },
        { toggleId: 'toggle-suck-head', controlsId: 'controls-suck-head' },
        { toggleId: 'toggle-devil-ego', controlsId: 'controls-devil-ego' },
        { toggleId: 'toggle-pipo', controlsId: 'controls-pipo' },
        { toggleId: 'toggle-suck-hee', controlsId: 'controls-suck-hee' },
        { toggleId: 'toggle-bad-play', controlsId: 'controls-bad-play' }
    ];

    functions.forEach(func => {
        const toggle = document.getElementById(func.toggleId);
        const controls = document.getElementById(func.controlsId);
        const slider = controls.querySelector('.percentage-slider');
        const percentValue = controls.querySelector('.percent-value');
        const featureCard = toggle.closest('.feature-card');

        toggle.addEventListener('change', () => {
            if (toggle.checked) {
                controls.style.display = 'block';
                controls.classList.add('active');
                controls.classList.remove('inactive');
                featureCard.classList.add('active');
                slider.value = 100;
                percentValue.textContent = '100%';
            } else {
                controls.classList.add('inactive');
                controls.classList.remove('active');
                featureCard.classList.remove('active');
                setTimeout(() => {
                    controls.style.display = 'none';
                }, 100);
            }
        });

        slider.addEventListener('input', () => {
            percentValue.textContent = `${slider.value}%`;
        });
    });
});