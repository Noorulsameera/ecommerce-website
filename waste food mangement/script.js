function showDonationForm() {
    document.getElementById('donation-form').style.display = 'block';
    document.getElementById('donations-list').style.display = 'none';
}

function viewDonations() {
    document.getElementById('donation-form').style.display = 'none';
    document.getElementById('donations-list').style.display = 'block';
}

function addDonation(event) {
    event.preventDefault();
    const foodType = document.getElementById('food-type').value;
    const quantity = document.getElementById('quantity').value;
    const location = document.getElementById('location').value;

    const donation = { foodType, quantity, location };
    let donations = JSON.parse(localStorage.getItem('donations')) || [];
    donations.push(donation);
    localStorage.setItem('donations', JSON.stringify(donations));

    document.getElementById('food-type').value = '';
    document.getElementById('quantity').value = '';
    document.getElementById('location').value = '';

    alert('Donation added successfully!');
}

function viewDonations() {
    const donations = JSON.parse(localStorage.getItem('donations')) || [];
    const donationsList = document.getElementById('donations');
    donationsList.innerHTML = '';

    donations.forEach((donation, index) => {
        const donationItem = document.createElement('li');
        donationItem.textContent = `${donation.foodType}, Quantity: ${donation.quantity}, Location: ${donation.location}`;
        donationsList.appendChild(donationItem);
    });

    document.getElementById('donations-list').style.display = 'block';
}

function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // For simplicity, we are using a static username and password.
    if (username === 'admin' && password === 'admin') {
        alert('Login successful!');
        document.getElementById('user-dashboard').style.display = 'block';
        document.getElementById('login').style.display = 'none';
    } else {
        alert('Invalid username or password!');
    }
}
