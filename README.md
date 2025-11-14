
# MATH CALCULATION CLI TOOL
# USING NODE JS

![App ScreenShot]([<img width="598" height="155" alt="image" src="https://github.com/user-attachments/assets/cfe3dcf2-4657-477b-b492-0e0b043822b4" />](https://github-production-user-asset-6210df.s3.amazonaws.com/141581585/514316491-cfe3dcf2-4657-477b-b492-0e0b043822b4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20251114%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251114T083845Z&X-Amz-Expires=300&X-Amz-Signature=06e7b94dc82db50facdfb5ba3cb0312a1d6e683085789bbc2cab8141ad88db61&X-Amz-SignedHeaders=host))

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

![App Screenshot](https://github-production-user-asset-6210df.s3.amazonaws.com/141581585/514313951-f91c9f33-31a7-4bee-b59d-ff47230b2529.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20251114%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251114T083920Z&X-Amz-Expires=300&X-Amz-Signature=c36b15c2fcc8a5194c54d56bc0ad4e606bbe0dfdcf21fda6938e382a412e553a&X-Amz-SignedHeaders=host)

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
![App Screenshot](https://github-production-user-asset-6210df.s3.amazonaws.com/141581585/514314866-cfc7b35e-f13f-432b-a67e-63a8d71d76ff.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20251114%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251114T083957Z&X-Amz-Expires=300&X-Amz-Signature=b9b48ec663d09f17f9000c4e5b697fcddb0062cea32d58a2812581ed0bc18b51&X-Amz-SignedHeaders=host)

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

![App Screenshot](https://github-production-user-asset-6210df.s3.amazonaws.com/141581585/514315615-6ecc2dfd-6f15-4131-be5e-9267ce49ef30.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20251114%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251114T084023Z&X-Amz-Expires=300&X-Amz-Signature=1e0556d95cd895555ae0234505bf6e633e0eb01489760c7349dbdb6a9c1b49c6&X-Amz-SignedHeaders=host)

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
![App Screenshot](https://github-production-user-asset-6210df.s3.amazonaws.com/141581585/514315912-4adca09c-8389-4288-a8ff-2f27af88c853.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20251114%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251114T084046Z&X-Amz-Expires=300&X-Amz-Signature=6b054a1d3bc2cd33a78e891b4a39d0d97a8f4dc83f859d80e73dce14e3406db3&X-Amz-SignedHeaders=host)

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

![App Screenshot](https://github-production-user-asset-6210df.s3.amazonaws.com/141581585/514316157-785b00fd-d076-4d00-86ed-d0709ffc77d1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20251114%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251114T084108Z&X-Amz-Expires=300&X-Amz-Signature=8a8dfef5524a888adbe355b89276912efc14bfab5184df6813fc1b7780e34a6b&X-Amz-SignedHeaders=host)

### Run command, Give Inputs and get back result.
# Contributing

Contributions are always welcome!

`Pull requests` are welcome.

Open an `issue` if you want `new features` added.
## Feedback

If you have any feedback, please reach out to us at fake@fake.com

