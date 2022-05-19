let checkoutValue = 0
// function to display line items and calculate total checkout amount
function add(item, value){
  console.log('add', value)
  checkoutValue += value

  const cartItems = document.getElementById('cartItems')
  let lineItem = document.createElement('div')
  lineItem.innerHTML = `${item} - EUR ${value.toFixed(2)}`
  cartItems.appendChild(lineItem)
  

  const cartValue = document.getElementById('cartValue')
  cartValue.innerHTML =  `Total: EUR ${checkoutValue.toFixed(2)}`

  const button = document.getElementById('checkoutValue')
  button.value = checkoutValue
}

// function to clear basket
function clearBasket(){
  document.getElementById('cartItems').innerHTML=''
  document.getElementById('checkoutValue').value = ''
  checkoutValue = 0
  document.getElementById('cartValue').innerHTML=''
}

