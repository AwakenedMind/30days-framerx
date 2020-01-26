// import * as React from "react"
// import { Override, Data } from "framer"

// const appState = Data({
//     progress: 0,
// })

// export function ProgressBar(): Override {
//     return {
//         progress: appState.progress,
//     }
// }

// export function Button(): Override {
//     return {
//         onTap: () => {
//             appState.progress = 100
//         },
//     }
// }

///
/// SIGN IN
///

// import { Override, Data } from "framer"
// import * as React from "react"

// const appState = Data({
//     emailError: "BLANK_ERROR",
//     passwordError: "BLANK_INPUT",
// })

// export function EmailInput(): Override {
//     return {
//         onValueChange: (value: string) => {
//             console.log(value.includes("@"))

//             appState.emailError =
//                 value.length === 0
//                     ? "BLANK_INPUT"
//                     : !value.includes("@") || !value.includes(".com")
//                     ? "WRONG_INPUT"
//                     : ""
//         },
//     }
// }

// export function PasswordInput(): Override {
//     return {
//         onValueChange: (value: string) => {
//             console.log(value.includes("@"))

//             appState.emailError =
//                 value.length === 0
//                     ? "BLANK_INPUT"
//                     : value.length < 5
//                     ? "WRONG_INPUT"
//                     : ""
//         },
//     }
// }

// export function EmailError(): Override {
//     const errorMessages = {
//         BLANK_INPUT: "Enter your email address",
//         WRONG_FORMAT: "Enter a valid email address",
//     }

//     return {
//         visible: appState.emailError !== "",
//         text: errorMessages[appState.emailError],
//     }
// }

// export function PasswordError(): Override {
//     const errorMessages = {
//         BLANK_INPUT: "Enter your password",
//         WRONG_FORMAT: "Your password is too short",
//     }

//     return {
//         visible: appState.passwordError !== "",
//         text: errorMessages[appState.passwordError],
//     }
// }

// export function ContinueButton(): Override {
//     return {
//         disabled: appState.emailError || appState.passwordError,
//     }
// }
