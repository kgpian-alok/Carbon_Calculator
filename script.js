document.getElementById("currentYear").textContent = new Date().getFullYear();

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
    const resultDiv = document.getElementById('result');
    
    if (!distance && !mileage) {
        alert("All fields are mandatory.");
        return;
    }

    if (!distance) {
        alert("Please enter average distance traveling per day");
        return;
    }

    if (!mileage) {
        alert("Please enter mileage of your vehicle");
        return;
    }

    const distanceFloat = parseFloat(distance);
    const mileageFloat = parseFloat(mileage);
    
    const emissionFactors = {
        diesel: 2.78,
        gasoline: 2.3,
        cng: 1.8
    };

    const emissionFactor = emissionFactors[fuelType];
    const litersConsumedPerDay = distanceFloat / mileageFloat;
    const emissionsPerDay = litersConsumedPerDay * emissionFactor;
    const emissionsPerYear = emissionsPerDay * 365;

    resultDiv.classList.remove("hidden");
    
    document.getElementById('result').innerHTML = `
        <p>Daily CO<sub>2</sub> Emissions: ${emissionsPerDay.toFixed(3)} kg</p>
        <p>Yearly CO<sub>2</sub> Emissions: ${emissionsPerYear.toFixed(3)} kg</p>
    `;
}
