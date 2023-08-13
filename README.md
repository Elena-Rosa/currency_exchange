# _Currency Exchange_

#### By _**Elena Rosa**_

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_


## Description

This application determins USD currency exchange rate in DOP,GBP, CAD,EUR,and JPY.

## Setup/Installation requirements

* Install node on your computer if you don't already have it. 

* Clone repo from Github to your desktop with this command. $ git clone https://Elena-Rosa.github.io/currency_exchange/

* Copy project directory  

* Run npm install 

* Run npm start

* You must get your own API Key. Go to https://www.exchangerate-api.com/ and create an account. Click "get free key"

Keep your key private! To do this read below. 

* Create a .env file in your root directory. This is where you will store your sensitive variables. Write your key here in this format. API_KEY=your key

*Run npm install dotenv-webpack@2.0.0 --save-dev
This will make your senstive variables available in your application. 

In your .gitignore file include the .env file and push to github first! Before any other files. This will ensure that any senstive variables (your key) will not be exposed to the public. 

*Anywhere that you use your API key in your application, call it in the following format. ${process.env.API_KEY}

* Enjoy!


## Known Bugs

* _No issues known_


## License


* _Copyright (c) _August 11st 2023_ _Elena Rosa)_

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
