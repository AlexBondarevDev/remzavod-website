# Website for LLC "Remzavod"

![remzavod](https://github.com/user-attachments/assets/c9a841b6-13f7-4ec6-acc0-b9ed498a68d7)

## Description
The website for LLC "Remzavod" is designed to present the company's services and products, improve customer interaction, and increase visibility online.

## Key Features
- **Home Page:** A welcome message, brief information about the company and its services, and site navigation.
- **Products:** A catalog of products with up-to-date information.
- **Projects:** Examples of the company's completed projects with detailed descriptions.
- **About Us:** Detailed information about the company's history, activities, and values.
- **Contacts:** Contact information, a feedback form, and a map showing the company's branch locations.

## Technologies
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** PHP
- **Database:** MySQL
- **Version Control:** Git

## Installation and Setup
### 1. Clone the repository: ###
    git clone https://github.com/AlexBond266/remzavod-website.git

### 2. Import the database to the hosting ###

In your hosting control panel, open ISP Manager, navigate to the "Databases" section, create a new database, open PHPMyAdmin, and import the file "remzavodstankovdb.xml".  
Set up the database and fill it with the necessary information.

_Since the target company had a small number of products, the product images are stored as follows:_  
_Text information about the products is stored in the database, and the corresponding product images are located in folders based on the principle "id == 7 --> .../img/products/7/"._

### 3. Configure the website's connection to the database ###

In the file .../php/database.php, fill in the details to connect to the database.  
Example:

    $servername = "localhost";
    $username = "remzavodstankovdb";
    $password = "12345";
    $dbname = "remzavodstankovdb";

### 4. Set up the feedback form to send data to the target email ###

The feedback form uses _[PHPMailer](https://github.com/PHPMailer/PHPMailer)_.  
Configure the .../php/mail.php file according to your needs, following the instructions in the library repository.

Ask your hosting provider's support team for the correct absolute path to your files on the server.  
Update the absolute path in the mail.php and getProductsImg.php files based on this information.  
Example:

    require_once('/var/www/data/www/remzavodstankov.ru/php/phpmailer/PHPMailerAutoload.php');

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.