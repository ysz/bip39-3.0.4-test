import * as bip39 from "bip39";

test("bip39 validates mnemonic", () => {
  /*mneList = []
    mnemonic = mneList.join(" ")
    if (mneList.length !== 12 && mneList.length !== 24) {
      Toast.info(getLanguage('seedLengthError'))
      return
    }*/
  let mnemonic =
    "attract can usual ridge double raw perfect point oppose sunset rose intact";
  let mnemonicValid = bip39.validateMnemonic(mnemonic);
  /*if (!mnemonicValid) {
      Toast.info(getLanguage('inputValidSeed'))
      return
    }*/

  expect(mnemonicValid).toBe(true);
});
