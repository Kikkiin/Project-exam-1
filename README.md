# Project Exam 1
# Osloblog: Oslo by blogg

![oslo skyline] (images/readmeimage.jpg)

 <!-- (https://user-images.githubusercontent.com/52622303/164316813-4b12d99f-aeb7-4069-85cf-e72b3a50ac99.png) -->

An engaging and informative blog dedicated to everything about Oslo, from hidden gems to well-known attractions.

## Description

The Oslo City Blog is a project created to share insights, stories, and tips about Norway's capital, Oslo. This blog is perfect for both tourists and locals looking to explore the city in a more in-depth manner. The project includes:

    - Personal anecdotes and experiences from various places in Oslo
    - Guides to Oslo's culture, cuisine, and entertainment
    - Photographs and visual stories that highlight the city's unique character

## Built With

The technologies and tools used in this project include:

- [Wordpress](https://wordpress.org/) - fetching images and blogposts from wordpress
- [Visual studio code](https://code.visualstudio.com/) - Codeeditor
- [One](https://one.com/) - Hosting my wordpress content

## Getting Started

### Installing

This project was developed using Local by Flywheel, exported, coded using Visual Studio Code, and then set up on a live server. Follow these steps to replicate or set up the project:

1. Setup Local by flywheel:
    - Download and install Local by Flywheel.
    - Create a new WordPress site in Local by Flywheel.

2. Clone the repo:
    - Clone the project's GitHub repository to your local machine.

```bash
git clone https://github.com/Noroff-FEU-Assignments/project-exam-1-Kikkiin
```
    - Copy the contents from the repository into the corresponding WordPress site in Local by Flywheel (typically into the wp-content folder).

3. Custom development with vscode: 
    - Use Visual Studio Code to open the cloned repository and make any necessary code changes.

4. Install the dependencies:

```
npm install
```

5. Import database:
    - Use Local by Flywheel to import the SQL file containing the website's database.


Live Server Setup

1. Prepare Live Server:
    - Ensure you have a web server with WordPress support (like one.com).
    - Install WordPress on the server.

2. Upload Content:
    - Use FileZilla or a similar FTP program to upload the wp-content folder from your local WordPress installation to the server.
    - Upload the SQL database to the server's database.

3. Update WordPress Configuration:
    - Update the wp-config.php on the server with the correct database connection details.
    - If the website's URL has changed (from local to live), update the URL in the database. 

4. Test the Website:
    - Once everything is set up, thoroughly test the website to ensure everything is functioning correctly on the live server.


### Running

To run the app, execute the following commands:

```bash
npm run start
```

## Contributing

Anyone interested in contributing to the project, whether it be through content, code improvements, or bug fixes, is welcome to do so. For larger projects, please open a pull request for review before merging your changes.

## Contact

Feel free to contact me for questions, feedback, or collaborations:

[My LinkedIn page](www.linkedin.com)

[My email](kristinkristiansen9@gmail.com)

## License

You can link to your license file here if you're using one, or mention what license the codebase falls under. If you're unsure then you can simply delete this section.

## Acknowledgments

Special thanks to everyone who has contributed to the project, especially:
