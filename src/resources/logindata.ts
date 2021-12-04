import { decodeFromBase64String } from "src/utils/base64Utils";
import { internet as random } from 'faker'

const herokuappBase64EncodedPassword = "U3VwZXJTZWNyZXRQYXNzd29yZCE=";

export const herokuappLoginData = {
    validUserName: 'tomsmith',
    validPassword: () => decodeFromBase64String(herokuappBase64EncodedPassword),
    invalidUserName: random.userName(),
    invalidPassword: random.password(6)
}