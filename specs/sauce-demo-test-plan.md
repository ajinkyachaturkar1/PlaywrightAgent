# SauceDemo Test Plan

## Application Overview

Test plan for SauceDemo covering authentication, inventory browsing, cart, checkout, and basic error handling for a standard user journey.

## Test Scenarios

### 1. SauceDemo Core Flows

**Seed:** `tests/seed.spec.js`

#### 1.1. Successful login and inventory access

**File:** `tests/sauce-demo-successful-login.spec.js`

**Steps:**
  1. Open the SauceDemo login page
    - expect: The login form is displayed with username, password, and login fields.
  2. Enter the username standard_user and the password secret_sauce
    - expect: The credentials are accepted and the application navigates to the inventory page.
  3. Verify the inventory page loads
    - expect: The Products heading is visible and the inventory list is displayed.

#### 1.2. Failed login validation

**File:** `tests/sauce-demo-failed-login.spec.js`

**Steps:**
  1. Open the SauceDemo login page
    - expect: The login form is displayed.
  2. Enter an invalid username and the correct password
    - expect: A clear error message is shown indicating the credentials do not match any user.
  3. Confirm the user remains on the login page
    - expect: The user is not redirected to the inventory page.

#### 1.3. Add item to cart and review cart

**File:** `tests/sauce-demo-cart.spec.js`

**Steps:**
  1. Log in with standard_user and secret_sauce
    - expect: The inventory page is displayed.
  2. Add a product to the cart
    - expect: The cart badge updates to show one item.
  3. Open the cart
    - expect: The selected product appears in the cart with its name and price.

#### 1.4. Complete checkout with valid customer details

**File:** `tests/sauce-demo-checkout.spec.js`

**Steps:**
  1. Log in with standard_user and secret_sauce
    - expect: The inventory page is displayed.
  2. Add at least one product to the cart and proceed to checkout
    - expect: The checkout information form is displayed.
  3. Enter first name, last name, and postal code
    - expect: The Continue action advances the user to the checkout overview page.
  4. Finish the order
    - expect: The confirmation page appears with a success message such as Thank you for your order!.

#### 1.5. Logout from the application

**File:** `tests/sauce-demo-logout.spec.js`

**Steps:**
  1. Log in with standard_user and secret_sauce
    - expect: The inventory page is displayed.
  2. Open the burger menu and select Logout
    - expect: The user is returned to the login page and the session is cleared.
