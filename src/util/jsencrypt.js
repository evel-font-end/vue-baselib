import { JSEncrypt } from 'jsencrypt'

// 密钥对生成 http://web.chacuo.net/netrsakeypair

export const publicKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCF9emilwYbFcqTKJsSuCki5fogB8U/JBLtPSnnfyboPTDdSn3GNumY1IcWxvJFAEgqewSElfRK34NiSMYtSCdEpDbIGcmfSR+qPjrqGhG47AsQxUMhj9wjEQ/AYeuPzPmgbUOo0DTI7sEy6zNg76OC3U/uXRk4tMHjZXnKqITiLQIDAQAB'

const privateKey = 'MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAKP6JkZo6J4wx62\n' +
  'TPxvBruIpjP+kAeIlCS2h1NCud+jaV6yn40THPuTioiUA2\n' +
  'VUqNESNjXtIhtojQRrmwvlZJjiyRunxpF2vfMfl9lx3K4nsKebwWclmH5MigA18oHjJ7+\n' +
  'CNVr00Ujc8BeBEz7vm6s9/S583uU9KYolZjNcVgBitAgMBAAECgYAC+t3NM8TecxZ94\n' +
  'gooj/mEpKqqTqm2GWQ0TxeV/0Wwlp83RQnNSy2qbS/zKjPI525xvHzQu72\n' +
  'voypgucbbTzJxl94kdD0Nckq+cFO8hKTnPJfNowoE5tDo4DACk9BijkPijQ4/\n' +
  'SfzOOXkQw4XlmV5IvA2AQFkLb3qAOCd+zgAc4QJBANk/jOHWV4w86747Dn9AjR1\n' +
  'tMJHcttfc64iNz6VWo1biVR0mAruAImgw5vYOBFZUFq8y8kSL6GxD9qsyl7+O0\n' +
  'wkCQQDBOgV/QKhY8eSF1xDXleUOkT52oupldhfILx8kPzjUVBYXPw5ADgFsKnikzs1\n' +
  'upwkhS41iq58SJmA+Nlw/LQ2FAkEAplrLfoOrNm/P9TMzvq2nYUkjUA461\n' +
  'MEOetpcjrbxDK7zjgZ1QS61KiOIOBIzsAdj93SDn4miyISidiWfnce4QQJAIvz5n9g6Y5\n' +
  'ixc5bE4vSufFvKfrrzTJn8pm/56JtWFASB14XAc9LVaRurqtQTmNTAL3o5yMMg062FQd6\n' +
  'gB4SF7QJBAIXfzRuVEy7VFaKed7TGAf6DnroKXKwChPHylTFvor1yP8NKDqPo94bsD1\n' +
  'Vzcq5tVl4smugbBtsEEY1jKd4THrY='
// 加密
export function encrypt(txt: any) {
  const encryptor = new JSEncrypt()
  encryptor.setPublicKey(publicKey) // 设置公钥
  return encryptor.encrypt(txt) // 对数据进行加密
}

// 解密
export function decrypt(txt: any) {
  const encryptor = new JSEncrypt()
  encryptor.setPrivateKey(privateKey) // 设置私钥
  return encryptor.decrypt(txt) // 对数据进行解密
}

