const productTitle = document.getElementById('product-title')
const shortDescription = document.getElementById('short-description-text')
const productDescription = document.getElementById('product-description-text')
const mailtoField = document.getElementById('mailto')

const form = document.querySelector('form')

let emailDestination = 'kleemoffdeveloper@gmail.com'
const subject = 'Changes Request'
let body = ''

window.onload = () => {
    shortDescription.textContent = 
    `Engraving Available in Spanish, Japanese, French, Arabic, Portuguese and Chinese. Download Product Information
    
For Quick Delivery:

10-Day Delivery: All other options.`

    productDescription.textContent = 
    `Summary
----------------------------------------------------------------------------------------

Product Features
----------------------------------------------------------------------------------------
    `
}

form.addEventListener('submit', (event) => {
    event.preventDefault()

    emailDestination = mailtoField.value ? mailtoField.value : emailDestination

    body = `Product Title: ${productTitle.value}\n\n Short Description: ${shortDescription.value}\n\n Product Description:\n ${productDescription.value}`
    body = encodeURIComponent(body)
    window.open(`mailto:${emailDestination}?subject=${subject}&body=${body}`)
})

document.getElementById('logo-button').addEventListener('click', () => {
    window.open('https://wordpress-932013-3235695.cloudwaysapps.com/', 'blank')
})