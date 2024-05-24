// PayPal configuration and setup
paypal.Buttons({
    createOrder: function (data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '10.00' // Amount to be paid
                }
            }]
        });
    },
    onApprove: function (data, actions) {
        return actions.order.capture().then(function (details) {
            alert('Transaction completed by ' + details.payer.name.given_name);
            // You can also make an API call to your server here to confirm the payment
            console.log(details);
        });
    },
    onError: function (err) {
        console.error('An error occurred during the transaction', err);
        alert('An error occurred during the transaction. Please try again.');
    }
}).render('#paypal-button-container');
