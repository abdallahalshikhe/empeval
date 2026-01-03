document.addEventListener('DOMContentLoaded', () => {
    // Select elements
    const form = document.getElementById('evalForm');
    const totalResultDisplay = document.getElementById('totalResult');

    // Mapping of numeric keys to their input elements
    const criteria = [
        { input: 'scoreTime', range: 'rangeTime' },
        { input: 'scoreTask', range: 'rangeTask' },
        { input: 'scoreComm', range: 'rangeComm' },
        { input: 'scoreCreative', range: 'rangeCreative' },
        { input: 'scorePersonal', range: 'rangePersonal' },
    ];

    // Initialize event listeners for inputs and ranges
    criteria.forEach(item => {
        const numberInput = document.getElementById(item.input);
        const rangeInput = document.getElementById(item.range);

        // Sync Range -> Number
        rangeInput.addEventListener('input', (e) => {
            numberInput.value = e.target.value;
            calculateTotal();
        });

        // Sync Number -> Range
        numberInput.addEventListener('input', (e) => {
            // Validate max 100
            if (e.target.value > 100) e.target.value = 100;
            if (e.target.value < 0) e.target.value = 0;

            rangeInput.value = e.target.value;
            calculateTotal();
        });
    });

    function calculateTotal() {
        let total = 0;
        criteria.forEach(item => {
            const val = parseInt(document.getElementById(item.input).value) || 0;
            total += val;
        });

        // Animate the result
        totalResultDisplay.textContent = total;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Gather data
        const formData = {
            employee: {
                fullName: document.getElementById('fullName').value,
                department: document.getElementById('department').value,
                jobDescription: document.getElementById('jobDescription').value
            },
            evaluation: {
                scoreTime: parseInt(document.getElementById('scoreTime').value),
                scoreTask: parseInt(document.getElementById('scoreTask').value),
                scoreComm: parseInt(document.getElementById('scoreComm').value),
                scoreCreative: parseInt(document.getElementById('scoreCreative').value),
                scorePersonal: parseInt(document.getElementById('scorePersonal').value),
                totalResult: parseInt(totalResultDisplay.textContent)
            }
        };

        console.log("Mock API Call: POST /api/save_evaluation");
        console.log("Payload:", JSON.stringify(formData, null, 2));

        alert('Evaluation Submitted! Check console for data payload.');
    });
});
