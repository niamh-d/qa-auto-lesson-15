# AUTOMATED TESTS FOR FORM FEATURE

## Scenarios

1. Form submit ("place order") button is initially disabled (input fields are empty)
2. Submit button is enabled when username and email field are correctly filed 
3. OK message is displayed when form is submitted 
4. Submit button is disabled when username field is empty

## list of locators

- BUTTON: data-testid="submit-order"
- INPUT USERNAME: data-testid="username"
- EMAIL USERNAME: data-testid="email"
- POP up message: #popup-message