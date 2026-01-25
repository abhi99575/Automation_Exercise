const signupData = {
  name: "rahul",
  email: `rahul_${Date.now()}@test.com`,
  password: "A1315.com",
  firstName: "rahu",
  lastName: "kl",
  address: "38-210/3,CNR",
  country: "Canada",
  state: "arabia",
  city: "hyd",
  zipcode: "322245",
  mobileNumber: "1232342353"
};

const payment = {
  nameOnCard: "rahul dravid",
  cardNumber: "4111111111111111",
  cvc: "123",
  expiry: "12",
  year: "2029"
}

module.exports = { signupData, payment };
