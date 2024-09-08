Paddle.Initialize({
  token: 'live_6737cab42996802977e7026ba22',
  pwCustomer: { }
})

const subscriptionPlans = {
  monthly: {
    priceId: 'pri_01j5njtaj7nxpymat4jhh0fbny',
    quantity: 1
  },
  yearly :{  
    priceId: 'pri_01j5njqca8kkfvrgms650zyh3h',
    quantity: 1
  }
}

function openCheckout(item){
  Paddle.Checkout.open({
    items: [subscriptionPlans[item]]
  });
}