document.addEventListener('DOMContentLoaded', (event) => {
    updateFuelOptions();
});

function updateFuelOptions() {
    const vehicleType = document.getElementById('vehicleType').value;
    const fuelTypeSelect = document.getElementById('fuelType');

    fuelTypeSelect.innerHTML = ''; // Clear existing options

    if (vehicleType === '2W') {
        const option = document.createElement('option');
        option.value = 'gasoline';
        option.text = 'Gasoline';
        fuelTypeSelect.appendChild(option);
    } else {
        const dieselOption = document.createElement('option');
        dieselOption.value = 'diesel';
        dieselOption.text = 'Diesel';
        fuelTypeSelect.appendChild(dieselOption);

        const gasolineOption = document.createElement('option');
        gasolineOption.value = 'gasoline';
        gasolineOption.text = 'Gasoline';
        fuelTypeSelect.appendChild(gasolineOption);

        const cngOption = document.createElement('option');
        cngOption.value = 'cng';
        cngOption.text = 'CNG';
        fuelTypeSelect.appendChild(cngOption);
    }
}

function calculateEmission() {
    // Get the form values
    const fuelType = document.getElementById('fuelType').value;
    const distance = parseFloat(document.getElementById('distance').value);
    const mileage = parseFloat(document.getElementById('mileage').value);

    // Constants for CO2 emissions
    const emissionFactors = {
        diesel: 2.78,
        gasoline: 2.3
    };

    // Calculate the emissions
    const emissionFactor = emissionFactors[fuelType];
    const litersConsumedPerDay = distance / mileage;
    const emissionsPerDay = litersConsumedPerDay * emissionFactor;
    const emissionsPerYear = emissionsPerDay * 365;

    // Display the result
    document.getElementById('result').innerHTML = `
        <p>Daily CO<sub>2</sub> Emissions: ${emissionsPerDay.toFixed(2)} kg</p>
        <p>Yearly CO<sub>2</sub> Emissions: ${emissionsPerYear.toFixed(2)} kg</p>
    `;
}
