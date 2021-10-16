import * as styles from "views/theme/styles"
// @ponicode
describe("styles.cssProps", () => {
    test("0", () => {
        let callFunction: any = () => {
            styles.cssProps(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
