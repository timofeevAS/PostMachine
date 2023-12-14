# ReactJS Post Machine Simulator 

This project is a ReactJS application that implements a Turing Machine. With this simulator, you can write and execute your own Turing Machine code step by step.

## Table of Contents

- [Setup code](#setup-code)
- [Usage](#usage)
- [Example](#example)
- [Contributing](#contributing)

## Setup Code

To get started with this project, follow these steps:

### **Clone the Repository and setup NPM**
```bash
git clone https://github.com/timofeevAS/PostMachine/post-machine
cd PostMachine
npm install
npm start
```

### Usage
1. Post machine code editor. Available any post machine instructions:
   * 'V' j (mark current cell and go to j command)
   * 'X' j (clear current cell and go to j command)
   * '>' j (move to right cell and go to j command)
   * '<' j (move to left cell and go to j command)
   * ? j1; j2 (if current cell V go to j1 else j2)
   * ! finish
2. Post machine is turing complete model to simulate something algorithms.

### Example:

[Github-pages](timofeevas.github.io/PostMachine/)


### Contributing

The project was done by me alone and I was inspired by the lectures of my teacher on the theory of computing _Vostrov Alexey Vladimirovich_
Contributions are welcome! If you find any issues or have ideas for improvements, please open an issue or submit a pull request.

