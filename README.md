
# MATH CALCULATION CLI TOOL
# USING NODE JS

![App ScreenShot](<img width="598" height="155" alt="image" src="https://github.com/user-attachments/assets/cfe3dcf2-4657-477b-b492-0e0b043822b4" />)

## Author

- [@kunal Bhalerao](https://github.com/iamKunalBhalerao)


## Tech Stack

**System:** Node JS

## Setup Locally

Clone the project

```bash
  git clone https://github.com/iamKunalBhalerao/Math-CLI.git
```

Go to the project directory

```bash
  cd math-cli
```

Install all the dependancies

```bash
  npm install
```

Give execute permission

```bash
  chmod +x app.js
```

Install Locally in your Device

```bash
  npm link
```


## Usages

# Simple choice based calculation

```http
  mathcli choice
```

## Output
```http
   __  __    _  _____ _   _        ____ _     ___ 
 |  \/  |  / \|_   _| | | |      / ___| |   |_ _|
 | |\/| | / _ \ | | | |_| |_____| |   | |    | | 
 | |  | |/ ___ \| | |  _  |_____| |___| |___ | | 
 |_|  |_/_/   \_\_| |_| |_|      \____|_____|___|


Welcome to the Math Calculator!

√ Enter the first number: ... No.1
√ Enter the second number: ... No.2

? Choose an operation: » - Use arrow-keys. Return to submit.

>   Add
    Subtract
    Multiply
    Divide

```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `No.1` | `Number` | **Required**. First No. |
| `No.2` | `Number` | **Required**. Second No. |

#### Result

```http
  Addion of No.1 and No.2 is : Answer
```

![App Screenshot](<img width="682" height="343" alt="Screenshot 2025-11-14 135549" src="https://github.com/user-attachments/assets/f91c9f33-31a7-4bee-b59d-ff47230b2529" />)

## Takes two numbers and returns the Choice based results.

# Direct Command based calculation

### Addition

```http
  mathcli add
```

## Output
```http
  __  __    _  _____ _   _        ____ _     ___ 
 |  \/  |  / \|_   _| | | |      / ___| |   |_ _|
 | |\/| | / _ \ | | | |_| |_____| |   | |    | |
 | |  | |/ ___ \| | |  _  |_____| |___| |___ | |
 |_|  |_/_/   \_\_| |_| |_|      \____|_____|___|

Welcome to the Math Calculator!

√ Enter the first number: ... No.1
√ Enter the second number: ... No.2

```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `No.1` | `Number` | **Required**. First No. |
| `No.2` | `Number` | **Required**. Second No. |

#### Result

```http
  Addion of No.1 and No.2 is : Answer
```
![App Screenshot](<img width="523" height="273" alt="image" src="https://github.com/user-attachments/assets/cfc7b35e-f13f-432b-a67e-63a8d71d76ff" />)

### Subtraction

```http
  mathcli sub
```

## Output
```http
  __  __    _  _____ _   _        ____ _     ___ 
 |  \/  |  / \|_   _| | | |      / ___| |   |_ _|
 | |\/| | / _ \ | | | |_| |_____| |   | |    | |
 | |  | |/ ___ \| | |  _  |_____| |___| |___ | |
 |_|  |_/_/   \_\_| |_| |_|      \____|_____|___|


Welcome to the Math Calculator!

√ Enter the first number: ... No.1
√ Enter the second number: ... No.2

```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `No.1` | `Number` | **Required**. First No. |
| `No.2` | `Number` | **Required**. Second No. |

#### Result

```http
  Subtraction of No.1 and No.2 is : Answer
```

![App Screenshot](<img width="550" height="280" alt="image" src="https://github.com/user-attachments/assets/6ecc2dfd-6f15-4131-be5e-9267ce49ef30" />)

### Multiplication

```http
  mathcli mul
```

## Output
```http
  __  __    _  _____ _   _        ____ _     ___ 
 |  \/  |  / \|_   _| | | |      / ___| |   |_ _|
 | |\/| | / _ \ | | | |_| |_____| |   | |    | |
 | |  | |/ ___ \| | |  _  |_____| |___| |___ | |
 |_|  |_/_/   \_\_| |_| |_|      \____|_____|___|


Welcome to the Math Calculator!

√ Enter the first number: ... No.1
√ Enter the second number: ... No.2

```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `No.1` | `Number` | **Required**. First No. |
| `No.2` | `Number` | **Required**. Second No. |

#### Result

```http
  Multiplication of No.1 and No.2 is : Answer
```
![App Screenshot](<img width="566" height="276" alt="image" src="https://github.com/user-attachments/assets/4adca09c-8389-4288-a8ff-2f27af88c853" />)

### Divsion

```http
  mathcli div
```

## Output
```http
  __  __    _  _____ _   _        ____ _     ___ 
 |  \/  |  / \|_   _| | | |      / ___| |   |_ _|
 | |\/| | / _ \ | | | |_| |_____| |   | |    | |
 | |  | |/ ___ \| | |  _  |_____| |___| |___ | |
 |_|  |_/_/   \_\_| |_| |_|      \____|_____|___|


Welcome to the Math Calculator!

√ Enter the first number: ... No.1
√ Enter the second number: ... No.2

```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `No.1` | `Number` | **Required**. First No. |
| `No.2` | `Number` | **Required**. Second No. |

#### Result

```http
  Divsion of No.1 and No.2 is : Answer
```

![App Screenshot](<img width="543" height="273" alt="image" src="https://github.com/user-attachments/assets/785b00fd-d076-4d00-86ed-d0709ffc77d1" />)

### Run command, Give Inputs and get back result.
# Contributing

Contributions are always welcome!

`Pull requests` are welcome.

Open an `issue` if you want `new features` added.
## Feedback

If you have any feedback, please reach out to us at fake@fake.com

