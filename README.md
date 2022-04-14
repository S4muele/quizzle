<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://s4muele.github.io/quizzle/" target="_blank">
    <img src="images/quizzle_thumb.png" alt="Logo" width="20%">
  </a>

<h3 align="center">Quizzle</h3>

  <p align="center">
    A web based trivia game made with React.
    <br />
    <a href="https://github.com/S4muele/quizzle"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://s4muele.github.io/quizzle/" target="_blank">View Demo</a>
    ·
    <a href="https://github.com/S4muele/quizzle/issues" target="_blank">Report Bug</a>
    ·
    <a href="https://github.com/S4muele/quizzle/issues" target="_blank">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<div align="center">
  <a href="https://s4muele.github.io/quizzle/" target="_blank" align="center">
    <img src="images/quizzle_thumb.png" alt="Logo" width="80%" max-width="650">
  </a>
  
</div>

<br>
A web based quiz game using data from the <a href="https://opentdb.com/api_config.php">Open Trivia Database API</a>.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [React.js](https://reactjs.org/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running, you might follow these example steps.

### Prerequisites

This project was bootstrapped with [Create React App](https://create-react-app.dev/docs/getting-started/).
<br>
To create one, first make sure you have the latest version of node.js and npm (or yarn) installed to your machine, then run the appropriate command for your chosen package manager: 
* npm
  ```sh
    npx create-react-app my-app
  ```
* yarn
  ```
    yarn create react-app my-app
  ```

### Installation

1. Clone this repository to your local machine:
   ```sh
   git clone https://github.com/S4muele/Tenzies.git
   ```
2. Copy the Quizzle files to your newely created React App boilerplate.

3. You'll need [nanoid](https://github.com/ai/nanoid#readme) installed as a dependency to your project. If you don't have it already:
   ```sh
   npm install --save nanoid
   ```
4. Finally, navigate to the application folder and run it:
   ```
    npm start
   ```
<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Quizzle, makes use of the Open Trivia Database API to generate the quiz data. Currently the app returns 5 questions per match, but this could be customised by changing the request in the `App.js` file.

For instance, it could only return specific categories of questions, difficulty levels, types and so on. Visit their [documentation](https://opentdb.com/api_config.php) to learn more about cutomising the request.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

[S4muele](https://www.linkedin.com/in/samuele-simeone-b27173216/) - [@anthony_sime](https://twitter.com/anthony_sime)

Project Link: [https://github.com/github_username/repo_name](https://github.com/S4muele/quizzle)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* Thanks to [othneildrew](https://github.com/othneildrew) for this amazing template.

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/S4muele/quizzle.svg?style=for-the-badge
[contributors-url]: https://github.com/S4muele/quizzle/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/S4muele/quizzle.svg?style=for-the-badge
[forks-url]: https://github.com/S4muele/quizzle/network/members
[stars-shield]: https://img.shields.io/github/stars/S4muele/quizzle.svg?style=for-the-badge
[stars-url]: https://github.com/S4muele/quizzle/stargazers
[issues-shield]: https://img.shields.io/github/issues/S4muele/quizzle.svg?style=for-the-badge
[issues-url]: https://github.com/S4muele/quizzle/issues
[license-shield]: https://img.shields.io/github/license/S4muele/quizzle.svg?style=for-the-badge
[license-url]: https://github.com/S4muele/quizzle/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/samuele-simeone-b27173216/
[product-screenshot]: images/quizzle_thumb.png
